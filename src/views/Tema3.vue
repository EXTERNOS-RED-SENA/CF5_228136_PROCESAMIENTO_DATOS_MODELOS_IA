<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Segmentación de datos

    .row.justify-content-center.bg9.mb-5
      .col-lg-7.p-0.my-lg-0.my-3.j1
        .p-4
          p.mb-0 La segmentación de datos es un paso clave en el proceso de preparación de #[i Datasets] para el aprendizaje automático. Dividir los datos en diferentes subconjuntos permite evaluar el rendimiento del modelo de manera efectiva y garantizar su capacidad para generalizar a datos no vistos. En este capítulo, se abordarán los conceptos de conjuntos de entrenamiento, prueba y validación, la importancia de la validación cruzada, y las estrategias de muestreo que aseguran una adecuada distribución de los datos..
      .col-lg-5.p-0.my-lg-0.my-3.j1
        img.img-mov(src='@/assets/curso/temas/30.png') 

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Conjuntos de entrenamiento y prueba
    p La correcta división del #[i Dataset] en conjuntos de entrenamiento y prueba es esencial para evaluar adecuadamente el rendimiento del modelo de #[i machine learning]. En general, el #[i Dataset] se divide en dos o más subconjuntos:        

    .row.bg7.align-items-center
      .px-lg-5.px-4  
        .row.justify-content-center.text-center.mb-5
          .col-lg-4.my-lg-0.my-3
            .bg10.brad1.p-4.h-100
              img.img-t.img-a.mb-4(src='@/assets/curso/temas/33.png' alt='')
              .row.justify-content-center.mb-3
                .col-auto.bg11.px-3.py-1                        
                  h5.mb-0.text-center Conjunto de Entrenamiento
              p.mb-0 Es la porción del #[i Dataset] que se utiliza para entrenar el modelo. El objetivo es proporcionar al modelo suficientes ejemplos para aprender patrones relevantes y generalizables.
          .col-lg-4.my-lg-0.my-3
            .bg5.brad1.p-4.h-100
              img.img-t.img-a.mb-4(src='@/assets/curso/temas/34.png' alt='')
              .row.justify-content-center.mb-3
                .col-auto.bg11.px-3.py-1                        
                  h5.mb-0.text-center Conjunto de Prueba
              p.mb-0 Este conjunto se mantiene separado del proceso de entrenamiento y se utiliza para evaluar la capacidad del modelo para generalizar a nuevos datos. El conjunto de prueba permite medir el rendimiento real del modelo y evitar el sobreajuste.

          .col-lg-4.my-lg-0.my-3
            img.img-t.img-a.mb-4(src='@/assets/curso/temas/31.png' alt='')        

        .row.justify-content-center.mb-5
          .col-lg-4.my-lg-0.my-3.j1
            img.img-t.img-a(src='@/assets/curso/temas/32.png')              
          .col-lg-8.my-lg-0.my-3
            p Una buena práctica es destinar aproximadamente un 70-80% de los datos para el entrenamiento y el 20-30% restante para la prueba. Sin embargo, estas proporciones pueden ajustarse según el tamaño del #[i Dataset] y la naturaleza del problema.

            .row.justify-content-center.align-items-center.bg12.brad1.p-4.mb-4
              .col-lg-auto
                img.img-a.img-t(src='@/assets/curso/temas/19.png' alt='')
              .col.pt-lg-0.pt-md-4
                p.mb-0 Es importante asegurarse de que tanto el conjunto de entrenamiento como el conjunto de prueba sean representativos de la población de datos, evitando así que el modelo aprenda patrones específicos del conjunto de entrenamiento que no se replican en el conjunto de prueba. 

            p La división de datos en conjuntos de entrenamiento y prueba representa el primer paso en la evaluación sistemática de modelos de #[i machine learning]. Esta separación permite simular cómo se comportará el modelo ante datos que nunca ha visto, proporcionando una estimación más realista de su rendimiento en el mundo real. Para comprender mejor las implicaciones de diferentes estrategias de división de datos, consideremos las siguientes proporciones comúnmente utilizadas y sus casos de uso:

        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-botones
              h5 Tabla 3. 
              span Proporciones empleadas en entrenamiento y pruebas

            .tabla-a.color-acento-botones.text-center
              table
                caption Fuente: OIT, 2024.
                thead
                  tr
                    th Estrategia de división
                    th Proporción (Train/Test)
                    th Casos de uso
                    th Consideraciones especiales

                tbody
                  tr
                    td Clásica
                    td 80/20
                    td #[i Datasets] grandes (>10,000 muestras)
                    td Balance entre representatividad y evaluación
                  tr
                    td Conservadora
                    td 90/10
                    td #[i Datasets] muy grandes (>100,000 muestras)
                    td Maximiza datos de entrenamiento
                  tr
                    td Equilibrada
                    td 70/30
                    td #[i Datasets] medianos (1,000-10,000 muestras)
                    td Mayor confianza en la evaluación
                  tr
                    td Proporcional
                    td 60/40
                    td #[i Datasets] pequeños (<1,000 muestras)
                    td Evita sobreajuste en muestras limitadas
                  tr
                    td Específica del dominio
                    td Variable
                    td Casos con restricciones temporales o secuenciales
                    td Respeta la estructura temporal de los datos 


    .row.justify-content-center
      .col-lg-10
        .bg9.p-4.brad
          p.mb-0 La elección de la proporción adecuada depende no solo del tamaño del #[i Dataset], sino también de factores como la complejidad del problema, la variabilidad en los datos y los requisitos específicos del proyecto. En algunos casos, puede ser necesario ajustar estas proporciones para garantizar que ambos conjuntos contengan muestras representativas de todas las clases o categorías importantes.

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Validación cruzada 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/37.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La validación cruzada es una técnica que se utiliza para evaluar el rendimiento de un modelo de aprendizaje automático de manera más robusta. Consiste en dividir el #[i Dataset] en múltiples subconjuntos o "folds" y entrenar el modelo varias veces, cada vez utilizando uno de los subconjuntos como conjunto de prueba y los demás como conjunto de entrenamiento.

    .row.justify-content-center.text-center.mb-5
      .col-lg-5.my-lg-0.my-3
        .bg5.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/38.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg11.px-3.py-1                        
              h5.mb-0.text-center.fst-italic K-Fold Cross-Validation
          p.mb-0 Esta es una de las formas más comunes de validación cruzada. El #[i Dataset] se divide en "k" partes (folds) y se entrena el modelo "k" veces, cada vez utilizando un fold diferente como conjunto de prueba y los restantes como conjunto de entrenamiento. El rendimiento se promedia sobre todas las iteraciones, proporcionando una medida más precisa de la capacidad del modelo para generalizar.
      .col-lg-5.my-lg-0.my-3
        .bg5.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/39.png' alt='')
          .row.justify-content-center.mb-3
            .col-auto.bg11.px-3.py-1                        
              h5.mb-0.text-center.fst-italic Leave-One-Out Cross-Validation (LOOCV)
          p.mb-0 En este enfoque, cada observación del #[i Dataset] se utiliza una vez como conjunto de prueba, mientras que el resto se utiliza para el entrenamiento. Aunque es una técnica muy precisa, puede ser computacionalmente costosa para #[i Datasets] grandes. 

    .row.justify-content-center
      .col-lg-10
        .bg9.p-4.brad
          p.mb-0 La validación cruzada permite reducir la varianza en la estimación del rendimiento del modelo y asegurar que se está utilizando toda la información disponible en el #[i Dataset] de manera eficiente. Esto es especialmente útil cuando se trabaja con #[i Datasets] de tamaño limitado.

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Estrategias de muestreo 

    p Las estrategias de muestreo son fundamentales para garantizar que los conjuntos de entrenamiento, prueba y validación sean representativos de la población general. Algunas de las estrategias más comunes incluyen:

    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')                
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg8")
          div(titulo="Muestreo Aleatorio Simple ")
            p Cada observación tiene la misma probabilidad de ser seleccionada. Esta es la técnica más básica y es adecuada cuando el #[i Dataset] es lo suficientemente grande y no existen problemas de desequilibrio entre clases.
          div(titulo="Muestreo Estratificado ")
            p Se asegura de que la distribución de clases o categorías en los subconjuntos sea similar a la del #[i Dataset] original. Esto es especialmente importante cuando se trabaja con #[i Datasets] desbalanceados, ya que garantiza que todas las clases estén representadas adecuadamente en cada subconjunto.
          div(titulo="Muestreo con Reemplazo ")
            p En este tipo de muestreo, una observación seleccionada se devuelve al #[i Dataset] y puede ser seleccionada nuevamente. Aunque no es muy común en la segmentación de #[i Datasets] para #[i machine learning], puede ser útil en ciertos enfoques como el #[i bootstrap].                        

    p A continuación, se presenta una tabla que resume las principales estrategias de muestreo y sus características:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 4. 
          span Estrategias de muestreo

        .tabla-a.color-acento-botones.text-center
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Estrategia de Muestreo
                th Descripción
                th Ventajas
                th Desventajas

            tbody
              tr
                td Muestreo aleatorio simple
                td Cada observación tiene la misma probabilidad de ser seleccionada
                td Fácil de implementar y comprender
                td No garantiza representatividad en #[i Datasets] desbalanceados
              tr
                td Muestreo estratificado 
                td Asegura que la distribución de clases sea similar en cada subconjunto
                td Útil para #[i Datasets] desbalanceados
                td Puede ser complejo de implementar
              tr
                td Muestreo con reemplazo
                td Las observaciones seleccionadas se devuelven al #[i Dataset]
                td Útil para enfoques de #[i bootstrap]
                td Puede introducir duplicados innecesarios

    .row.justify-content-center
      .col-lg-7.my-lg-0.my-3
        p Estas estrategias permiten asegurar una correcta división del #[i Dataset] y garantizar que los modelos entrenados tengan una buena capacidad para generalizar a datos no vistos, evitando problemas de sobreajuste o subajuste.
        .bg4.brad.p-3.j1
          p.mb-0 Al concluir este capítulo, se debe resaltar que una segmentación adecuada de los datos es fundamental para evaluar correctamente el rendimiento de los modelos de #[i machine learning]. Dividir los datos de manera estratégica permite obtener una visión precisa de cómo se comportará el modelo en situaciones reales y garantiza que se está maximizando el valor del #[i Dataset] disponible. La validación cruzada y el uso adecuado de estrategias de muestreo son prácticas recomendadas para asegurar que los resultados obtenidos sean confiables y representativos del comportamiento esperado del modelo en producción.
      .col-lg-5.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/curso/temas/35.png')                                                                                 
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema3',
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
