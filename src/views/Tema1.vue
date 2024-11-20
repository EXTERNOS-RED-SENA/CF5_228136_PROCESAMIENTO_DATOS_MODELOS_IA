<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Construcción de #[i datasets]
      
    .row.justify-content-center.mb-4         
      .col-lg-9.my-lg-0.my-3
        p La construcción de datasets es el primer paso para cualquier proyecto de aprendizaje automático. Un dataset bien diseñado y construido es la base sobre la cual se desarrollan modelos robustos y precisos. En este capítulo, se abordará la importancia de los requerimientos y el diseño del dataset, se discutirán diversas técnicas de recolección de datos, y se analizarán los procesos necesarios para garantizar la calidad de los datos obtenidos. Estos elementos son clave para maximizar el valor de los modelos de #[i machine learning], ya que cualquier error en esta fase puede tener consecuencias significativas en las etapas posteriores.
        .bg1.brad.p-3.j1
          p.mb-0 En el ámbito del #[i Machine learning], la construcción de datasets robustos y representativos es fundamental para el éxito de cualquier proyecto. Un dataset, en esencia, es una colección organizada de datos que sirve como materia prima para entrenar y evaluar modelos de Inteligencia Artificial. Este capítulo explorará los aspectos clave en la construcción de datasets, desde la definición de requerimientos hasta las técnicas de recolección y control de calidad, con el objetivo de proporcionar al lector las herramientas necesarias para crear bases sólidas para sus proyectos de #[i Machine learning]. 
      .col-lg-3.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/curso/temas/3.png')   

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Requerimientos y diseño 

    .row.justify-content-center.mb-5 
      .col-lg-5.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/curso/temas/6.png')              
      .col-lg-7.my-lg-0.my-3
        p Antes de construir un dataset, es esencial establecer los requerimientos y diseñarlo adecuadamente. Esta fase consiste en definir cuál es el objetivo del dataset, qué tipo de información se necesita recolectar, y cuáles serán las características más relevantes. Para diseñar un buen dataset, se debe considerar el tipo de datos que se van a manejar: datos estructurados, semiestructurados, o no estructurados. Cada tipo tiene implicaciones diferentes en cuanto a su manipulación y almacenamiento.
        .bg4.brad.p-3.j1
          p.mb-0 Antes de iniciar la recolección de datos, es esencial definir con precisión los objetivos del proyecto de #[i Machine learning]. ¿Qué problema se busca resolver? ¿Qué tipo de modelo se utilizará? ¿Qué preguntas se intentarán responder con los datos? Las respuestas a estas interrogantes guiarán la definición de los requerimientos del dataset.

    p Aspectos por considerar en esta etapa:


    .row.justify-content-center.text-center.mb-5
      .col-lg-3.my-lg-0.my-3
        .bg5.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/7.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg6.px-3.py-1                        
              h5.mb-0.text-center Identificación de variables        
          p.mb-0 Determinar las variable relevantes para el problema, incluyendo variables predictoras y variables objetivo.
      .col-lg-3.my-lg-0.my-3
        .bg5.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/8.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg6.px-3.py-1                        
              h5.mb-0.text-center Tipo de datos         
          p.mb-0 Definir el tipo de datos que se recolectará (numérico, categórico, texto, imágenes, etc.) y su formato (estructurado, no estructurado o semiestructurado).  

      .col-lg-3.my-lg-0.my-3
        .bg5.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/9.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg6.px-3.py-1                         
              h5.mb-0.text-center Tamaño del #[i dataset]         
          p.mb-0 Estimar el tamaño de la muestra necesaria para obtener resultados significativos, considerando la complejidad del problema y el algoritmo de #[i Machine learning] a utilizar.
      .col-lg-3.my-lg-0.my-3
        .bg5.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/10.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg6.px-3.py-1                        
              h5.mb-0.text-center Fuente de datos        
          p.mb-0 Identificar las fuentes de donde se obtendrán los datos, ya sean bases de datos existentes, APIs, web #[i scraping], encuestas, sensores, etc.               


    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, el diseño del dataset incluye determinar la fuente de los datos: ¿provendrán de archivos CSV, bases de datos relacionales, o APIs externas? Definir cómo se capturarán los datos ayuda a garantizar la consistencia y disponibilidad necesaria para el modelado. En esta fase también se debe planificar cómo se realizará la transformación de datos y si se necesitan datos adicionales para enriquecer el conjunto. La selección de estas estrategias impactará directamente en la calidad del dataset y, por ende, en el rendimiento del modelo.
        br

        |Un diseño bien definido del dataset asegurará la calidad de los datos y facilitará las etapas posteriores del proceso de #[i Machine learning]. 
    .row.bg7.align-items-center
      .px-lg-5.px-4  
        Separador 
        #t_1_2.titulo-segundo.color-acento-contenido
          h2 1.2 Técnicas de recolección 

        p Una vez que se ha diseñado el dataset, se debe proceder a la recolección de datos. Existen varias técnicas de recolección que se utilizan dependiendo del contexto y del tipo de datos que se necesiten. Algunas de las más comunes incluyen:

        .row.justify-content-center.mb-4 
          .col-lg-3.my-3
            img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='')          
          .col-lg-9.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg8")
              div(titulo="Web <i>scraping</i>")
                p Utilizado para recolectar datos de sitios web de manera automatizada. Este enfoque es útil para la recolección de datos no estructurados.
              div(titulo="Consultas a bases de datos")
                p Utilizar consultas SQL o APIs de bases de datos relacionales permite la recolección de datos estructurados. Esta técnica es eficiente para acceder a información ya organizada.  
              div(titulo="Formularios de entrada")
                p La recolección de datos directamente desde usuarios mediante formularios es particularmente útil para obtener información específica y controlada.  
              div(titulo="APIs")
                p Acceder a datos a través de interfaces de programación de aplicaciones (APIs) proporcionadas por diferentes plataformas y servicios. 
              div(titulo="Encuestas")
                p Diseñar y administrar cuestionarios para recopilar información directamente de los individuos.  
              div(titulo="Sensores")
                p Utilizar dispositivos que capturan datos del entorno, como temperatura, humedad, ubicación, etc.  

        p.mb-5 Cada una de estas técnicas tiene sus ventajas y desventajas, y la elección dependerá de los objetivos del proyecto y de los recursos disponibles. Para facilitar la comprensión de las distintas técnicas, se presenta la siguiente tabla que resume algunas de sus principales características:  
        
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-botones
              h5 Tabla 1. 
              span Técnicas de recolección de datos

            .tabla-a.color-acento-botones.text-center
              table
                caption Fuente: OIT, 2024.
                thead
                  tr
                    th Técnica de Recolección
                    th Tipo de Datos
                    th Ventajas
                    th Desventajas
                    th Herramientas

                tbody
                  tr
                    td Web Scraping
                    td No estructurados
                    td Gran cantidad de datos
                    td Problemas legales y de calidad
                    td Beautiful Soup, Scrapy, Selenium
                  tr
                    td Consultas a Bases de Datos
                    td Estructurados
                    td Rápido y consistente
                    td Limitado por la estructura
                    td SQL, R, Python
                  tr
                    td Formularios de Entrada
                    td Estructurados
                    td Datos específicos y controlados
                    td Requiere participación activa
                    td Google Forms, SurveyMonkey
                  tr
                    td APIs
                    td Estructurados
                    td Acceso eficiente a datos
                    td Dependencia del proveedor
                    td Librerías de cliente para APIs en R y Python
                  tr
                    td Sensores
                    td Estructurados
                    td Datos en tiempo real
                    td Requiere infraestructura física
                    td Dispositivos IoT, Arduino, Raspberry Pi                                                              
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg9.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/14.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Esta tabla muestra las distintas opciones de recolección disponibles, lo que permite elegir la más adecuada según las necesidades del proyecto.

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Control de calidad

    .row.justify-content-center.mb-5
      .col-lg-8.my-lg-0.my-3
        p Una vez recolectados los datos, es fundamental realizar un control de calidad para asegurar que los mismos sean adecuados para el entrenamiento de modelos de #[i machine learning]. La calidad de los datos tiene un impacto directo en el rendimiento de los modelos, por lo que cualquier error o inconsistencias pueden resultar en predicciones erróneas.
        .bg4.brad.p-3.j1
          p.mb-0 El control de calidad implica la identificación y eliminación de datos faltantes, valores duplicados o fuera de rango, y errores tipográficos. Además, es importante verificar la consistencia de los datos, asegurándose de que las unidades de medida sean correctas y uniformes. Otro aspecto importante del control de calidad es la detección de outliers, ya que estos pueden afectar negativamente la capacidad del modelo para generalizar los patrones. 
      .col-lg-4.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/curso/temas/15.png')  
    p Algunas tareas comunes en el control de calidad de datos incluyen: 

    .row.justify-content-center.text-center.mb-5
      .col-lg-4.my-lg-0.my-3
        .bg10.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/16.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg11.px-3.py-1                        
              h5.mb-0.text-center Limpieza de datos       
          p.mb-0 Eliminar o corregir datos erróneos, faltantes o duplicados.
      .col-lg-4.my-lg-0.my-3
        .bg10.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/17.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg11.px-3.py-1                        
              h5.mb-0.text-center Validación de datos  
          p.mb-0 Verificar que los datos cumplan con los criterios de validez definidos en la etapa de diseño.

      .col-lg-4.my-lg-0.my-3
        .bg10.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/18.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg11.px-3.py-1                         
              h5.mb-0.text-center Transformación de datos   
          p.mb-0 Convertir los datos a un formato adecuado para el análisis, como la codificación de variables categóricas o la normalización de datos numéricos.  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/19.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Para la ejecución del control de calidad, se pueden utilizar herramientas y bibliotecas como Pandas en Python, que permiten realizar operaciones de limpieza y transformación de manera eficiente. Por ejemplo, la eliminación de datos duplicados se realiza con funciones como drop_duplicates(), mientras que los datos faltantes pueden ser gestionados con fillna() para imputar valores. A continuación, se presenta un ejemplo visual que ilustra cómo es el proceso de control de calidad en un dataset, destacando las etapas desde la detección hasta la corrección de los errores:             

    .row.justify-content-center.mb-5 
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 1.
          span Flujo de control de calidad de datos
        
        .bgfig.p-5.brad.mb-2
          img.img-a.img-t(src='@/assets/curso/temas/20.svg' alt='La Figura 1 se denomina « Flujo de control de calidad de datos» y presenta las etapas secuenciales de recolección, validación, limpieza y corrección en un ciclo que lleva al mejoramiento de la calidad en los datos.') 
        figcaption Fuente: OIT, 2024. 


    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/curso/temas/21.png')              
      .col-lg-8.my-lg-0.my-3
        p La figura muestra un diagrama de flujo que empieza con la recolección de datos, seguido de pasos como validación, limpieza, corrección y, finalmente, aprobación de los datos para su uso en el modelado. Este proceso cíclico asegura que los datos finales sean óptimos para el desarrollo del modelo.
        p El monitoreo continuo de la calidad de datos debe incluir tanto verificaciones automatizadas como revisiones manuales periódicas. Las métricas de calidad deben definirse claramente y monitorearse de manera consistente. Algunos ejemplos comunes incluyen la completitud de los datos, la consistencia entre diferentes fuentes, y la adherencia a los formatos esperados.
        .bg4.brad.p-3.j1
          p.mb-0 Al concluir este capítulo, se debe enfatizar que la construcción del dataset no es solo una tarea técnica, sino una fase crítica que determina el éxito de los modelos de #[i machine learning]. Un enfoque riguroso en el diseño, la recolección y el control de calidad de los datos resultará en un conjunto de datos que pueda ser confiablemente usado para entrenamiento y predicción, minimizando así los riesgos de error en etapas posteriores.

</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema1',
  components: { AcordionA },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
