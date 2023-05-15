<template>
    <div class="container">

      <section class="py-5 h-100 text-center">
        <h1 data-aos="zoom-in" class="w-bold">
            Lashes
        </h1>
      </section>

      <div class="container mb-5">
        <div class="row d-flex justify-content-around">
    <div class="servic col-sm-4">
      <img src="@/assets/images/LashesClass.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Clásica</h3>
      <p></p>
          <hr class="hr-serv" size="4">
        <p class="c-servicio__pyt">$550</p>
        <router-link type="button" class="c-button--servicios"
          to="/?servi=peclasica">Reservar ahora</router-link>
    </div>

    <div class="servic col-sm-4">
      <img src="@/assets/images/LashesHibr.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Híbrida</h3>
      <p></p>
         <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt">$650</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=pehibrida">Reservar ahora</router-link>
    </div>
  </div>
</div>

<div class="container mb-4">
        <div class="row d-flex justify-content-around">

  <div class="servic col-sm-4">
      <img src="@/assets/images/LashesVol.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Volumen</h3>
         <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> $800</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=pevolumen">Reservar ahora</router-link>
    </div>

    <div class="servic col-sm-4">
      <img src="@/assets/images/Lashes.png" class="c-servicio-imagen rounded-circle mb-4
       mx-auto d-block" alt="Masaje reductivo">
      <h3 class="c-servicio__titulo">Hawaiano</h3>
         <hr class="hr-serv" size="4">
      <p class="c-servicio__pyt"> 1hr – $450</p>
      <router-link type="button" class="c-button--servicios"
          to="/?servi=pehawaiano">Reservar ahora</router-link>
    </div>
  </div>
</div>

    </div>
  </template>
