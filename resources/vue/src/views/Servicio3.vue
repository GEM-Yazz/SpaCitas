<template>
    <div class="container">

      <section class="py-5 h-100 text-center">
        <h1 data-aos="zoom-in" class="w-bold">
            Tratamientos spa
        </h1>
      </section>

<!---->
        <ul class="nav nav-tabs d-flex justify-content-center mb-4"
        data-aos="fade-up" data-aos-delay="200">

          <li class="nav-item">
            <a class="nav-link active show" href="#manicura" >
              <h4>Manicura</h4>
            </a>
          </li><!-- End tab nav item -->

          <li class="nav-item">
            <a class="nav-link" href="#pedicura">
              <h4>Pedicura</h4>
            </a><!-- End tab nav item -->
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#uñas">
              <h4>Uñas</h4>
            </a>
          </li><!-- End tab nav item -->
        </ul>
<!---->

      <h2> Manicure</h2>
      <h4> [Solo en Plaza las Pérgolas] </h4>
      <div id="manicura" class="container pt-4">
        <div class="row">
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3>Manicure Ruso</h3>
      <p>Corte de uñas, retiro de cutícula, loción hidratante
        y terminación en gelish a un tono. </p>
        <hr class="hr-serv" size="4">
        <p class="c-servicio__pyt">30min – $170 MXN</p>
         <router-link type="button" class="c-button--servicios"
          to="/?servi=manicureruso&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3>Manicure Biojelly</h3>
      <p>Limpieza superficial, suero regenerador, masaje con rodillo y piedra de jade  ,
        yoga facial, radiofrecuencia, sérum revitalizante, hidratación con ácido hialurónico
      </p>
      <hr class="servic hr-serv" size="4">
      <p class="c-servicio__pyt"> 1hr – $300 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=manicurebiojelly&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3>Manicure Spa</h3>
      <p>Estimulación eléctrica de grupos musculares para tonificar,
        dar elasticidad y endurecer el músculo por contracciones isométricas.</p>
        <hr class="hr-serv" size="4">
       <p class="c-servicio__pyt"> 1hr – $300 MXN</p>
       <router-link type="button" class="c-button--servicios"
    to="/?servi=manicurespa&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
</div>
</div>
<hr>

<h2 class="titulo"> Pedicure</h2>
<h4> [Solo en Plaza las Pérgolas] </h4>
<div id="pedicura" class="container pt-4 d-flex justify-content-around">
       <div class="row">
      <div class="servic col-sm-4">
        <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3>Pedicure Ruso</h3>
      <p>Corte de uñas, retiro de cutícula, loción hidratante
        y terminación en gelish a un tono.</p>
        <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 30min – $200 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=pedicureruso&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3>Pedicure Biojelly</h3>
      <p>Exfoliante, enjuague en gelatina y pétalos de rosas, corte de uñas, retiro de cutícula,
        limado de callos, loción hidratante y terminación en gelish a un tono</p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 1hr – $300 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=pedicurebiojelly&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3>Pedicure Spa</h3>
      <p>Sales de mar, exfoliante, crema aclarante, baño con pétalos de rosas y cítricos corte
         de uñas, retiro de cutícula, loción hidratante y terminación en gelish a un tono</p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt">1hr – $350 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=pedicurespa&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
</div>
</div>
<hr>

<h4> [Solo en Plaza las Pérgolas] </h4>
<div id="uñas" class="row container-fluid pt-4 d-flex justify-content-between mb-3">
  <div class="servic col-sm-4">
    <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3> Uñas esculturales </h3>
      <p>Hasta tres tonos </p>
        <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 2hr – $400 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=unasesculturales&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
    <div class="servic col-sm-4">
      <img src="@/assets/images/uñas-acrilicas.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3> Uñas acrilicas </h3>
      <p>Hasta tres tonos</p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 1hr 30min – $350 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=unasacrilicas&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3>Baño acrilico</h3>
      <p>Hasta dos tonos.</p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt">40 min – $200 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=bañoacrilico&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
</div>
</div>
<div class="row container-fluid pt-4 d-flex justify-content-center mb-5">
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3> Aplicación de gelish </h3>
      <p>Hasta dos tonos</p>
        <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 30 min – $150 MXN</p>
      <router-link type="button" class="c-button--servicios"
          to="/?spa=aplicaciondegelish&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
    <div class="servic col-sm-4">
      <img src="@/assets/images/manicurespa.jpg" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3> Reparación de uña </h3>
      <p>Hasta dos uñas</p>
      <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 20min – $100 MXN </p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=reparacionuñas&sucursal=PlazaLasPergolas">Reservar ahora</router-link>
    </div>
</div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      servicio: '',
    };
  },
};
</script>
