<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El diagrama representa la estructura integral del componente formativo sobre preparación y modelado de datos para <i>machine learning</i>. Partiendo del concepto central de preparación y modelado, se ramifica en cuatro áreas esenciales: construcción de datasets, tratamiento de sesgos, segmentación de datos y preparación para modelos. Cada área incorpora subtemas específicos que constituyen los elementos fundamentales para una preparación efectiva de datos en contextos de IA.
    .row.justify-content-center.mb-5
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center.bg1.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Esta organización ilustra el flujo natural del proceso de preparación de datos, desde su recolección inicial hasta su optimización final para el entrenamiento de modelos. La interrelación entre las diferentes áreas muestra cómo cada etapa construye sobre la anterior, creando un proceso cohesivo que asegura la calidad y efectividad de los datos para <i>machine learning</i>.       
        .bg2.text-white.p-3.j1
          p.mb-0 El diagrama funciona como una hoja de ruta visual para comprender la estructura y alcance del componente, permitiendo al aprendiz visualizar rápidamente la progresión del aprendizaje y las conexiones entre los diferentes temas. Se sugiere utilizarlo como referencia para organizar el estudio y comprender la integración de los diversos aspectos de la preparación de datos para <i>machine learning</i>. 

      .col-lg-4.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/curso/temas/2.png')          

    .row.justify-content-center
      .col-lg-10.mb-5
        .bgs.p-4.brad     
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
