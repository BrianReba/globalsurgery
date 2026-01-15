// src/pages/backoffice/BackofficePage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  listBudgets,
  createBudget,
  getBudgetById,
  deleteBudget,
  updateBudget,
} from '../../services/budgetServices';
import { Link } from 'react-router-dom';
import {
  FaEdit,
  FaTrashAlt,
  FaFilePdf,
  FaPlus,
  FaMinusCircle,
} from 'react-icons/fa';
import { generateBudgetPDF } from '../../utils/pdfGenerator';
// NAVIDAD - Remover después de temporada
import logoImage from '../../assets/logo-navidad.svg';
import { SectionLoader, ButtonSpinner } from '../../components/LoadingSpinner';
//iva
const taxOptions = [
  { label: 'Exento (0%)', value: 0 },
  { label: 'IVA (10.5%)', value: 10.5 },
  { label: 'IVA (21%)', value: 21 },
];

// Componente para un item de presupuesto en la lista
const BudgetItem = ({
  budget,
  onSelectBudget,
  onEdit,
  onDelete,
  onDownloadPDF,
  downloadingPdf,
  deletingBudget,
  selectingBudget,
  editingBudgetId,
}) => (
  <div className='flex px-4 py-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white group gap-4'>
    <div
      onClick={() => onSelectBudget(budget.id)}
      className='cursor-pointer flex-grow min-w-0 relative'
    >
      {selectingBudget === budget.id && (
        <div className='absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg'>
          <ButtonSpinner
            size='md'
            variant='primary'
          />
        </div>
      )}
      <h3 className='font-bold text-xl md:text-2xl text-blue-800 flex items-baseline'>
        <span className='truncate'>{budget.client_name}</span>
        <span className='text-lg md:text-xl font-normal text-gray-600 ml-1 whitespace-nowrap'>
          presupuesto
        </span>
      </h3>
      <p className='text-xs text-gray-500 mt-2 font-mono'>ID: {budget.id}</p>
      <p className='text-sm text-gray-700 mt-3'>
        Fecha: {new Date(budget.issue_date).toLocaleDateString()}
      </p>
      <p className='text-xl text-gray-900 font-extrabold mt-2'>
        Total: ${parseFloat(budget.total_amount)?.toFixed(2) || 'N/A'}
      </p>
    </div>

    <div className='flex flex-col space-y-3 justify-center items-center flex-shrink-0'>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(budget);
        }}
        disabled={editingBudgetId === budget.id}
        title='Editar Presupuesto'
        className='text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50 transform hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center'
      >
        {editingBudgetId === budget.id ? (
          <ButtonSpinner
            size='sm'
            variant='primary'
          />
        ) : (
          <FaEdit size={20} />
        )}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDownloadPDF(budget.id);
        }}
        disabled={downloadingPdf === budget.id}
        title='Descargar PDF'
        className='text-red-600 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transform hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center'
      >
        {downloadingPdf === budget.id ? (
          <ButtonSpinner
            size='sm'
            variant='danger'
          />
        ) : (
          <FaFilePdf size={20} />
        )}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(budget.id);
        }}
        disabled={deletingBudget === budget.id}
        title='Eliminar Presupuesto'
        className='text-gray-600 hover:text-gray-700 p-2 rounded-full hover:bg-gray-50 transform hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center'
      >
        {deletingBudget === budget.id ? (
          <ButtonSpinner
            size='sm'
            variant='secondary'
          />
        ) : (
          <FaTrashAlt size={20} />
        )}
      </button>
    </div>
  </div>
);

const BudgetDetailModal = ({ budget, onClose }) => {
  if (!budget) return null;

  const formatTaxPercentage = (percentageString) => {
    const percentage = parseFloat(percentageString);
    if (isNaN(percentage)) return 'N/A';
    if (percentage === 0) return 'Exento (0%)';
    return `IVA (${percentage.toFixed(1)}%)`;
  };

  const parseAndFormatCurrency = (amountString) => {
    const amount = parseFloat(amountString);
    return isNaN(amount) ? 'N/A' : `$${amount.toFixed(2)}`;
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50'>
      <div className='bg-white p-6 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center pb-4 mb-4 border-b border-gray-200'>
          <h2 className='text-2xl font-bold text-blue-800'>
            Detalle Presupuesto:{' '}
            <span className='font-normal text-gray-800'>
              {budget.client_name}
            </span>
          </h2>
          <button
            onClick={onClose}
            className='text-gray-600 hover:text-gray-900 text-3xl leading-none font-light p-1 transition-colors'
          >
            ×
          </button>
        </div>
        <p className='text-sm text-gray-500 mb-3 font-mono'>ID: {budget.id}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-5 text-gray-700'>
          <p>
            <strong>Fecha Emisión:</strong>{' '}
            {new Date(budget.issue_date).toLocaleDateString()}
          </p>
        </div>
        <p className='mt-2 mb-6 whitespace-pre-wrap break-words text-gray-700'>
          <strong>Notas / Información de Contacto:</strong>{' '}
          {budget.notes && budget.notes.trim() !== '' ? budget.notes : 'N/A'}{' '}
        </p>

        <h3 className='text-xl font-semibold mt-6 mb-3 text-blue-700 border-b border-blue-100 pb-2'>
          Líneas del Presupuesto:
        </h3>
        <div className='overflow-x-auto mb-6 border border-gray-200 rounded-md'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-blue-50'>
              <tr>
                <th className='px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider'>
                  Descripción
                </th>
                <th className='px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider'>
                  Cant.
                </th>
                <th className='px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider'>
                  P. Unit.
                </th>
                <th className='px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider'>
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-100'>
              {budget.lines?.map((line, index) => (
                <tr
                  key={line.id || index}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className='px-4 py-2.5 whitespace-nowrap text-sm text-gray-800'>
                    {line.item_description}
                  </td>
                  <td className='px-4 py-2.5 whitespace-nowrap text-sm text-center text-gray-700'>
                    {line.quantity}
                  </td>
                  <td className='px-4 py-2.5 whitespace-nowrap text-sm text-right text-gray-700'>
                    {parseAndFormatCurrency(line.unit_price)}
                  </td>
                  <td className='px-4 py-2.5 whitespace-nowrap text-sm text-right text-gray-800 font-medium'>
                    {parseAndFormatCurrency(line.line_total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='mt-8 pt-5 border-t-2 border-blue-100 space-y-2 text-right'>
          <p className='text-md text-gray-700'>
            <strong>Subtotal:</strong>{' '}
            {parseAndFormatCurrency(budget.subtotal_amount)}
          </p>
          <p className='text-md text-gray-700'>
            <strong>
              {formatTaxPercentage(budget.applied_tax_percentage)}:
            </strong>{' '}
            {parseAndFormatCurrency(budget.tax_amount)}
          </p>
          <p className='text-2xl font-extrabold text-blue-800 mt-2'>
            <strong>Total:</strong>{' '}
            {parseAndFormatCurrency(budget.total_amount)}
          </p>
        </div>

        <button
          onClick={onClose}
          className='mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-md transition-all shadow-md hover:shadow-lg'
        >
          Cerrar Detalle
        </button>
      </div>
    </div>
  );
};

const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg shadow-xl p-6 max-w-sm w-full'>
        <h3 className='text-lg font-semibold text-gray-800 mb-4'>{title}</h3>
        <p className='text-gray-600 mb-6 whitespace-pre-line'>{message}</p>{' '}
        <div className='flex justify-end space-x-3'>
          <button
            onClick={onCancel}
            className='py-2 px-4 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors'
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className='py-2 px-4 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors'
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

const BackofficePage = () => {
  const { token } = useAuth();
  const [budgets, setBudgets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(null); // ID del presupuesto que se está descargando
  const [deletingBudget, setDeletingBudget] = useState(null); // ID del presupuesto que se está eliminando
  const [selectingBudget, setSelectingBudget] = useState(null); // ID del presupuesto que se está seleccionando
  const [editingBudgetId, setEditingBudgetId] = useState(null); // ID del presupuesto que se está preparando para editar
  const [error, setError] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedBudgetDetail, setSelectedBudgetDetail] = useState(null);
  const [editingBudget, setEditingBudget] = useState(null);

  const [clientName, setClientName] = useState('');
  const [appliedTaxPercentage, setAppliedTaxPercentage] = useState(
    taxOptions[0].value
  ); // Default a Exento
  const [notes, setNotes] = useState('');
  const [budgetLines, setBudgetLines] = useState([
    { description: '', quantity: 1, unit_price: 0 },
  ]);

  const [calculatedSubtotal, setCalculatedSubtotal] = useState(0);
  const [calculatedTaxAmount, setCalculatedTaxAmount] = useState(0);
  const [calculatedTotal, setCalculatedTotal] = useState(0);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [budgetToDeleteId, setBudgetToDeleteId] = useState(null);

  const populateFormForEdit = (budget) => {
    setClientName(budget.client_name || '');
    setNotes(budget.notes || '');
    setAppliedTaxPercentage(
      parseFloat(budget.applied_tax_percentage) || taxOptions[2].value
    );

    if (budget.lines && budget.lines.length > 0) {
      setBudgetLines(
        budget.lines.map((line) => ({
          id: line.id,
          description: line.item_description || '',
          quantity: parseFloat(line.quantity) || 1,
          unit_price:
            parseFloat(line.unit_price) === 0
              ? 0
              : parseFloat(line.unit_price) || '',
        }))
      );
    } else {
      setBudgetLines([{ description: '', quantity: 1, unit_price: 0 }]);
    }
  };

  const fetchBudgets = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError('');
    try {
      const data = await listBudgets();
      setBudgets(data || []);
    } catch (err) {
      setError(
        'Error al cargar los presupuestos: ' +
          (err.response?.data?.error || err.message || 'Error desconocido')
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchBudgets();
    }
  }, [token, fetchBudgets]);

  const handleAddLine = () => {
    setBudgetLines([
      ...budgetLines,
      { description: '', quantity: 1, unit_price: 0 },
    ]);
  };

  const handleLineChange = (index, field, value) => {
    const newLines = [...budgetLines];
    if (field === 'quantity' || field === 'unit_price') {
      newLines[index][field] = value === '' ? '' : parseFloat(value);
    } else {
      newLines[index][field] = value;
    }
    setBudgetLines(newLines);
  };

  const handleRemoveLine = (index) => {
    const newLines = budgetLines.filter((_, i) => i !== index);
    setBudgetLines(newLines);
  };

  const resetAndCloseForm = () => {
    setClientName('');
    setNotes('');
    setAppliedTaxPercentage(taxOptions[2].value);
    setBudgetLines([{ description: '', quantity: 1, unit_price: 0 }]);
    setShowCreateForm(false);
    setEditingBudget(null);
    setError('');
  };

  const handleSelectBudget = async (budgetId) => {
    if (!token) return;
    setSelectingBudget(budgetId);
    setError('');
    try {
      const budgetDetails = await getBudgetById(budgetId);
      setSelectedBudgetDetail(budgetDetails);
    } catch (err) {
      setError(
        'Error al cargar detalle del presupuesto: ' +
          (err.response?.data?.error || err.message || 'Error desconocido')
      );
      console.error(err);
      setSelectedBudgetDetail(null);
    } finally {
      setSelectingBudget(null);
    }
  };

  const handleEditBudget = async (budgetSummary) => {
    setEditingBudgetId(budgetSummary.id);
    setError('');
    try {
      const budgetDetailsToEdit = await getBudgetById(budgetSummary.id);
      if (budgetDetailsToEdit) {
        setEditingBudget(budgetDetailsToEdit);
        populateFormForEdit(budgetDetailsToEdit);
        setShowCreateForm(true);
        setSelectedBudgetDetail(null);
      } else {
        setError('No se pudo cargar el presupuesto para editar.');
      }
    } catch (err) {
      setError(
        'Error al preparar la edición: ' + (err.message || 'Error desconocido')
      );
      console.error(err);
    } finally {
      setEditingBudgetId(null);
    }
  };

  const handleDeleteBudgetClick = (budgetId) => {
    setBudgetToDeleteId(budgetId);
    setIsConfirmModalOpen(true);
  };

  const confirmDeleteBudget = async () => {
    if (!budgetToDeleteId) return;

    setDeletingBudget(budgetToDeleteId);
    setError('');
    try {
      await deleteBudget(budgetToDeleteId);
      fetchBudgets();
    } catch (err) {
      console.error('Error al eliminar el presupuesto:', err);
      setError(
        'Error al eliminar el presupuesto: ' +
          (err.response?.data?.error || err.message || 'Error desconocido')
      );
    } finally {
      setDeletingBudget(null);
      setIsConfirmModalOpen(false);
      setBudgetToDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setIsConfirmModalOpen(false);
    setBudgetToDeleteId(null);
  };

  const handleDownloadPDF = async (budgetId) => {
    setDownloadingPdf(budgetId);
    setError('');
    try {
      const budgetDetails = await getBudgetById(budgetId);
      if (budgetDetails) {
        generateBudgetPDF(budgetDetails, logoImage);
      } else {
        setError(
          'No se pudieron cargar los detalles del presupuesto para el PDF.'
        );
      }
    } catch (err) {
      console.error('Error al generar PDF:', err);
      setError('Error al generar PDF: ' + (err.message || 'Error desconocido'));
    } finally {
      setDownloadingPdf(null);
    }
  };

  const calculateCurrentTotals = useCallback(() => {
    let currentSubtotal = 0;
    budgetLines.forEach((line) => {
      const quantity = parseFloat(line.quantity) || 0;
      const unitPrice = parseFloat(line.unit_price) || 0;
      currentSubtotal += quantity * unitPrice;
    });

    const taxRate = parseFloat(appliedTaxPercentage) || 0;
    const currentTaxAmount = currentSubtotal * (taxRate / 100);
    const currentTotal = currentSubtotal + currentTaxAmount;

    setCalculatedSubtotal(currentSubtotal);
    setCalculatedTaxAmount(currentTaxAmount);
    setCalculatedTotal(currentTotal);
  }, [budgetLines, appliedTaxPercentage]);

  // Efecto para recalcular totales cuando cambian las líneas o el porcentaje de IVA
  useEffect(() => {
    calculateCurrentTotals();
  }, [calculateCurrentTotals]);

  if (!token && !isLoading) {
    return (
      <div className='text-center p-10 bg-gray-50 min-h-screen flex flex-col items-center justify-center'>
        <p className='text-xl text-red-600 mb-4'>Acceso Denegado.</p>
        <p className='text-gray-700'>
          Por favor,{' '}
          <Link
            to='/login'
            className='text-blue-700 hover:underline font-medium'
          >
            inicie sesión
          </Link>{' '}
          para acceder al backoffice.
        </p>
      </div>
    );
  }

  const handleSubmitBudget = async (e) => {
    e.preventDefault();
    if (!token) {
      setError('No autenticado.');
      return;
    }
    setIsLoading(true);
    setError('');

    const sanitizedBudgetLines = budgetLines.map((line) => ({
      id: line.id,
      item_description: line.description,
      quantity: Number(line.quantity) || 0,
      unit_price: Number(line.unit_price) || 0,
      sort_order: line.sort_order || 1,
    }));

    const budgetPayload = {
      client_name: clientName,
      notes: notes,
      applied_tax_percentage: appliedTaxPercentage,
      lines: sanitizedBudgetLines,
    };

    if (!editingBudget) {
      budgetPayload.issue_date = new Date().toISOString().split('T')[0];
    }

    try {
      if (editingBudget) {
        await updateBudget(editingBudget.id, budgetPayload);
      } else {
        await createBudget(budgetPayload);
      }
      fetchBudgets();
      resetAndCloseForm();
    } catch (err) {
      setError(
        `Error al ${editingBudget ? 'actualizar' : 'crear'} el presupuesto: ` +
          (err.response?.data?.error ||
            err.response?.data?.errors?.join(', ') ||
            err.message ||
            'Error desconocido')
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto p-6 min-h-screen bg-gradient-to-r from-gray-50 to-blue-100'>
      <div className='flex justify-between items-center mb-10 pb-4 border-b border-gray-200'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
          {' '}
          Gestión de Presupuestos
        </h1>
        <button
          onClick={() => {
            if (showCreateForm) {
              resetAndCloseForm();
            } else {
              setEditingBudget(null);
              setShowCreateForm(true);
            }
          }}
          className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5'
        >
          {showCreateForm ? 'Cancelar Creación' : 'Crear Nuevo Presupuesto'}
        </button>
      </div>

      {error && (
        <div
          className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md shadow-sm'
          role='alert'
        >
          {error}
        </div>
      )}

      {isLoading &&
        !showCreateForm &&
        !selectedBudgetDetail &&
        !editingBudget && <SectionLoader text='Cargando presupuestos...' />}

      {showCreateForm && (
        <div className='bg-white p-8 rounded-lg shadow-2xl mb-12 border border-gray-200'>
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>
            {' '}
            {editingBudget ? 'Editar Presupuesto' : 'Nuevo Presupuesto'}
          </h2>
          <form
            onSubmit={handleSubmitBudget}
            className='space-y-8'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {' '}
              <div>
                <label
                  htmlFor='clientName'
                  className='block text-sm font-semibold text-gray-800 mb-2'
                >
                  Nombre Cliente <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='clientName'
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  placeholder='Ej. Hospital Central'
                  className='w-full px-4 py-2.5 border border-blue-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400'
                />
              </div>
              <div>
                <label
                  htmlFor='appliedTax'
                  className='block text-sm font-semibold text-gray-800 mb-2'
                >
                  IVA Aplicado
                </label>
                <select
                  id='appliedTax'
                  value={appliedTaxPercentage}
                  onChange={(e) =>
                    setAppliedTaxPercentage(parseFloat(e.target.value))
                  }
                  className='w-full px-4 py-2.5 border border-blue-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white appearance-none pr-8 cursor-pointer transition-colors duration-200'
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3e%3cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'%3e%3c/path%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  {taxOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor='notes'
                className='block text-sm font-semibold text-gray-800 mb-2'
              >
                Notas | Información de contacto
              </label>
              <textarea
                id='notes'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows='4'
                placeholder='Añade detalles relevantes o información de contacto aquí...'
                className='w-full px-4 py-2.5 border border-blue-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400'
              ></textarea>
            </div>

            <h3 className='text-2xl font-bold text-blue-700 pt-6 border-t border-blue-100 mb-6'>
              Líneas del Presupuesto
            </h3>
            <div className='space-y-4'>
              {budgetLines.map((line, index) => (
                <div
                  key={line.id || index}
                  className='grid grid-cols-1 md:grid-cols-12 gap-4 items-end p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm'
                >
                  <div className='col-span-12 md:col-span-6'>
                    <label
                      htmlFor={`line-desc-${index}`}
                      className='block text-xs font-semibold text-gray-700 mb-1'
                    >
                      Descripción <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id={`line-desc-${index}`}
                      value={line.description}
                      onChange={(e) =>
                        handleLineChange(index, 'description', e.target.value)
                      }
                      required
                      placeholder='Descripción del artículo o servicio'
                      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400'
                    />
                  </div>
                  <div className='col-span-6 md:col-span-2'>
                    <label
                      htmlFor={`line-qty-${index}`}
                      className='block text-xs font-semibold text-gray-700 mb-1'
                    >
                      Cantidad <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='number'
                      id={`line-qty-${index}`}
                      value={line.quantity}
                      min='0.01'
                      step='any'
                      onChange={(e) =>
                        handleLineChange(index, 'quantity', e.target.value)
                      }
                      required
                      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                    />
                  </div>
                  <div className='col-span-6 md:col-span-3'>
                    <label
                      htmlFor={`line-price-${index}`}
                      className='block text-xs font-semibold text-gray-700 mb-1'
                    >
                      Precio Unit. <span className='text-red-500'>*</span>
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
                      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                    />
                  </div>
                  <div className='col-span-12 md:col-span-1 flex items-center justify-end md:justify-center pt-3 md:pt-0'>
                    {budgetLines.length > 1 && (
                      <button
                        type='button'
                        onClick={() => handleRemoveLine(index)}
                        className='text-red-500 hover:text-red-700 p-1.5 rounded-full hover:bg-red-100 transition-colors transform hover:scale-110'
                        title='Quitar línea'
                      >
                        <FaMinusCircle size={22} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              type='button'
              onClick={handleAddLine}
              className='bg-blue-100 text-blue-700 hover:bg-blue-200 font-semibold text-sm py-2.5 px-4 rounded-md border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-2'
            >
              <FaPlus size={14} />
              <span>Añadir Línea</span>
            </button>

            {/* Sección de resumen de cálculo en tiempo real */}
            <div className='mt-8 pt-6 border-t-2 border-blue-100 space-y-2 text-right'>
              <p className='text-md text-gray-700'>
                <strong>Subtotal:</strong> ${calculatedSubtotal.toFixed(2)}
              </p>
              <p className='text-md text-gray-700'>
                <strong>IVA ({appliedTaxPercentage}%):</strong> $
                {calculatedTaxAmount.toFixed(2)}
              </p>
              <p className='text-2xl font-extrabold text-blue-800 mt-2'>
                <strong>Total Estimado:</strong> ${calculatedTotal.toFixed(2)}
              </p>
            </div>

            <div className='flex justify-end pt-6 border-t border-gray-200 mt-6'>
              <button
                type='button'
                onClick={resetAndCloseForm}
                className='mr-4 py-2.5 px-5 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200'
              >
                Cancelar
              </button>
              <button
                type='submit'
                disabled={isLoading}
                className='py-2.5 px-6 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2'
              >
                {isLoading && <ButtonSpinner />}
                {isLoading
                  ? 'Guardando...'
                  : editingBudget
                  ? 'Actualizar Presupuesto'
                  : 'Guardar Presupuesto'}
              </button>
            </div>
          </form>
        </div>
      )}

      {!showCreateForm && budgets.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {budgets.map((budget) => (
            <BudgetItem
              key={budget.id}
              budget={budget}
              onSelectBudget={handleSelectBudget}
              onEdit={handleEditBudget}
              onDelete={handleDeleteBudgetClick}
              onDownloadPDF={handleDownloadPDF}
              downloadingPdf={downloadingPdf}
              deletingBudget={deletingBudget}
              selectingBudget={selectingBudget}
              editingBudgetId={editingBudgetId}
            />
          ))}
        </div>
      )}
      {!showCreateForm && !isLoading && budgets.length === 0 && (
        <div className='text-center py-10 text-gray-500 text-lg'>
          No hay presupuestos para mostrar. Intenta crear uno.
        </div>
      )}

      <BudgetDetailModal
        budget={selectedBudgetDetail}
        onClose={() => {
          setSelectedBudgetDetail(null);
          setError('');
        }}
      />

      {/* Modal de confirmación de eliminación */}
      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        title='Confirmar Eliminación'
        message={`¿Está seguro de que desea eliminar el presupuesto ID: ${budgetToDeleteId}?\n\nEsta acción no se puede deshacer.`}
        onConfirm={confirmDeleteBudget}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default BackofficePage;
