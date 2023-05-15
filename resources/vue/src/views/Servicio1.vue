<template>
    <div class="container">

      <section class="py-5 h-100 text-center">
        <h1 data-aos="zoom-in" class="w-bold">
            Tratamientos con aparatología estética
        </h1>
      </section>

      <div class="c-servicio container d-flex dxxjustify-content-around mb-3">
       <div class="row">
    <div class="col-sm-4">
      <img src="@/assets/images/Masaje-reductivo.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Masaje reductivo</h3>
      <p> Toma de medidas, masaje, cavitación, radiofrecuencia,
        vacumterapia, gimnasia pasiva, maderoterapia. </p>
        <p> Hasta 2 zonas</p>
        <hr class="hr-serv" size="4">
        <p class="c-servicio__pyt">1hr – $750</p>
        <router-link type="button" class="c-button--servicios"
          to="/?servi=masajereductivo">Reservar ahora</router-link>
    </div>

    <div class="col-sm-4">
      <img src="@/assets/images/LipoPapada.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Lipopapada sin cirugía</h3>
      <p>Limpieza superficial, suero regenerador, masaje con rodillo y piedra de jade  ,
        yoga facial, radiofrecuencia, sérum revitalizante, hidratación con ácido hialurónico
      </p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 45min – $500</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=lipopapadasincirugia">Reservar ahora</router-link>
    </div>

    <div class="col-sm-4">
      <img src="@/assets/images/Masaje-reductivo.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Gimnasia pasiva</h3>
      <p>Estimulación eléctrica de grupos musculares para tonificar,
        dar elasticidad y endurecer el músculo por contracciones isométricas.</p>
        <hr class="hr-serv" size="4">
       <p class="c-servicio__pyt"> 40min – $300</p>
       <router-link type="button" class="c-button--servicios"
          to="/?servi=gimnasiapasiva">Reservar ahora</router-link>
    </div>
</div>
</div>

    <!-- parte de abajo -->
<div class="container pt-4 d-flex justify-content-around mb-3">
  <div class="row">
    <div class="col-sm-4">
      <img src="@/assets/images/Cavit-radiofr.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Cavitación o radiofrecuencia</h3>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 40min – $300</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=cavitacionoradiofrecuencia">Reservar ahora</router-link>
    </div>

    <div class="col-sm-4">
      <img src="@/assets/images/Masaje-reductivo.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Presoterapia</h3>
      <p>Medias de compresión en piernas completas</p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 30min – $350</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=presoterapia">Reservar ahora</router-link>
    </div>

    <div class="col-sm-4">
      <img src="@/assets/images/MasajRelaj.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Masaje relajante</h3>
      <p>Terapia manual y presoterapia</p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt">1 hora – $800 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=masajerelajante">Reservar ahora</router-link>
    </div>
</div>
</div>

</div>

  </template>
