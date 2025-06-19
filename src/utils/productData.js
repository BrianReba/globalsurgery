// src/data/productData.js

const productData = [
  // =============================================
  // === SISTEMAS PLF (Fijación Pedicular) ======
  // =============================================

  // SISTEMA URANO (PLF-1)
  {
    id: 'urano',
    systemName: 'URANO',
    systemTitle: 'Sistema de Fijación Pedicular Dorsolumbar (PLF-1)',
    systemDescription: 'El sistema URANO es el primer sistema de la familia PLF, ofreciendo una solución completa y versátil para la fijación pedicular dorsolumbar, diseñado para abordar diversas patologías de la columna con componentes robustos y un instrumental preciso.',
    previewImage: '/urano/instrumental-a.png',
    category: 'PLF',
    components: [
      {
        id: 'urano-poliaxial',
        name: 'Tornillo Poliaxial',
        image: '/urano/tornillo-poliaxial.png',
        altText: 'Tornillo Poliaxial del Sistema Urano',
        features: [
          'Perfil de rosca diseñado para evitar mala colocación y minimizar expansión.',
          'Patrón de rosca progresivo y núcleo cónico para mejorar fijación ósea.',
          'Punta autorroscante para facilitar la inserción.',
          'Poliaxialidad de 50° en todas las direcciones.',
        ],
      },
      {
        id: 'urano-conectores-varios',
        name: 'Conectores del Sistema',
        image: '/urano/conectores.png', 
        altText: 'Conectores Ilíacos, de Barra y DTT del Sistema Urano',
        features: [
          'Conectores Ilíacos para extensión a pelvis.',
          'Conectores de Barra robustos para la construcción del montaje.',
          'Conectores DTT (Transversales) para aumentar la estabilidad rotacional.',
        ],
      },
      {
        id: 'urano-reduccion-ganchos',
        name: 'Tornillos de Reducción y Ganchos',
        image: '/urano/tonillo-gancho.png',
        altText: 'Tornillo de Reducción y Ganchos del Sistema Urano',
        features: [
          'Tornillos de Reducción diseñados para facilitar la corrección de deformidades.',
          'Ganchos laminares, pediculares y extendidos para opciones de fijación alternativas.',
        ],
      },
    ],
    
    specifications: [
      {
        title: 'Tornillo Poliaxial - Medidas Disponibles',
        headers: ['Diámetro', 'Largo', 'Código'], 
        rows: [
          { Diámetro: '4.50 mm', Largo: '25 mm', Código: '145253' },
          { Diámetro: '4.50 mm', Largo: '30 mm', Código: '145303' },
          { Diámetro: '4.50 mm', Largo: '35 mm', Código: '145353' },
          { Diámetro: '4.50 mm', Largo: '40 mm', Código: '145403' },
          { Diámetro: '4.50 mm', Largo: '45 mm', Código: '145453' },
          // --- Diámetro 5.50 mm ---
          { Diámetro: '5.50 mm', Largo: '30 mm', Código: '155303' },
          { Diámetro: '5.50 mm', Largo: '35 mm', Código: '155353' },
          { Diámetro: '5.50 mm', Largo: '40 mm', Código: '155403' },
          { Diámetro: '5.50 mm', Largo: '45 mm', Código: '155453' },
          { Diámetro: '5.50 mm', Largo: '50 mm', Código: '155503' },
          // --- Diámetro 6.50 mm ---
          { Diámetro: '6.50 mm', Largo: '30 mm', Código: '165303' },
          { Diámetro: '6.50 mm', Largo: '35 mm', Código: '165353' },
          { Diámetro: '6.50 mm', Largo: '40 mm', Código: '165403' },
          { Diámetro: '6.50 mm', Largo: '45 mm', Código: '165453' },
          { Diámetro: '6.50 mm', Largo: '50 mm', Código: '165503' },
           // --- Diámetro 7.50 mm ---
           { Diámetro: '7.50 mm', Largo: '30 mm', Código: '175303' },
           { Diámetro: '7.50 mm', Largo: '35 mm', Código: '175353' },
           { Diámetro: '7.50 mm', Largo: '40 mm', Código: '175403' },
           { Diámetro: '7.50 mm', Largo: '45 mm', Código: '175453' },
           { Diámetro: '7.50 mm', Largo: '50 mm', Código: '175503' },
        ],
      },
      // --- Especificaciones Tornillo Ilíaco ---
      {
        title: 'Tornillo Ilíaco - Medidas Disponibles',
        headers: ['Diámetro', 'Largo', 'Código'],
        rows: [
           { Diámetro: '6.50 mm', Largo: '60 mm', Código: '165603' },
           { Diámetro: '6.50 mm', Largo: '70 mm', Código: '165703' },
           { Diámetro: '6.50 mm', Largo: '80 mm', Código: '165803' },
           { Diámetro: '7.50 mm', Largo: '60 mm', Código: '175603' },
           { Diámetro: '7.50 mm', Largo: '70 mm', Código: '175703' },
           { Diámetro: '7.50 mm', Largo: '80 mm', Código: '175803' },
        ]
      },
      // --- Especificaciones Tornillo Reducción ---
       {
        title: 'Tornillo Reducción - Medidas Disponibles',
        headers: ['Diámetro', 'Largo', 'Código'],
        rows: [
            { Diámetro: '5.50 mm', Largo: '30 mm', Código: '355303' },
            { Diámetro: '5.50 mm', Largo: '35 mm', Código: '355353' },
            { Diámetro: '5.50 mm', Largo: '40 mm', Código: '355403' },
            { Diámetro: '5.50 mm', Largo: '45 mm', Código: '355453' },
            { Diámetro: '6.50 mm', Largo: '30 mm', Código: '365303' },
            { Diámetro: '6.50 mm', Largo: '35 mm', Código: '365353' },
            { Diámetro: '6.50 mm', Largo: '40 mm', Código: '365403' },
            { Diámetro: '6.50 mm', Largo: '45 mm', Código: '365453' },
        ]
      },
       // --- Especificaciones Barra ---
       {
        title: 'Barras - Medidas Disponibles',
        headers: ['Descripción', 'Diámetro', 'Largo', 'Código'],
        rows: [
          { Descripción: 'Barra titanio', Diámetro: '5.50 mm', Largo: '40 mm', Código: '6T555403' },
          { Descripción: 'Barra titanio', Diámetro: '5.50 mm', Largo: '50 mm', Código: '6T555503' },
          { Descripción: 'Barra titanio', Diámetro: '5.50 mm', Largo: '600 mm', Código: '6T5556003' },
          { Descripción: 'Barra cromo cobalto', Diámetro: '5.50 mm', Largo: '500 mm', Código: '6V555003' },
        ]
      },
      // --- Especificaciones Ganchos ---
       {
        title: 'Ganchos - Tipos Disponibles',
        headers: ['Descripción', 'Diámetro', 'Código'],
        rows: [
          { Descripción: 'Gancho laminar medio', Diámetro: '5.50 mm', Código: '8GLM3' },
          { Descripción: 'Gancho laminar extendido', Diámetro: '5.50 mm', Código: '8GLE3' },
          { Descripción: 'Gancho pedicular', Diámetro: '5.50 mm', Código: '8GPM3' },
        ]
      },
      // --- Especificaciones Conector DTT ---
       {
        title: 'Conector DTT (Cruzado) - Rangos',
        headers: ['Descripción', 'Mínimo', 'Máximo', 'Código'],
        rows: [
          { Descripción: 'Conector cruzado', Mínimo: '34 mm', Máximo: '43 mm', Código: '9CTC3' },
          { Descripción: 'Conector cruzado', Mínimo: '43 mm', Máximo: '59 mm', Código: '9CTM3' },
          { Descripción: 'Conector cruzado', Mínimo: '59 mm', Máximo: '93 mm', Código: '9CTG3' },
        ]
      },
      // --- Especificaciones Conector Ilíaco ---
       {
        title: 'Conector Ilíaco - Medidas Disponibles',
        headers: ['Inclinación', 'Largo', 'Código'], // Descripción es la misma
        rows: [
          { Inclinación: '90°', Largo: '35 mm', Código: '9CO350903' },
          { Inclinación: '90°', Largo: '50 mm', Código: '9CO500903' },
          { Inclinación: '90°', Largo: '80 mm', Código: '9CO800903' },
        ]
      },
       // --- Especificaciones Conector Barra Barra ---
       {
        title: 'Conector Barra-Barra - Tipos Disponibles',
        headers: ['Descripción', 'Diámetro', 'Código'],
        rows: [
          { Descripción: 'Conector barra barra abierto', Diámetro: '5.50 mm - 5.50 mm', Código: 'CBBA5555P3' },
          { Descripción: 'Conector barra barra cerrado', Diámetro: '5.50 mm - 5.50 mm', Código: '9CBBC5555P3' },
          { Descripción: 'Conector barra barra cerrado', Diámetro: '5.50 mm - 3.50 mm', Código: '9CBBC5535P3' },
        ]
      },
    ]
  },

  // =============================================
  // === SISTEMA KORAL ===========================
  // =============================================
  {
    id: 'koral',
    systemName: 'KORAL',
    systemTitle: 'Sistema de Fusión Intersomática Lumbar (PLIF / TLIF)',
    systemDescription: 'El sistema KORAL proporciona cajas de fusión intersomática en PEEK para abordajes PLIF y TLIF, diseñadas para optimizar el contacto óseo y facilitar la osteointegración, con marcadores radiopacos para un posicionamiento preciso.',
    previewImage: '/koral/intersomatica-lumbrosacra.png',
    components: [
       {
        id: 'koral-plif',
        name: 'Caja Intersomática PLIF',
        image: '/koral/intersomatica-lumbrosacra.png',
        altText: 'Caja de Fusión Intersomática Koral PLIF',
        features: [
          'Diseño rectangular en PEEK con centro hueco para injerto óseo.',
          'Extremo anterior redondeado para inserción menos forzada.',
          'Marcadores radiopacos para visualización intraoperatoria.',
          'Superficie con dientes piramidales para estabilidad inicial.',
        ],
      },
       {
        id: 'koral-tlif',
        name: 'Caja Intersomática TLIF',
        image: '/koral/lumbar-interbody.png', 
        altText: 'Caja de Fusión Intersomática Koral TLIF',
        features: [
          'Diseño específico para abordaje transforaminal.',
          'Material PEEK biocompatible.',
          'Superficie con dientes piramidales para mejorar estabilidad y osteointegración.',
           'Marcadores radiopacos.',
        ],
      },
    ],
    instrumentation: {
      title: 'Instrumental Compatible',
      description: 'Los sistemas KORAL PLIF y TLIF utilizan el mismo instrumental que el sistema URANO, simplificando el inventario y el flujo de trabajo quirúrgico.',
       images: [
         { id: 'inst-tlif', src: '/koral/PLIF-TLIF.png', altText: 'Instrumental compatible Koral PLIF/TLIF' },
         { id: 'inst-plif', src: '/koral/izq-plif.png', altText: 'Instrumental compatible Koral PLIF/TLIF' },
       ]
    },
    specifications: [
      {
        title: 'Caja Intersomática PLIF - Medidas Disponibles (Largo 25 mm)',
        headers: ['Altura', 'Ángulo 0°', 'Ángulo 4°', 'Ángulo 8°'],
        note: 'Las referencias de código varían según el ángulo, consultar catálogo completo.', 
        rows: [
        
          { Altura: '7 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓', 'Ángulo 8°': '✓' },
          { Altura: '8 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓', 'Ángulo 8°': '✓' },
          { Altura: '9 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓', 'Ángulo 8°': '✓' },
          { Altura: '10 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓', 'Ángulo 8°': '✓' },
          { Altura: '11 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓', 'Ángulo 8°': '✓' },
          { Altura: '12 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓', 'Ángulo 8°': '✓' },
        ]
      },
       {
        title: 'Caja Intersomática TLIF - Medidas Disponibles (Largo 28 mm)',
        headers: ['Altura', 'Ángulo 0°', 'Ángulo 4°'],
        note: 'Las referencias de código varían según el ángulo, consultar catálogo completo.',
        rows: [
          { Altura: '7 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓' },
          { Altura: '8 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓' },
          { Altura: '9 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓' },
          { Altura: '10 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓' },
          { Altura: '11 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓' },
          { Altura: '12 mm', 'Ángulo 0°': '✓', 'Ángulo 4°': '✓' },
        ]
      },
    ]
  },

  // =============================================
  // === SISTEMA LLIF ============================
  // =============================================
  {
    id: 'llif',
    systemName: 'LLIF',
    systemTitle: 'Sistema de Fusión Intersomática Lateral Lumbar',
    systemDescription: 'El sistema LLIF proporciona un abordaje lateral mínimamente invasivo para la fusión intersomática lumbar, permitiendo acceso directo al espacio discal sin manipulación de estructuras neurales posteriores.',
    previewImage: '/llif/Llif2-1024x482.png',
    components: [
      {
        id: 'llif-system-a',
        name: 'Sistema LLIF Set A',
        image: '/llif/Llif-set-A-1024x550.png',
        altText: 'Sistema LLIF Set A - Instrumental',
        features: [
          'Instrumental especializado para abordaje lateral.',
          'Guías de inserción precisas.',
          'Herramientas de distracción progresiva.',
          'Compatible con técnicas mínimamente invasivas.',
        ],
      },
      {
        id: 'llif-system-b',
        name: 'Sistema LLIF Set B',
        image: '/llif/Llif-set-B-1024x814.png',
        altText: 'Sistema LLIF Set B - Instrumental Complementario',
        features: [
          'Instrumental complementario para casos complejos.',
          'Herramientas de preparación del sitio receptor.',
          'Instrumentos de colocación de cajas intersomáticas.',
          'Verificadores de altura y posición.',
        ],
      },
      {
        id: 'llif-cage',
        name: 'Caja Intersomática LLIF',
        image: '/llif/Llif2-1024x482.png',
        altText: 'Caja de Fusión Intersomática LLIF',
        features: [
          'Diseño anatómico optimizado para abordaje lateral.',
          'Material biocompatible de alta resistencia.',
          'Superficie texturizada para osteointegración.',
          'Múltiples opciones de altura disponibles.',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema LLIF - Información General',
        headers: ['Componente', 'Descripción'],
        rows: [
          { Componente: 'Set A', Descripción: 'Instrumental básico para procedimientos LLIF estándar' },
          { Componente: 'Set B', Descripción: 'Instrumental complementario para casos complejos' },
          { Componente: 'Cajas Intersomáticas', Descripción: 'Múltiples alturas y configuraciones disponibles' },
          { Componente: 'Abordaje', Descripción: 'Lateral mínimamente invasivo' },
        ],
      },
    ]
  },

  // =============================================
  // === SISTEMA ALIF ============================
  // =============================================
  {
    id: 'alif',
    systemName: 'ALIF',
    systemTitle: 'Sistema de Fusión Intersomática Anterior Lumbar',
    systemDescription: 'El sistema ALIF permite un abordaje anterior directo al espacio discal lumbar, proporcionando excelente acceso para descompresión y fusión, especialmente efectivo en niveles L4-L5 y L5-S1.',
    previewImage: '/alif/alif-instrumental-1024x783.png',
    components: [
      {
        id: 'alif-instrumental',
        name: 'Instrumental ALIF Completo',
        image: '/alif/alif-instrumental-1024x783.png',
        altText: 'Instrumental Completo Sistema ALIF',
        features: [
          'Instrumental especializado para abordaje anterior.',
          'Herramientas de preparación del espacio discal.',
          'Instrumentos de inserción de cajas intersomáticas.',
          'Compatible con técnicas de fijación anterior.',
        ],
      },
      {
        id: 'alif-cage',
        name: 'Caja Intersomática ALIF',
        image: '/alif/alif-iso-2-300x253.png',
        altText: 'Caja de Fusión Intersomática ALIF',
        features: [
          'Diseño optimizado para abordaje anterior.',
          'Material biocompatible de alta resistencia.',
          'Múltiples opciones de altura y lordosis.',
          'Superficie tratada para favorecer la fusión.',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema ALIF - Información General',
        headers: ['Componente', 'Descripción'],
        rows: [
          { Componente: 'Instrumental', Descripción: 'Set completo para procedimientos ALIF' },
          { Componente: 'Cajas Intersomáticas', Descripción: 'Diversas alturas y ángulos de lordosis' },
          { Componente: 'Abordaje', Descripción: 'Anterior directo L4-L5 y L5-S1' },
          { Componente: 'Aplicación', Descripción: 'Fusión intersomática con corrección sagital' },
        ],
      },
    ]
  },

  // =============================================
  // === SISTEMAS ISD ============================
  // =============================================

  // SISTEMA ISD TRAZO
  {
    id: 'isd-trazo',
    systemName: 'ISD-TRAZO',
    systemTitle: 'Sistema de Estabilización Intersegmentaria TRAZO',
    systemDescription: 'El sistema ISD-TRAZO proporciona estabilización dinámica mediante dispositivos de banda tensora intersegmentaria, diseñado para mantener la movilidad controlada mientras previene la hiperextensión patológica.',
    previewImage: '/isd/interespinoso-Trazo.png',
    category: 'ISD',
    components: [
      {
        id: 'trazo-pinza-insercion',
        name: 'Pinza de Inserción TRAZO',
        image: '/isd/trazo-pinza-insercion-1024x686.png',
        altText: 'Pinza de Inserción Sistema TRAZO',
        features: [
          'Pinza especializada para inserción del dispositivo.',
          'Diseño ergonómico para facilitar la colocación.',
          'Control preciso durante el procedimiento.',
          'Compatible con técnicas mínimamente invasivas.',
        ],
      },
      {
        id: 'trazo-pinza-bloqueo',
        name: 'Pinza de Bloqueo TRAZO',
        image: '/isd/trazo-pinza-bloqueo-1024x829.png',
        altText: 'Pinza de Bloqueo Sistema TRAZO',
        features: [
          'Sistema de bloqueo seguro del dispositivo.',
          'Mecanismo de fijación confiable.',
          'Prevención de migración del implante.',
          'Técnica de colocación simplificada.',
        ],
      },
      {
        id: 'trazo-set-completo',
        name: 'Set Instrumental TRAZO',
        image: '/isd/set-trazo-vista-1-1024x515.png',
        altText: 'Set Instrumental Completo TRAZO',
        features: [
          'Set completo de instrumentos TRAZO.',
          'Herramientas especializadas para cada paso.',
          'Instrumental de preparación y colocación.',
          'Diseño modular para flexibilidad quirúrgica.',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema TRAZO - Información General',
        headers: ['Componente', 'Descripción'],
        rows: [
          { Componente: 'Dispositivo TRAZO', Descripción: 'Banda tensora intersegmentaria dinámica' },
          { Componente: 'Instrumental', Descripción: 'Set completo de herramientas especializadas' },
          { Componente: 'Aplicación', Descripción: 'Estabilización dinámica intersegmentaria' },
          { Componente: 'Técnica', Descripción: 'Mínimamente invasiva posterior' },
        ],
      },
    ]
  },

  // SISTEMA ISD XSPINOUS
  {
    id: 'isd-xspinous',
    systemName: 'ISD-XSPINOUS',
    systemTitle: 'Sistema de Estabilización Interespinosa XSPINOUS',
    systemDescription: 'El sistema ISD-XSPINOUS utiliza dispositivos interespinosos para el tratamiento de la claudicación neurogénica, proporcionando descompresión indirecta y estabilización mediante distracción controlada.',
    previewImage: '/isd/interespinoso-Xs.png',
    category: 'ISD',
    components: [
      {
        id: 'xspinous-device',
        name: 'Dispositivo Interespinoso XSPINOUS',
        image: '/isd/interespinoso-Xs.png',
        altText: 'Dispositivo Interespinoso XSPINOUS',
        features: [
          'Dispositivo interespinoso de diseño anatómico.',
          'Material biocompatible de alta resistencia.',
          'Preservación del movimiento fisiológico.',
          'Técnica de inserción mínimamente invasiva.',
        ],
      },
      {
        id: 'xspinous-medidas',
        name: 'Medidas Disponibles XSPINOUS',
        image: '/isd/interespinoso-medidas.png',
        altText: 'Medidas Disponibles XSPINOUS',
        features: [
          'Múltiples tamaños para diferentes anatomías.',
          'Guía de medición intraoperatoria.',
          'Selección precisa del tamaño óptimo.',
          'Compatibilidad con diversos niveles vertebrales.',
        ],
      },
      {
        id: 'xspinous-colocacion',
        name: 'Técnica de Colocación',
        image: '/isd/interespinoso-colocacion.png',
        altText: 'Técnica de Colocación XSPINOUS',
        features: [
          'Técnica quirúrgica simplificada.',
          'Abordaje posterior mínimamente invasivo.',
          'Preservación de ligamentos supraespinosos.',
          'Tiempo quirúrgico reducido.',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema XSPINOUS - Información General',
        headers: ['Componente', 'Descripción'],
        rows: [
          { Componente: 'Dispositivo Interespinoso', Descripción: 'Espaciador entre apófisis espinosas' },
          { Componente: 'Múltiples Tamaños', Descripción: 'Diversas medidas para personalización' },
          { Componente: 'Aplicación', Descripción: 'Tratamiento de claudicación neurogénica' },
          { Componente: 'Abordaje', Descripción: 'Posterior mínimamente invasivo' },
        ],
      },
    ]
  },

  // SISTEMA ISD SEPTIMUS
  {
    id: 'isd-septimus',
    systemName: 'ISD-SEPTIMUS',
    systemTitle: 'Sistema de Estabilización Vertebral SEPTIMUS',
    systemDescription: 'El sistema ISD-SEPTIMUS proporciona estabilización vertebral posterior mediante dispositivos especializados, ideal para casos de inestabilidad segmentaria con preservación de niveles adyacentes.',
    previewImage: '/isd/interespinoso-Septimus-2.png',
    category: 'ISD',
    components: [
      {
        id: 'septimus-device',
        name: 'Dispositivo SEPTIMUS',
        image: '/isd/interespinoso-Septimus-2.png',
        altText: 'Dispositivo SEPTIMUS',
        features: [
          'Sistema de estabilización vertebral avanzado.',
          'Diseño específico para preservar movilidad.',
          'Material de alta biocompatibilidad.',
          'Técnica de colocación precisa.',
        ],
      },
      {
        id: 'septimus-instrumental',
        name: 'Instrumental SEPTIMUS',
        image: '/isd/septimus-instrumental.png',
        altText: 'Instrumental Sistema SEPTIMUS',
        features: [
          'Instrumental especializado para SEPTIMUS.',
          'Herramientas de preparación específicas.',
          'Guías de colocación precisas.',
          'Instrumental de verificación intraoperatoria.',
        ],
      },
      {
        id: 'septimus-instrumental-2',
        name: 'Instrumental SEPTIMUS Complementario',
        image: '/isd/septimus-2-instrumental.png',
        altText: 'Instrumental Complementario SEPTIMUS',
        features: [
          'Set complementario de instrumentos.',
          'Herramientas para casos complejos.',
          'Instrumental de revisión disponible.',
          'Compatible con técnicas avanzadas.',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema SEPTIMUS - Información General',
        headers: ['Componente', 'Descripción'],
        rows: [
          { Componente: 'Dispositivo SEPTIMUS', Descripción: 'Sistema de estabilización vertebral' },
          { Componente: 'Instrumental', Descripción: 'Set completo especializado' },
          { Componente: 'Aplicación', Descripción: 'Inestabilidad segmentaria selectiva' },
          { Componente: 'Ventaja', Descripción: 'Preservación de niveles adyacentes' },
        ],
      },
    ]
  },

  // =============================================
  // === SISTEMA PCF =============================
  // =============================================
  {
    id: 'pcf',
    systemName: 'PCF',
    systemTitle: 'Sistema de Fusión Cervical Posterior',
    systemDescription: 'El sistema PCF está diseñado específicamente para procedimientos de fusión cervical posterior, proporcionando estabilización robusta y versatilidad en la instrumentación cervical.',
    previewImage: '/pcf/1-1024x1024.png',
    components: [
      {
        id: 'pcf-set-a',
        name: 'Set A - Sistema PCF',
        image: '/pcf/set-a.png',
        altText: 'Set A Sistema PCF',
        features: [
          'Set básico para fusión cervical posterior.',
          'Instrumental especializado cervical.',
          'Herramientas de preparación específicas.',
          'Compatible con múltiples técnicas.',
        ],
      },
      {
        id: 'pcf-fijacion-occipital',
        name: 'Fijación Occipital',
        image: '/pcf/fijacion-occipital.png',
        altText: 'Sistema de Fijación Occipital PCF',
        features: [
          'Sistema de fijación occipito-cervical.',
          'Placas anatómicas para base craneal.',
          'Tornillos especializados para hueso occipital.',
          'Compatible con fusiones extensas.',
        ],
      },
      {
        id: 'pcf-fusion-cervicodorsal',
        name: 'Fusión Cervicodorsal',
        image: '/pcf/fusion-cervicodorsal.png',
        altText: 'Sistema de Fusión Cervicodorsal PCF',
        features: [
          'Instrumental para fusión cervico-dorsal.',
          'Transición suave entre regiones.',
          'Conectores especializados C7-T1.',
          'Adaptabilidad anatómica regional.',
        ],
      },
      {
        id: 'pcf-tornillo-bajo-perfil',
        name: 'Tornillo de Bajo Perfil',
        image: '/pcf/tornillo-bajo-perfil.png',
        altText: 'Tornillo de Bajo Perfil PCF',
        features: [
          'Diseño de bajo perfil para región cervical.',
          'Minimización de prominencia subcutánea.',
          'Rosca optimizada para hueso cervical.',
          'Cabeza poliaxial para versatilidad.',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema PCF - Información General',
        headers: ['Componente', 'Descripción'],
        rows: [
          { Componente: 'Set A', Descripción: 'Instrumental básico para fusión cervical posterior' },
          { Componente: 'Fijación Occipital', Descripción: 'Sistema occipito-cervical especializado' },
          { Componente: 'Fusión Cervicodorsal', Descripción: 'Instrumental para transición C7-T1' },
          { Componente: 'Tornillos Bajo Perfil', Descripción: 'Diseño específico para anatomía cervical' },
        ],
      },
    ]
  },

  // =============================================
  // === SISTEMA CPLF ============================
  // =============================================
  {
    id: 'cplf',
    systemName: 'CPLF',
    systemTitle: 'Sistema de Fusión Cervical Posterior y Lateral',
    systemDescription: 'El sistema CPLF combina técnicas de fusión cervical posterior con abordajes laterales, proporcionando una solución integral para patologías cervicales complejas.',
    previewImage: '/cplf/primero-cplf.png',
    components: [
      {
        id: 'cplf-sistema-principal',
        name: 'Sistema Principal CPLF',
        image: '/cplf/primero-cplf.png',
        altText: 'Sistema Principal CPLF',
        features: [
          'Sistema integral de fusión cervical.',
          'Combinación de abordajes posterior y lateral.',
          'Versatilidad para patologías complejas.',
          'Instrumental especializado incluido.',
        ],
      },
      {
        id: 'cplf-acople',
        name: 'Sistema de Acople CPLF',
        image: '/cplf/acople-1200-x-200-px.png',
        altText: 'Sistema de Acople CPLF',
        features: [
          'Conectores especializados para CPLF.',
          'Acople seguro entre componentes.',
          'Versatilidad en configuraciones.',
          'Compatibilidad con diversos abordajes.',
        ],
      },
      {
        id: 'cplf-conexion',
        name: 'Sistema de Conexión',
        image: '/cplf/conexion-414-x-600-px.png',
        altText: 'Sistema de Conexión CPLF',
        features: [
          'Conexiones robustas entre elementos.',
          'Estabilidad biomecánica optimizada.',
          'Facilidad de ensamblaje quirúrgico.',
          'Durabilidad a largo plazo.',
        ],
      },
      {
        id: 'cplf-vertebra',
        name: 'Aplicación Vertebral',
        image: '/cplf/vertebra-1024x948.jpeg',
        altText: 'Aplicación Vertebral CPLF',
        features: [
          'Aplicación específica en vértebras cervicales.',
          'Adaptación anatómica precisa.',
          'Respeto por estructuras neurovasculares.',
          'Técnica quirúrgica optimizada.',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema CPLF - Información General',
        headers: ['Componente', 'Descripción'],
        rows: [
          { Componente: 'Sistema Principal', Descripción: 'Solución integral para fusión cervical' },
          { Componente: 'Sistema de Acople', Descripción: 'Conectores especializados' },
          { Componente: 'Sistema de Conexión', Descripción: 'Elementos de unión robustos' },
          { Componente: 'Aplicación', Descripción: 'Patologías cervicales complejas' },
        ],
      },
    ]
  },

];

export default productData;