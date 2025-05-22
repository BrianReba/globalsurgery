// src/pages/backoffice/BackofficePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  listBudgets,
  createBudget,
  getBudgetById,
} from '../../services/budgetServices';

import { Link } from 'react-router-dom';

// Componente para un item de presupuesto en la lista
const BudgetItem = ({ budget, onSelectBudget }) => (
  <div
    className='p-4 border rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer bg-white'
    onClick={() => onSelectBudget(budget.id)}
  >
    <h3 className='font-semibold text-lg text-cyan-700'>
      Presupuesto ID: {budget.id}
    </h3>
    <p className='text-sm text-gray-600'>Cliente: {budget.client_name}</p>
    <p className='text-sm text-gray-600'>
      Fecha: {new Date(budget.issue_date).toLocaleDateString()}
    </p>
    <p className='text-sm text-gray-600'>
      Total: ${budget.total_amount?.toFixed(2) || 'N/A'}
    </p>
  </div>
);

// Componente para el detalle de un presupuesto (modal o sección)
const BudgetDetailModal = ({ budget, onClose }) => {
  if (!budget) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold text-cyan-800'>
            Detalle Presupuesto ID: {budget.id}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 text-2xl'
          >
            ×
          </button>
        </div>
        <p>
          <strong>Cliente:</strong> {budget.client_name}
        </p>
        <p>
          <strong>Fecha:</strong>{' '}
          {new Date(budget.issue_date).toLocaleDateString()}
        </p>
        <p className='mt-2'>
          <strong>Notas:</strong> {budget.notes || 'N/A'}
        </p>

        <h3 className='text-lg font-semibold mt-6 mb-2 text-gray-700'>
          Líneas del Presupuesto:
        </h3>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>
                  Descripción
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>
                  Cant.
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>
                  P. Unit.
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {budget.lines?.map((line, index) => (
                <tr key={index}>
                  <td className='px-4 py-2 whitespace-nowrap text-sm'>
                    {line.item_description}
                  </td>
                  <td className='px-4 py-2 whitespace-nowrap text-sm'>
                    {line.quantity}
                  </td>
                  <td className='px-4 py-2 whitespace-nowrap text-sm'>
                    ${line.unit_price?.toFixed(2)}
                  </td>
                  <td className='px-4 py-2 whitespace-nowrap text-sm'>
                    ${line.line_total?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='text-right font-bold text-xl mt-4 text-gray-800'>
          Total: ${budget.total_amount?.toFixed(2)}
        </p>
        <button
          onClick={onClose}
          className='mt-6 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md transition'
        >
          Cerrar Detalle
        </button>
      </div>
    </div>
  );
};

const BackofficePage = () => {
  const { user, token } = useAuth();
  const [budgets, setBudgets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedBudgetDetail, setSelectedBudgetDetail] = useState(null);

  // Estados para el formulario de creación
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [budgetLines, setBudgetLines] = useState([
    { description: '', quantity: 1, unit_price: 0 },
  ]);

  const fetchBudgets = async () => {
    if (!token) return; // No hacer fetch si no hay token
    setIsLoading(true);
    setError('');
    try {
      const data = await listBudgets(); // El token se añade automáticamente por el interceptor de apiClient
      setBudgets(data || []);
    } catch (err) {
      setError(
        'Error al cargar los presupuestos: ' +
          (err.message || 'Error desconocido')
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, [token]); // Volver a cargar si el token cambia (después del login)

  const handleAddLine = () => {
    setBudgetLines([
      ...budgetLines,
      { description: '', quantity: 1, unit_price: 0 },
    ]);
  };

  const handleLineChange = (index, field, value) => {
    const newLines = [...budgetLines];
    newLines[index][field] = value;
    // Convertir a número si es cantidad o precio
    if (field === 'quantity' || field === 'unit_price') {
      newLines[index][field] = parseFloat(value) || 0;
    }
    setBudgetLines(newLines);
  };

  const handleRemoveLine = (index) => {
    const newLines = budgetLines.filter((_, i) => i !== index);
    setBudgetLines(newLines);
  };

  const handleCreateBudget = async (e) => {
    e.preventDefault();
    if (!token) {
      setError('No autenticado para crear presupuestos.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const newBudgetData = {
        client_name: clientName,
        notes: notes,
        issue_date: new Date().toISOString().split('T')[0],
        lines: budgetLines.map((line, index) => ({
          item_description: line.description,
          quantity: Number(line.quantity),
          unit_price: Number(line.unit_price),
          sort_order:
            line.sort_order !== undefined ? Number(line.sort_order) : index + 1,
        })),
      };
      await createBudget(newBudgetData);
      fetchBudgets(); // Recargar lista
      setShowCreateForm(false);
      setClientName('');
      setClientEmail('');
      setNotes('');
      setBudgetLines([{ description: '', quantity: 1, unit_price: 0 }]);
    } catch (err) {
      setError(
        'Error al crear el presupuesto: ' + (err.message || 'Error desconocido')
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectBudget = async (budgetId) => {
    if (!token) return;
    setIsLoading(true);
    try {
      const budgetDetails = await getBudgetById(budgetId);
      setSelectedBudgetDetail(budgetDetails);
    } catch (err) {
      setError(
        'Error al cargar detalle del presupuesto: ' +
          (err.message || 'Error desconocido')
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Si no hay usuario/token, podríamos mostrar un mensaje o redirigir (esto se manejará con ProtectedRoute después)
  if (!token && !isLoading) {
    // Si isLoading es true, AuthContext aún está cargando
    return (
      <div className='text-center p-10'>
        <p className='text-xl text-red-600'>Acceso Denegado.</p>
        <p>
          Por favor,{' '}
          <Link
            to='/login'
            className='text-cyan-700 hover:underline'
          >
            inicie sesión
          </Link>{' '}
          para acceder al backoffice.
        </p>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Gestión de Presupuestos - TEST
        </h1>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className='bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-4 rounded-lg shadow transition'
        >
          {showCreateForm ? 'Cancelar' : 'Crear Nuevo Presupuesto'}
        </button>
      </div>

      {error && (
        <div
          className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded'
          role='alert'
        >
          {error}
        </div>
      )}
      {isLoading && !showCreateForm && !selectedBudgetDetail && (
        <div className='text-center py-4'>Cargando presupuestos...</div>
      )}

      {/* Formulario de Creación (Condicional) */}
      {showCreateForm && (
        <div className='bg-white p-6 md:p-8 rounded-lg shadow-xl mb-10 border border-gray-200'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-6'>
            Nuevo Presupuesto
          </h2>
          <form
            onSubmit={handleCreateBudget}
            className='space-y-6'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='clientName'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Nombre Cliente
                </label>
                <input
                  type='text'
                  id='clientName'
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500'
                />
              </div>
              <div>
                <label
                  htmlFor='clientEmail'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email Cliente
                </label>
                <input
                  type='email'
                  id='clientEmail'
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='notes'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Notas Adicionales
              </label>
              <textarea
                id='notes'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows='3'
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500'
              ></textarea>
            </div>

            <h3 className='text-lg font-medium text-gray-700 pt-4 border-t border-gray-200'>
              Líneas del Presupuesto
            </h3>
            {budgetLines.map((line, index) => (
              <div
                key={index}
                className='grid grid-cols-12 gap-4 items-end p-3 bg-gray-50 rounded-md'
              >
                <div className='col-span-12 sm:col-span-5'>
                  <label
                    htmlFor={`line-desc-${index}`}
                    className='block text-xs font-medium text-gray-600 mb-1'
                  >
                    Descripción
                  </label>
                  <input
                    type='text'
                    id={`line-desc-${index}`}
                    value={line.description}
                    onChange={(e) =>
                      handleLineChange(index, 'description', e.target.value)
                    }
                    required
                    className='w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor={`line-qty-${index}`}
                    className='block text-xs font-medium text-gray-600 mb-1'
                  >
                    Cantidad
                  </label>
                  <input
                    type='number'
                    id={`line-qty-${index}`}
                    value={line.quantity}
                    min='1'
                    onChange={(e) =>
                      handleLineChange(index, 'quantity', e.target.value)
                    }
                    required
                    className='w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor={`line-price-${index}`}
                    className='block text-xs font-medium text-gray-600 mb-1'
                  >
                    Precio Unit.
                  </label>
                  <input
                    type='number'
                    id={`line-price-${index}`}
                    value={line.unit_price}
                    min='0'
                    step='0.01'
                    onChange={(e) =>
                      handleLineChange(index, 'unit_price', e.target.value)
                    }
                    required
                    className='w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm'
                  />
                </div>
                <div className='col-span-12 sm:col-span-2 flex justify-end'>
                  {budgetLines.length > 1 && (
                    <button
                      type='button'
                      onClick={() => handleRemoveLine(index)}
                      className='text-red-500 hover:text-red-700 font-medium text-sm py-1.5 px-2'
                    >
                      Quitar
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type='button'
              onClick={handleAddLine}
              className='text-cyan-700 hover:text-cyan-900 font-medium text-sm py-2 px-3 border border-cyan-700 rounded-md hover:bg-cyan-50 transition'
            >
              + Añadir Línea
            </button>

            <div className='flex justify-end pt-4'>
              <button
                type='button'
                onClick={() => setShowCreateForm(false)}
                className='mr-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50'
              >
                Cancelar
              </button>
              <button
                type='submit'
                disabled={isLoading}
                className='py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-700 hover:bg-cyan-800 disabled:bg-gray-400'
              >
                {isLoading ? 'Guardando...' : 'Guardar Presupuesto'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lista de Presupuestos */}
      {!showCreateForm && budgets.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {budgets.map((budget) => (
            <BudgetItem
              key={budget.id}
              budget={budget}
              onSelectBudget={handleSelectBudget}
            />
          ))}
        </div>
      )}
      {!showCreateForm && !isLoading && budgets.length === 0 && (
        <div className='text-center py-10 text-gray-500'>
          No hay presupuestos para mostrar.
        </div>
      )}

      {/* Modal de Detalle del Presupuesto */}
      <BudgetDetailModal
        budget={selectedBudgetDetail}
        onClose={() => setSelectedBudgetDetail(null)}
      />
    </div>
  );
};

export default BackofficePage;
