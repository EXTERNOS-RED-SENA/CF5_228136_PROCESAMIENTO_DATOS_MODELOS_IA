export default {
  global: {
    componenteFormativo:
      'Preparación y modelado de datos para algoritmos de <i>Machine learning</i>',
    descripcionCurso:
      'Este componente aborda las técnicas y metodologías para la preparación y modelado de datos en contextos de <i>Machine learning</i>. Explora desde la construcción inicial de <i>datasets</i> hasta la preparación final para el entrenamiento de modelos, incluyendo el tratamiento de sesgos y estrategias de segmentación. Proporciona herramientas fundamentales para garantizar la calidad y efectividad de los datos en proyectos de IA.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Construcción de <i>datasets</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos y diseño',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de recolección',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control de calidad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tratamiento de sesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de sesgos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de detección',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos de corrección',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Segmentación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conjuntos de entrenamiento y prueba',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Validación cruzada',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias de muestreo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparación para modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Escalamiento y normalización',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Codificación de variables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Selección de características',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF05_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El algoritmo ideal',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, octubre 10). El algoritmo ideal.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZgkwSKyGpnY',
    },
    {
      tema: '¿Qué es <i>Machine learning</i>?',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020, 13 septiembre). ¿Qué es Machine learning?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J9w6KquPKbE',
    },
    {
      tema: 'Introducción al <i>Machine learning</i>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, septiembre 15). Introducción al <i>machine learning.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xwjQmGJ3q0I',
    },
    {
      tema: '<i>Machine learning</i> con Python',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, octubre 10). Machine learning con Python.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=noMy4-zjR9Q',
    },
    {
      tema: 'Modelos y metodologías de analítica',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, marzo 27). Modelos y metodologías de analítica.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=96pohadjEWE ',
    },
    {
      tema: 'Análisis exploratorio de datos',
      referencia:
        'Limpiar datos de Excel, CSV, PDF y Hojas de cálculo de Google con el intérprete de datos. (s. f.). Tableau.',
      tipo: 'Portal web',
      link:
        'https://help.tableau.com/current/pro/desktop/es-es/data_interpreter.htm ',
    },
    {
      tema: 'Definición de pandas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 20). Definición de pandas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=W48LYsToQHQ',
    },
  ],
  glosario: [
    {
      termino: '<i>Bias (Sesgo)</i>',
      significado:
        'Desviación sistemática en los datos que puede llevar a resultados injustos o poco representativos en los modelos de <i>machine learning.</i>',
    },
    {
      termino: '<i>Cross-validation</i>',
      significado:
        'Técnica de evaluación que divide los datos en múltiples subconjuntos para validar el rendimiento del modelo de manera más robusta.',
    },
    {
      termino: '<i>Dataset</i>',
      significado:
        'Conjunto estructurado de datos organizados para su uso en entrenamiento y evaluación de modelos de <i>machine learning.</i>',
    },
    {
      termino: '<i>Data splitting</i>',
      significado:
        'Proceso de dividir un conjunto de datos en subconjuntos para entrenamiento, validación y prueba de modelos.',
    },
    {
      termino: '<i>Feature engineering</i>',
      significado:
        'Proceso de selección, creación y transformación de variables para optimizar el rendimiento de modelos de <i>machine learning.</i>',
    },
    {
      termino: '<i>Feature scaling</i>',
      significado:
        'Proceso de normalizar o estandarizar variables numéricas para que estén en rangos comparables.',
    },
    {
      termino: '<i>Hold-out set</i>',
      significado:
        'Conjunto de datos reservado para la evaluación final del modelo, que no se utiliza durante el entrenamiento.',
    },
    {
      termino: '<i>Imbalanced data</i>',
      significado:
        'Situación donde las clases en un conjunto de datos no están representadas equitativamente.',
    },
    {
      termino: '<i>Missing values</i>',
      significado:
        'Datos faltantes en un conjunto de datos que requieren tratamiento especial antes del modelado.',
    },
    {
      termino: '<i>Normalización</i>',
      significado:
        'Técnica para ajustar valores numéricos a una escala común, típicamente entre 0 y 1.',
    },
    {
      termino: '<i>One-hot encoding</i>',
      significado:
        'Técnica para convertir variables categóricas en formato binario para su uso en modelos de <i>machine learning.</i>',
    },
    {
      termino: '<i>Outliers</i>',
      significado:
        'Valores atípicos que se desvían significativamente del patrón general de los datos.',
    },
    {
      termino: '<i>Sampling strategy</i>',
      significado:
        'Método utilizado para seleccionar subconjuntos representativos de datos para entrenamiento y validación.',
    },
    {
      termino: '<i>Selection bias</i>',
      significado:
        'Sesgo que ocurre cuando la selección de datos no es aleatoria o representativa de la población objetivo.',
    },
    {
      termino: '<i>Standardization</i>',
      significado:
        'Proceso de transformar variables para que tengan media cero y desviación estándar unitaria.',
    },
    {
      termino: '<i>Test set</i>',
      significado:
        'Conjunto de datos utilizado para evaluar el rendimiento final del modelo entrenado.',
    },
    {
      termino: '<i>Training set</i>',
      significado:
        'Conjunto de datos utilizado para entrenar el modelo de <i>machine learning.</i>',
    },
    {
      termino: '<i>Validation set</i>',
      significado:
        'Conjunto de datos utilizado para ajustar hiperparámetros y evaluar el modelo durante el desarrollo.',
    },
    {
      termino: '<i>Variable encoding</i>',
      significado:
        'Proceso de convertir variables categóricas en formato numérico para su uso en modelos.',
    },
    {
      termino: '<i>Z-score</i>',
      significado:
        'Medida estadística que indica cuántas desviaciones estándar se aleja un valor de la media.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfonso Jaramillo, M. C. (2019). Consideraciones para el diseño de instrumentos de recolección de datos. Recuperado de ',
      link:
        'https://acei.co/wp-content/uploads/2019/10/Webinar-ACEI-Dise%C3%B1o-intrumentos-para-recolecci%C3%B3n-de-datos.pdf',
    },
    {
      referencia:
        'ATLAS.ti. (s.f.). Guía exhaustiva sobre el sesgo en la investigación. Recuperado de ',
      link:
        'https://atlasti.com/es/guias/guia-investigacion-cualitativa-parte-1/sesgo',
    },
    {
      referencia:
        'Cepal. (2020). Recomendaciones para eliminar el sesgo de selección en las encuestas de hogares en el contexto de la pandemia de COVID-19. Recuperado de ',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/45552/1/S2000316_es.pdf',
    },
    {
      referencia:
        'Emanuelli, P. B. (s.f.). Selección de técnicas: Técnicas de recolección de datos. Criterios para la selección de técnicas de recolección de datos. Recuperado de ',
      link:
        'https://www.academia.edu/30424818/CAP_1_SELECCI%C3%93N_DE_T%C3%89CNICAS_T%C3%89CNICAS_DE_RECOLECCI%C3%93N_DE_DATOS_CRITERIOS_PARA_LA_SELECCI%C3%93N_DE_T%C3%89CNICAS_DE_RECOLECCI%C3%93N_DE_DATOS',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2020). Norma Técnica de la Calidad del Proceso Estadístico (NTC PE 1000:2020). Recuperado de ',
      link:
        'https://www.funcionpublica.gov.co/documents/34645357/0/NTC%2BPE%2B1000-2020%2B%281%29.pdf/35f0fc27-cba3-d396-4dc2-639f33969199?t=1635181030263',
    },
    {
      referencia:
        'Meléndez, J. (2019). Técnicas de recolección de datos: ejemplos y guía paso a paso. Recuperado de ',
      link:
        'https://reisdigital.es/datos-e-informacion/tecnicas-de-recoleccion-de-datos-ejemplos/',
    },
    {
      referencia:
        'Ministerio de Ciencia, Tecnología e Innovación de Colombia. (2021). Guía para la gestión de datos de investigación. Recuperado de ',
      link:
        'https://minciencias.gov.co/sites/default/files/upload/noticias/guia_gestion_de_datos_redcolombianadeic_1.pdf',
    },
    {
      referencia:
        'Ministerio de Ciencia, Tecnología e Innovación de Colombia. (s.f.). Diseño de un Plan de Gestión de Datos de Investigación (PGDI). Recuperado de ',
      link:
        'https://red-documentacion.minciencias.gov.co/Gestion_Datos_Investigacion/Gu%C3%ADa-PGDI',
    },
    {
      referencia:
        'Restrepo, D., & Restrepo, M. (2004). Sesgos en diseños analíticos. Revista Colombiana de Psiquiatría, 33(3), 290-297. Recuperado de ',
      link:
        'https://scielo.org.co/scielo.php?pid=S0034-74502004000300007&script=sci_arttext',
    },
  ],
}
