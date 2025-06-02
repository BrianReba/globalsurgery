// src/data/certificadosData.js

const certificadosData = [
  {
    id: 'anmat-importador',
    titulo: 'Habilitación ANMAT: Importador de Productos Médicos',
    descripcion: 'Autorización de Funcionamiento como Empresa Fabricante y/o Importadora de Productos Médicos Clase IV, incluyendo el otorgamiento del primer Certificado de BPF y designación de D.T. Emitido por ANMAT.',
    fecha: '12/06/2024', 
    numeroExpediente: 'EX-2024-62001920- -APN-DGA#ANMAT', 
    urlDelPdf: '/certificados/ANMAT_Import_GlobalSurgery.pdf', 
    nombreArchivoDescarga: 'GlobalSurgery_Habilitacion_ANMAT_Importador.pdf' 
  },
  {
    id: 'anmat-distribuidor',
    titulo: 'Habilitación ANMAT: Distribuidora de Productos Médicos',
    descripcion: 'Habilitación para Distribuidoras de Productos Médicos y/o Productos para Diagnóstico de Uso In Vitro, incluyendo el otorgamiento del primer Certificado de BPF y designación de D.T. Emitido por ANMAT.',
    fecha: '12/06/2024', 
    numeroExpediente: 'EX-2024-61942817- -APN-DGA#ANMAT', 
    urlDelPdf: '/certificados/ANMAT_Distribuidora_GlobalSurgery.pdf',
    nombreArchivoDescarga: 'GlobalSurgery_Habilitacion_ANMAT_Distribuidor.pdf'
  },
  {
    id: 'ministerio-habilitacion',
    titulo: 'Disposición Habilitación Ministerio de Salud',
    descripcion: 'Habilitación del establecimiento para la comercialización mayorista de Productos Biomédicos, propiedad de Global Surgery S.R.L. Emitido por la Dirección Nacional de Habilitación, Fiscalización y Sanidad de Fronteras (Ministerio de Salud).',
    fecha: '26/04/2024',
    numeroExpediente: 'EX-2023-153530835- -APN-DNHFYSF#MS', 
    urlDelPdf: '/certificados/Ministerio_GlobalSurgery.pdf',
    nombreArchivoDescarga: 'GlobalSurgery_Disposicion_Habilitacion_MS.pdf'
  },
  {
    id: 'cadit-membresia',
    titulo: 'Miembro de CADIT',
    descripcion: 'Global Surgery es miembro activo de CADIT (Cámara de la Industria Traumatológica), entidad que asegura el acceso a la mejor tecnología médica en implantes y promueve la ética y transparencia en el sector.',
    isExternalLink: true,
    urlDelSitio: 'https://www.cadit.com.ar/socios', 
    logoCaditPath: '/certificados/logo-cadit.png'
  }
];

export default certificadosData;