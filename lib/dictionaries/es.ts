import type { Dictionary } from './en';

const es: Dictionary = {
  // ── Navegación & Layout ──────────────────────────────────────────
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    portfolio: 'Portafolio',
    calendar: 'Calendario',
    team: 'Equipo',
    invest: 'Invertir',
  },
  footer: {
    tagline: 'Construyendo el ecosistema líder de entretenimiento y creatividad en América Latina.',
    copyright: 'ZV Holdings. Todos los derechos reservados.',
    email: 'info@zv.holdings',
  },
  language: {
    en: 'EN',
    es: 'ES',
    switchTo: 'English',
  },

  // ── Página de Inicio ─────────────────────────────────────────────
  home: {
    meta: {
      title: 'ZV Holdings — Construyendo el Ecosistema de Entretenimiento Líder de América Latina',
      description:
        'ZV Holdings construye, posee y opera plataformas impulsadas por tecnología, datos y comunidad en toda América Latina y más allá.',
    },
    hero: {
      badge: 'Holding · Costa Rica',
      title: 'Construyendo el Ecosistema de Entretenimiento Líder de América Latina',
      description:
        'ZV Holdings es una empresa holding que diseña, construye y opera marcas de entretenimiento y creatividad verticalmente integradas — desde estrategia y tecnología hasta ejecución en vivo.',
      investCta: 'Invertir en ZV Holdings',
      portfolioCta: 'Ver Portafolio',
    },
    glance: {
      label: 'De un Vistazo',
      title: 'Los Números que Importan',
      description:
        'Métricas clave que demuestran la escala, el crecimiento y la fortaleza operativa del ecosistema ZV Holdings.',
      metrics: [
        { value: '10+', label: 'Años Operando Desde 2013' },
        { value: '$20M+', label: 'Ingresos Acumulados Generados' },
        { value: '100K+', label: 'Entradas Vendidas en Experiencias en Vivo' },
        { value: '250+', label: 'Clientes Externos Atendidos' },
        { value: '400+', label: 'Talentos Internacionales Recibidos' },
        { value: '10+', label: 'Negocios Conectados Verticalmente' },
      ],
      points: [
        'Infraestructura integrada en producción de eventos, medios, marketing, tecnología, hospitalidad y monetización',
        'Modelo de ingresos diversificado que combina propiedad intelectual, ingresos por servicios, patrocinios, boletería y alianzas estratégicas',
        'Plataforma construida para escalar mediante venta cruzada, audiencias compartidas y ejecución centralizada',
      ],
    },
    thesis: {
      label: 'Tesis de Inversión',
      title: 'Composición del Portafolio, No Diversificación',
      description:
        'Nuestra estrategia no es diversificación por volumen. Cada empresa del portafolio potencia el valor de las demás a través de infraestructura, audiencias y datos compartidos.',
      points: [
        'La infraestructura compartida reduce el costo marginal por nueva marca',
        'La monetización cruzada de audiencias multiplica el valor de vida del cliente',
        'La arquitectura centralizada de datos impulsa decisiones más inteligentes en todas las marcas',
        'Clara separación entre estrategia (Broccoli Studios) y ejecución (XR Studio)',
      ],
    },
    structure: {
      label: 'Estructura Corporativa',
      title: 'Dos Verticales, Un Ecosistema',
      description:
        'ZV Holdings opera a través de dos verticales complementarias que comparten infraestructura, audiencias y datos.',
      bs: {
        name: 'Broccoli Studios',
        subtitle: 'Estrategia y Tecnología',
        description:
          'El arquitecto del sistema y titular de la propiedad intelectual. Diseña las plataformas, la lógica de crecimiento, la arquitectura de datos y la infraestructura tecnológica de todo el portafolio.',
      },
      xr: {
        name: 'XR Studio',
        subtitle: 'Producción de Eventos y Ejecución',
        description:
          'El motor de ejecución. Transforma la estrategia en entregas de clase mundial con producción de eventos a gran escala, gestión de artistas y control operativo.',
      },
    },
    portfolio: {
      label: 'Portafolio',
      title: '6 Marcas, Un Ecosistema',
      description:
        'Cada marca opera de forma independiente mientras se beneficia de infraestructura, audiencias y datos compartidos en todo el portafolio.',
      viewFull: 'Ver Portafolio Completo',
      brands: {
        'electric-animals': { tagline: 'Plataforma insignia de festivales' },
        'blockchain-jungle': { tagline: 'Conferencia de blockchain' },
        'pura-tinta-fest': { tagline: 'Convención de tatuajes' },
        magflow: { tagline: 'Música, estudio y experiencias en vivo' },
        sweetspot: { tagline: 'Esports y gaming' },
        'bandida-tattoo-studio': { tagline: 'Estudio de tatuaje premium' },
      },
    },
    whyInvest: {
      label: 'Por Qué Invertir',
      title: 'El Caso de ZV Holdings',
      description:
        'Seis razones por las que los inversionistas miran la economía de experiencias latinoamericana — y por qué ZV Holdings es el mejor vehículo.',
      items: [
        {
          title: 'Integración Vertical',
          description:
            'Estrategia, tecnología, ejecución y propiedad intelectual bajo un solo grupo. Sin dependencia de infraestructura de terceros.',
        },
        {
          title: 'Trayectoria Comprobada',
          description:
            'Empresas operativas con ingresos reales — no startups especulativas. Cero cancelaciones de eventos en la historia de la empresa.',
        },
        {
          title: 'Formatos Replicables',
          description:
            'Festivales, convenciones, estudios, plataformas competitivas — formatos que escalan entre geografías.',
        },
        {
          title: 'Audiencias Reales',
          description:
            'Comunidades con tracción medible y participación recurrente, no mercados teóricos direccionables.',
        },
        {
          title: 'Expansión Multi-País',
          description:
            'Electric Animals expandiéndose a Madrid, Ámsterdam, El Salvador, Colombia y Luxemburgo en 2026.',
        },
        {
          title: 'Eficiencia de Capital',
          description:
            'Crecimiento de ingresos 3x año contra año con infraestructura compartida que mantiene bajos los costos marginales entre marcas.',
        },
      ],
    },
    events: {
      label: 'Próximamente',
      title: 'Calendario 2026 — Destacados',
      description:
        '15+ eventos confirmados en Costa Rica y 5 mercados internacionales. Acá algunos destacados.',
      viewFull: 'Ver Calendario Completo',
      tba: 'Por anunciar',
      list: [
        {
          name: 'Electric Animals Fest',
          date: '11 Abr',
          location: 'Centro Nacional de Convenciones',
        },
        { name: 'Miguel Bosé', date: '25 Abr', location: 'Parque Viva' },
        {
          name: 'Jon Batiste & la Orquesta Filarmónica de Costa Rica',
          date: '3 Sep',
          location: 'Parque Viva',
        },
        {
          name: 'Blockchain Jungle',
          date: '13-14 Nov',
          location: 'Centro Nacional de Convenciones',
        },
        {
          name: 'Electric Animals NYE',
          date: '31 Dic',
          location: 'Centro Nacional de Convenciones',
        },
        {
          name: 'Electric Animals Euro Tour',
          date: '26 Oct',
          location: 'Madrid · Luxemburgo · Ámsterdam',
        },
      ],
    },
    sponsors: {
      label: 'Socios Destacados',
      title: 'Respaldados por Marcas Líderes',
    },
    photos: {
      label: 'Nuestros Eventos',
      title: 'Experiencias a Gran Escala',
      description:
        'De 8,000 asistentes en 2022 a 75,000 proyectados en 2026 — eventos reales, comunidades reales, impulso real.',
    },
    cta: {
      badge: 'Únase al Ecosistema',
      title: 'No perseguimos tendencias. Construimos ecosistemas que perduran.',
      description:
        'ZV Holdings está diseñado para inversionistas que entienden que el futuro del entretenimiento y la cultura se construye sobre sistemas, no éxitos aislados.',
      investCta: 'Aplique como Inversionista',
      learnMore: 'Conozca Más',
    },
  },

  // ── Página Nosotros ──────────────────────────────────────────────
  about: {
    meta: {
      title: 'Nosotros — ZV Holdings',
      description:
        'Conozca ZV Holdings, la empresa holding que construye el ecosistema líder de entretenimiento y creatividad de América Latina.',
    },
    hero: {
      label: 'Nosotros',
      title: 'Quiénes Somos',
      description:
        'ZV Holdings es una empresa holding que construye, posee y opera plataformas impulsadas por tecnología, datos y comunidad. Nuestra tesis es simple:',
      highlight: 'composición del portafolio',
      descriptionEnd: ' — infraestructura compartida, audiencias compartidas, datos compartidos.',
    },
    verticals: {
      label: 'Verticales',
      title: 'La Estrategia se Encuentra con la Ejecución',
      description:
        'Dos verticales trabajan en conjunto: una diseña los sistemas, la otra les da vida.',
      bs: {
        name: 'Broccoli Studios',
        subtitle: 'Estrategia, Tecnología y Servicios Digitales',
        description:
          'El arquitecto del sistema y titular de la propiedad intelectual. Broccoli Studios diseña los sistemas, plataformas y la lógica de crecimiento de todo el portafolio. Sirve como la columna vertebral técnica y estratégica de ZV Holdings.',
        items: [
          'Marketing digital y estrategia de marca',
          'Arquitectura tecnológica y desarrollo de plataformas',
          'Analítica de datos e insights de audiencia',
          'Diseño de modelos de crecimiento',
          'Desarrollo y licenciamiento de propiedad intelectual',
        ],
      },
      xr: {
        name: 'XR Studio',
        subtitle: 'Producción de Eventos y Experiencias en Vivo',
        description:
          'El motor de ejecución. XR Studio transforma la estrategia en entregas de clase mundial, operacionalizando experiencias en todo el portafolio con precisión y control operativo.',
        items: [
          'Producción de eventos a gran escala',
          'Diseño de escenarios y operaciones técnicas',
          'Gestión y contratación de artistas',
          'Ejecución en sitio y logística',
          'Aseguramiento de calidad y seguridad',
        ],
      },
    },
    advantages: {
      label: 'Ventajas Competitivas',
      title: 'Lo Que Nos Diferencia',
      description: 'Credibilidad institucional, excelencia operativa y responsabilidad ambiental.',
      items: [
        {
          title: 'Esencial Costa Rica',
          description:
            'Marca oficialmente avalada bajo el programa de excelencia nacional de Costa Rica, señalando calidad y credibilidad.',
        },
        {
          title: 'Alianza con el Centro de Convenciones',
          description:
            'Alianza estratégica de sede que proporciona infraestructura premium para eventos a gran escala.',
        },
        {
          title: 'Certificación Carbono Neutral',
          description:
            'Operaciones certificadas como carbono neutral con medición de huella de carbono verificada por LSQA.',
        },
        {
          title: 'Cero Cancelaciones',
          description:
            'Récord perfecto de ejecución de eventos — cada evento anunciado ha sido entregado.',
        },
        {
          title: 'Credibilidad Institucional',
          description:
            'Confianza de socios institucionales y patrocinadores multinacionales incluyendo Tether, Kolbi, MEP, Coca Cola, BAC y Esencial Costa Rica.',
        },
      ],
    },
    mission: {
      label: 'Misión',
      text: 'Construir y operar plataformas impulsadas por experiencias que generen valor recurrente a través de tecnología, datos y comunidad — creando un ecosistema auto-reforzante donde cada empresa fortalece a las demás.',
    },
    vision: {
      label: 'Visión',
      text: 'Convertirnos en la empresa holding líder de entretenimiento y creatividad de América Latina — escalando formatos probados en diferentes mercados mientras mantenemos la excelencia operativa y la autenticidad cultural.',
    },
    certifications: {
      label: 'Certificaciones',
      title: 'Verificados y Confiables',
      items: [
        'Esencial Costa Rica',
        'Certificación Carbono Neutral',
        'Huella de Carbono Verificada por LSQA',
      ],
    },
    cta: {
      title: 'No perseguimos tendencias. Construimos ecosistemas que perduran.',
      description:
        'Explore nuestro portafolio o contáctenos para conocer más sobre oportunidades de inversión.',
      portfolioCta: 'Ver Portafolio',
      investCta: 'Invertir',
    },
  },

  // ── Página del Equipo ────────────────────────────────────────────
  team: {
    meta: {
      title: 'Equipo — ZV Holdings',
      description:
        'Conozca al equipo de liderazgo detrás de ZV Holdings — las personas construyendo el ecosistema de entretenimiento líder de América Latina.',
    },
    hero: {
      label: 'Equipo',
      title: 'Nuestra Gente',
      description:
        'El equipo detrás de ZV Holdings combina amplia experiencia en producción de eventos, tecnología, dirección creativa y desarrollo de negocios.',
    },
    leadership: {
      label: 'Liderazgo',
      title: 'Fundadores y Socios',
    },
    members: {
      label: 'Equipo',
      title: 'Miembros Clave del Equipo',
    },
    roles: {
      'CEO, Founder': 'CEO, Fundador',
      'COO, Partner': 'COO, Socio',
      'Stage Manager': 'Director de Escenario',
      'Artistic Direction Lead': 'Líder de Dirección Artística',
      'Logistic Manager': 'Gerente de Logística',
      'International Business Development Manager':
        'Gerente de Desarrollo de Negocios Internacionales',
      'Hospitality, Sponsorships & Process Optimization':
        'Hospitalidad, Patrocinios y Optimización de Procesos',
      'Affiliate Program Manager & Social Media Coordinator':
        'Gerente de Programa de Afiliados y Coordinador de Redes Sociales',
      'Senior Web Developer': 'Desarrollador Web Senior',
      'Audiovisual Director': 'Director Audiovisual',
      'Vendor Coordinator': 'Coordinador de Proveedores',
      'Art and Design Coordinator': 'Coordinador de Arte y Diseño',
    } as Record<string, string>,
  },

  // ── Página del Portafolio ────────────────────────────────────────
  portfolioPage: {
    meta: {
      title: 'Portafolio — ZV Holdings',
      description:
        'Explore el portafolio de 6 marcas de ZV Holdings que abarca festivales, conferencias, esports, estudios de grabación y plataformas culturales.',
    },
    hero: {
      label: 'Portafolio',
      title: '6 Marcas, Un Ecosistema',
      description:
        'Cada marca opera de forma independiente a nivel de marca mientras se beneficia de una arquitectura de ecosistema centralizada — infraestructura, audiencias y datos compartidos.',
    },
    xr: {
      label: 'XR Studio',
      title: 'Producción de Eventos y Experiencias en Vivo',
      description:
        'Cinco marcas que entregan eventos de clase mundial en festivales, conferencias, esports y música en vivo.',
    },
    bs: {
      label: 'Broccoli Studios',
      title: 'Estrategia, Tecnología e Infraestructura Creativa',
      description:
        'Marcas físicas e infraestructura creativa que anclan el ecosistema en operaciones del mundo real e identidad cultural.',
    },
    viewCaseStudy: 'Ver caso de estudio',
    compounding: {
      label: 'Cómo se Compone',
      title: 'Lógica del Portafolio',
      description:
        'Esto crea un ciclo de retroalimentación donde cada empresa fortalece a las demás.',
      steps: [
        {
          step: '01',
          title: 'Broccoli Studios',
          desc: 'Diseña sistemas, plataformas y lógica de crecimiento',
        },
        { step: '02', title: 'XR Studio', desc: 'Ejecuta y operacionaliza las experiencias' },
        {
          step: '03',
          title: 'Marcas Insignia',
          desc: 'Generan ingresos recurrentes, datos y comunidad',
        },
        { step: '04', title: 'Marcas Físicas', desc: 'Validan la escalabilidad en el mundo real' },
      ],
    },
    cta: {
      title: '¿Interesado en el portafolio?',
      description:
        'Explore oportunidades de inversión en el holding, verticales específicas o marcas individuales.',
      investCta: 'Aplique como Inversionista',
    },
  },

  // ── Página de Detalle de Marca ───────────────────────────────────
  brandPage: {
    backToPortfolio: 'Volver al Portafolio',
    about: 'Acerca de',
    keyHighlights: 'Aspectos Clave',
    gallery: 'Galería',
    interestedIn: '¿Interesado en',
    investDescription:
      'Explore oportunidades de inversión a nivel de marca, vertical o en todo el portafolio de ZV Holdings.',
    investCta: 'Invertir',
    allBrands: 'Todas las Marcas',
  },
  brands: {
    'electric-animals': {
      tagline: 'Plataforma insignia de festivales de música electrónica',
      description:
        'Electric Animals es un ecosistema de festivales de música electrónica a gran escala que genera ingresos recurrentes, datos propietarios y un fuerte engagement comunitario. Lo que comenzó como un solo evento en Costa Rica ha crecido hasta convertirse en una marca de festivales multi-país expandiéndose a más de 5 mercados internacionales en 2026.',
      highlights: [
        'Expansión multi-país: Costa Rica, El Salvador, Madrid, Ámsterdam, Luxemburgo, Colombia',
        'Eventos certificados carbono neutral',
        'Contrataciones de headliners internacionales',
        'Formato replicable comprobado en diferentes geografías',
        'Ingresos: Boletería + Patrocinios',
      ],
      stats: [
        { label: 'Países (2026)', value: '5+' },
        { label: 'Eventos por Año', value: '6+' },
        { label: 'Escalabilidad', value: 'Alta' },
        { label: 'Etapa', value: 'Crecimiento' },
      ],
      details: [
        'Electric Animals opera como la marca insignia del ecosistema ZV Holdings. Su formato de festival ha sido diseñado para replicación geográfica — los mismos estándares de producción, identidad de marca y manual operativo se pueden implementar en nuevos mercados con un costo incremental mínimo.',
        'En 2026, Electric Animals está confirmado en Costa Rica (festival insignia, ediciones de Halloween y Año Nuevo), más expansiones internacionales a Madrid, Luxemburgo, Ámsterdam, El Salvador y Cali, Colombia. Esto demuestra la tesis central: formatos replicables que escalan.',
        'La marca genera ingresos a través de boletería, paquetes de patrocinio de múltiples niveles y activaciones en sitio. Su certificación de carbono neutral y la alianza con el Centro Nacional de Convenciones en Costa Rica agregan credibilidad institucional que atrae patrocinadores premium.',
      ],
    },
    'blockchain-jungle': {
      tagline: 'La conferencia de blockchain más grande de Centroamérica',
      description:
        'Blockchain Jungle es una plataforma de conocimiento y networking que conecta ponentes, patrocinadores, asistentes, contenido y datos. Funciona como el evento premier de blockchain y criptomonedas en la región centroamericana.',
      highlights: [
        'La conferencia de cripto/blockchain más grande de Centroamérica',
        'Plataforma de contenido B2B y networking',
        'Relaciones de patrocinio de alto valor (Tether, Avalanche, Bitfinex)',
        'Aprovechamiento de contenido a través de grabaciones y distribución digital',
        'Ingresos: Stands, Venta de Entradas, Patrocinadores y A&B',
      ],
      stats: [
        { label: 'Edición Anual', value: '2026' },
        { label: 'Nivel de Patrocinio', value: 'Empresarial' },
        { label: 'Escalabilidad', value: 'Alta' },
        { label: 'Etapa', value: 'Crecimiento' },
      ],
      details: [
        'Blockchain Jungle posiciona a ZV Holdings en la intersección de tecnología y experiencias en vivo. La conferencia atrae a tomadores de decisiones, inversionistas y constructores del ecosistema global de blockchain a Costa Rica.',
        'El evento genera ingresos a través de venta de entradas, stands de exhibición, paquetes de patrocinio premium y A&B de empresas como Tether, Avalanche y Bitfinex. Su contenido — paneles, keynotes y talleres — crea activos digitales duraderos que extienden el valor más allá del evento en vivo.',
        'Como plataforma B2B, Blockchain Jungle tiene mayores ingresos por asistente que los eventos de consumidor y crea relaciones estratégicas que benefician al ecosistema más amplio de ZV Holdings.',
      ],
    },
    'pura-tinta-fest': {
      tagline: 'La convención de tatuajes más grande de Centroamérica',
      description:
        'Pura Tinta Fest es una convención cultural que soporta asistencia a gran escala, expositores y artistas mientras preserva la identidad cultural. Reúne a más de 300 artistas del tatuaje para una celebración de varios días de la cultura del tatuaje.',
      highlights: [
        'Más de 300 artistas del tatuaje por evento',
        'La convención de tatuajes más grande de Centroamérica',
        'Formato de varios días con tatuajes en vivo, competencias y música',
        'Fuerte identidad cultural y lealtad comunitaria',
        'Ingresos: Boletería + Venta de stands',
      ],
      stats: [
        { label: 'Artistas', value: '300+' },
        { label: 'Formato', value: 'Convención' },
        { label: 'Escalabilidad', value: 'Media-Alta' },
        { label: 'Etapa', value: 'Maduro' },
      ],
      details: [
        'Pura Tinta Fest demuestra el modelo de convención replicable dentro del portafolio de ZV Holdings. El formato — stands de exhibición, demostraciones en vivo, competencias y programación musical — puede replicarse en diferentes mercados.',
        'El modelo de convención reúne a la comunidad del tatuaje a gran escala, creando momentos culturales poderosos que impulsan la lealtad de marca y la asistencia recurrente año tras año.',
        'Los ingresos provienen de venta de entradas, alquiler de stands a artistas y vendedores, y patrocinios. El modelo de convención ha demostrado ser resiliente con un crecimiento constante de asistencia año tras año.',
      ],
    },
    magflow: {
      tagline: 'Plataforma de música, estudio de grabación y experiencias en vivo',
      description:
        'Magflow opera en la intersección de la música, la cultura y las experiencias en vivo — combinando un estudio de grabación profesional con una plataforma de eventos en vivo. Desde el desarrollo de artistas y la producción hasta conciertos de clase mundial, Magflow es el motor de talento y contenido del ecosistema ZV Holdings.',
      highlights: [
        'Contrataciones de talento de clase mundial incluyendo headliners internacionales',
        'Estudio de grabación profesional e instalación de producción',
        'Pipeline de desarrollo de artistas que alimenta el ecosistema más amplio',
        'Experiencias de conciertos premium en venues curados',
        'Creación de contenido y distribución de medios',
        'Ingresos: Boletería + Servicios de estudio + Contenido',
      ],
      stats: [
        { label: 'Artistas (2026)', value: '5+' },
        { label: 'Formato', value: 'Estudio + En Vivo' },
        { label: 'Escalabilidad', value: 'Alta' },
        { label: 'Etapa', value: 'Crecimiento' },
      ],
      details: [
        'Magflow llena un vacío crítico en el portafolio de ZV Holdings al combinar infraestructura creativa con entrega de experiencias en vivo. El estudio de grabación desarrolla talento interno, creando un pipeline de artistas que se presentan en conciertos de Magflow, festivales de Electric Animals y otros eventos del portafolio.',
        'En el lado de eventos en vivo, Magflow trae talento musical de clase mundial a mercados tradicionalmente desatendidos por los circuitos de giras internacionales. Son experiencias íntimas con precios premium en venues curados — márgenes más altos por entrada que los formatos de festival.',
        'El estudio genera ingresos estables a través de sesiones de grabación, mezcla, masterización y trabajo de producción, mientras el lado de eventos impulsa ingresos de boletería y contenido. En conjunto, las relaciones con artistas y el contenido producido alimentan valor en todo el ecosistema.',
      ],
    },
    sweetspot: {
      tagline: 'Liga de esports y plataforma de gaming competitivo',
      description:
        'Sweetspot proporciona sistemas estructurados para la integridad competitiva, torneos recurrentes y crecimiento de audiencia en el espacio de esports. Opera como una plataforma digital-first con activaciones de eventos físicos.',
      highlights: [
        'Liga de gaming competitivo estructurada',
        'Formato de torneos recurrentes',
        'Digital-first con integración de eventos físicos',
        'Demográfico joven y comprometido (18-30)',
        'Ingresos: Patrocinios + Eventos',
      ],
      stats: [
        { label: 'Modelo', value: 'Digital-first' },
        { label: 'Audiencia', value: '18-30' },
        { label: 'Escalabilidad', value: 'Alta' },
        { label: 'Etapa', value: 'Crecimiento' },
      ],
      details: [
        'Sweetspot aprovecha el mercado de esports en rápido crecimiento en América Latina, donde la cultura gaming se expande más rápido que el entretenimiento tradicional. La plataforma proporciona la infraestructura para el juego competitivo organizado.',
        'La estructura de torneos recurrentes crea ciclos de engagement predecibles y oportunidades de patrocinio. A diferencia de los eventos únicos, el formato de liga genera puntos de contacto consistentes con una audiencia comprometida durante todo el año.',
        'Como marca digital-first, Sweetspot tiene el costo marginal de expansión más bajo del portafolio. La plataforma puede escalar a nuevos juegos, regiones y formatos de torneos sin inversión significativa en infraestructura.',
      ],
    },
    'bandida-tattoo-studio': {
      tagline: 'Estudio de tatuaje premium y plataforma cultural',
      description:
        'Bandida Tattoo Studio es un negocio físico premium con fuerte identidad cultural, validando la escalabilidad en el mundo real. El estudio sirve como un centro cultural durante todo el año que conecta con la comunidad más amplia del tatuaje.',
      highlights: [
        'Marca física premium con fuerte identidad',
        'Centro cultural durante todo el año y ancla comunitaria',
        'Construcción de comunidad más allá de las paredes del estudio',
        'Potencial de franquicia para expansión geográfica',
        'Ingresos: Servicios',
      ],
      stats: [
        { label: 'Modelo', value: 'Físico' },
        { label: 'Formato', value: 'Estudio' },
        { label: 'Escalabilidad', value: 'Media' },
        { label: 'Etapa', value: 'Maduro' },
      ],
      details: [
        'Bandida Tattoo Studio demuestra que la tesis de ZV Holdings funciona en retail físico, no solo en eventos. El estudio mantiene una marca premium con fuerte identidad cultural y clientela leal durante todo el año.',
        'El estudio mantiene engagement comunitario durante todo el año a través de su identidad cultural, eventos y presencia social, impulsando adquisición consistente de clientes y lealtad de marca.',
        'Como marca de ladrillo y mortero, Bandida valida la capacidad operativa en el mundo real y proporciona un modelo para potencial expansión de franquicia a otras ciudades.',
      ],
    },
  },

  // ── Página del Calendario ────────────────────────────────────────
  calendarPage: {
    meta: {
      title: 'Calendario 2026 — ZV Holdings',
      description:
        'Calendario de eventos 2026 de ZV Holdings: Electric Animals, Blockchain Jungle, Pura Tinta Fest, conciertos de Magflow y más en Costa Rica e internacionalmente.',
    },
    hero: {
      label: 'Calendario',
      title: 'Eventos 2026',
      description:
        'Un calendario repleto de eventos en Costa Rica y mercados internacionales — demostrando la escala y el impulso del ecosistema ZV Holdings.',
    },
    summaryMetrics: [
      { value: '15+', label: 'Eventos Confirmados' },
      { value: '5+', label: 'Países' },
      { value: '~75,000', label: 'Asistentes Esperados en Total' },
    ],
    costaRica: {
      label: 'Costa Rica',
      title: 'Eventos del Mercado Local',
      description:
        '9 eventos confirmados en Costa Rica para 2026, abarcando festivales, conciertos, convenciones y conferencias.',
    },
    europe: {
      label: 'Electric Animals Euro Tour — Octubre 2026',
      title: 'Expansión Europea',
      description:
        'Tres paradas confirmadas en Europa en octubre — demostrando que el formato de festival funciona entre continentes. Más fechas por anunciar.',
    },
    latam: {
      label: 'Electric Animals Latinoamérica — Diciembre 2026',
      title: 'Expansión Regional',
      description:
        'Expandiéndonos por Centroamérica y Latinoamérica en diciembre con fechas confirmadas en El Salvador y Colombia. Más fechas por anunciar.',
    },
    tba: 'Por anunciar',
  },

  // ── Página de Inversión ──────────────────────────────────────────
  investPage: {
    meta: {
      title: 'Invertir — ZV Holdings',
      description:
        'Oportunidades de inversión en ZV Holdings: participación a nivel de holding, vertical específica o marca específica en el ecosistema de entretenimiento líder de América Latina.',
    },
    hero: {
      label: 'Invertir',
      title: 'Invierta en el Ecosistema',
      description:
        'ZV Holdings se asocia selectivamente con inversionistas que se alinean con nuestra visión a largo plazo — construir la empresa holding de entretenimiento y creatividad líder de América Latina.',
    },
    thesis: {
      label: 'Tesis de Inversión',
      title: 'Por Qué ZV Holdings',
      description:
        'Nuestra estrategia es composición del portafolio — infraestructura, audiencias y datos compartidos crean un ecosistema auto-reforzante.',
      points: [
        'Integración vertical: estrategia, tecnología, ejecución y propiedad intelectual bajo un solo grupo',
        'Empresas operativas comprobadas con ingresos reales — no startups especulativas',
        'Formatos replicables: festivales, convenciones, estudios, plataformas competitivas',
        'Audiencias y comunidades reales con tracción medible',
        'Escalable entre mercados sin reconstruir desde cero',
        'Trayectoria de crecimiento de ingresos 3x año contra año',
      ],
    },
    formats: {
      label: 'Oportunidades',
      title: 'Tres Formatos de Inversión',
      items: [
        {
          title: 'Nivel Holding',
          description: 'Exposición completa al portafolio con creación de valor a largo plazo',
          highlights: [
            'Diversificado en todas las empresas del portafolio',
            'Beneficio de las sinergias del ecosistema',
            'Alineación estratégica a largo plazo',
          ],
        },
        {
          title: 'Vertical Específica',
          description: 'Enfoque en una categoría específica del portafolio',
          highlights: [
            'Festivales y experiencias',
            'Tecnología y plataformas',
            'Activos culturales y creativos',
          ],
        },
        {
          title: 'Marca Específica',
          description: 'Inversión dirigida en marcas o proyectos individuales',
          highlights: [
            'Eventos insignia',
            'Expansión de marcas específicas',
            'Estructuras de co-propiedad',
          ],
        },
      ],
    },
    form: {
      label: 'Comencemos',
      title: 'Solicite una Conversación',
      description:
        'Ya sea inversionista, socio estratégico o simplemente curioso — cuéntenos un poco sobre usted y nuestro equipo le contactará dentro de 48 horas.',
      points: [
        'Sin compromiso',
        'Todas las consultas son revisadas por el equipo de liderazgo',
        'Respuesta dentro de 48 horas',
      ],
      preferEmail: '¿Prefiere correo electrónico?',
    },
    closing: {
      description:
        'ZV Holdings está diseñado para una nueva categoría de inversionista — uno que entiende que el futuro del entretenimiento, la cultura y la comunidad se construye sobre sistemas, no éxitos aislados.',
      line1: 'No perseguimos tendencias.',
      line2: 'Construimos ecosistemas que perduran.',
      portfolioCta: 'Ver Portafolio',
    },
  },

  // ── Formulario de Inversión ──────────────────────────────────────
  investForm: {
    step: 'Paso',
    of: 'de',
    stepLabels: [
      'Cuéntenos sobre usted',
      'Detalles de inversión',
      'Información de contacto',
      'Revisión y envío',
    ],
    step0: {
      title: '¿Cómo le gustaría conectar?',
      subtitle: 'Seleccione la opción que mejor le describe.',
    },
    inquiryTypes: [
      {
        id: 'investor',
        label: 'Inversionista',
        description: 'Quiero explorar oportunidades de inversión',
      },
      {
        id: 'partner',
        label: 'Socio Estratégico',
        description: 'Represento una marca, fondo u organización',
      },
      {
        id: 'general',
        label: 'Consulta General',
        description: 'Tengo preguntas sobre ZV Holdings',
      },
    ],
    step1: {
      title: 'Detalles de inversión',
      subtitle: 'Ayúdenos a entender lo que busca.',
      levelLabel: 'Nivel de inversión',
      rangeLabel: 'Rango típico de inversión',
    },
    investmentLevels: [
      { id: 'holding', label: 'Nivel Holding', description: 'Exposición completa al portafolio' },
      { id: 'vertical', label: 'Vertical Específica', description: 'Festivales, tech o creativo' },
      { id: 'brand', label: 'Marca Específica', description: 'Marca o proyecto individual' },
      { id: 'unsure', label: 'Aún No Estoy Seguro', description: 'Me gustaría saber más' },
    ],
    investmentRanges: [
      { id: '25-100', label: '$25K – $100K' },
      { id: '100-500', label: '$100K – $500K' },
      { id: '500+', label: '$500K+' },
      { id: 'undisclosed', label: 'Prefiero no decir' },
    ],
    step2: {
      title: 'Su información de contacto',
      subtitle: 'Para que nuestro equipo pueda comunicarse con usted.',
      name: 'Nombre completo',
      namePlaceholder: 'Su nombre completo',
      email: 'Correo electrónico',
      emailPlaceholder: 'usted@empresa.com',
      company: 'Empresa / Organización',
      companyPlaceholder: 'Nombre de la empresa',
      message: 'Mensaje',
      messagePlaceholder: 'Cualquier cosa que le gustaría que supiéramos...',
      optional: '(opcional)',
      required: '*',
    },
    step3: {
      title: 'Revise su información',
      subtitle: 'Confirme que todo se vea bien antes de enviar.',
      inquiryTypeLabel: 'Tipo de consulta',
      investmentDetailsLabel: 'Detalles de inversión',
      contactLabel: 'Contacto',
      messageLabel: 'Mensaje',
      privacy: 'Su información se mantiene privada. Sin compromiso.',
    },
    back: 'Atrás',
    continue: 'Continuar',
    submit: 'Solicitar una Conversación',
    sending: 'Enviando...',
    alreadySubmitted: {
      thanks: 'Gracias,',
      received: 'Consulta recibida.',
      message: 'Ya envió una consulta. Nuestro equipo se comunicará con usted dentro de 48 horas.',
      another: 'Enviar otra consulta',
    },
    submitted: {
      thanks: 'Gracias,',
      message:
        'Su consulta ha sido enviada exitosamente. Nuestro equipo se comunicará con usted dentro de 48 horas.',
    },
  },
};

export default es;
