// src/data/productData.js

const productData = [
  // =============================================
  // === SISTEMA URANO ===========================
  // =============================================
  {
    id: 'urano',
    systemName: 'URANO',
    systemTitle: 'Sistema de Fijación Pedicular Dorsolumbar',
    systemDescription: 'El sistema URANO ofrece una solución completa y versátil para la fijación pedicular dorsolumbar, diseñado para abordar diversas patologías de la columna con componentes robustos y un instrumental preciso.',
    previewImage: '/urano/instrumental-a.png',
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

];

export default productData;