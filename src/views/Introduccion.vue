<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-9.my-lg-0.my-3
        p La preparación y modelado de datos constituye una fase determinante en el desarrollo de soluciones de machine learning. Los mejores algoritmos pueden fallar si los datos no están adecuadamente preparados, y las decisiones tomadas durante esta fase impactan directamente en el rendimiento y la confiabilidad de los modelos resultantes.
        .row.justify-content-center.mb-4
          .col-lg-4.my-lg-0.my-3.j1
            img.img-t.img-a(src='@/assets/curso/temas/3.png')          
          .col-lg-8.my-lg-0.my-3
            .bg3.p-3.j1.mb-4
              p.mb-0 Este componente formativo aborda sistemáticamente las diferentes etapas de la preparación de datos, desde la construcción inicial de datasets hasta su preparación final para el entrenamiento de modelos. Se exploran técnicas avanzadas para el tratamiento de sesgos, estrategias efectivas de segmentación y métodos de preparación que optimizan el rendimiento de los modelos.
            p A lo largo del componente, se examinarán prácticas probadas y metodologías actuales que permiten transformar datos crudos en conjuntos de entrenamiento de alta calidad. El énfasis en la calidad de los datos y la eliminación de sesgos refleja la creciente importancia de la equidad y la responsabilidad en el desarrollo de sistemas de IA.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/curso/temas/4.png')      
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.bg2.text-white.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/5.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La combinación de fundamentos teóricos con aplicaciones prácticas proporciona las herramientas necesarias para abordar los desafíos reales en la preparación de datos para machine learning. Como dice un principio fundamental en ciencia de datos: "La calidad de un modelo nunca puede superar la calidad de los datos que lo alimentan". 

    h5.mb-5 ¡Bienvenido a este viaje por las técnicas avanzadas de preparación de datos!
    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/qas_rTn5Avs?si=tsQG5P3PJob9-wO2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
