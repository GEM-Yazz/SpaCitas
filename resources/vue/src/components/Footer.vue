<template>
  <footer id="horario" class="c-footer">

    <div class="container">
      <div class="row gy-3">

        <div class="col-lg-3 col-md-6 d-flex">
            <Icon class="footer-icon" icon="material-symbols:nest-clock-farsight-analog-outline"/>
          <div>
            <h4>Horario</h4>
            <strong>Martes - Domingo: 11AM</strong> - 7PM<br>
              Lunes: Cerrado
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
            <Icon class="footer-icon" icon="streamline:travel-map-navigation-map-maps-gps"/>
          <div>
            <h4>Dirección</h4>
              <p>
                📍 Sucursal: Plaza Las Pérgolas<br> Escénica 1a, Las Brisas.
                  39580
                </p>
                  <p>
                 📍 Sucursal Centro: <br>
                  Baja California #42, piso 3, <br>
                  local P.
                  </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
        <Icon class="footer-icon"
        icon="streamline:interface-favorite-like-1-reward-social-up-rating-media-like-thumb-hand"/>
          <div>
            <h4>Siguenos!</h4>
            <br>
            <div class="d-flex">
            <a href="https://www.facebook.com/CariciaSpaAca/" target="_blank" class="c-social-media c-social-media--facebook">
             <Icon icon="ic:baseline-facebook" />
           </a>
            <a href="https://www.instagram.com/cariciaspaaca/?fbclid=IwAR2IUd13pjv2kqrI67D19bqam2tigLTMLHTtV9ojEr2652_-5sdG3c3FlqM"
            target="_blank" class="c-social-media c-social-media--instagram">
             <Icon icon="mdi:instagram" />
           </a>
         </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Contactanos</h4>
          <p>
            <Icon icon="ic:baseline-phone" class="c-contacto c-contacto--telefono"/>
             <strong>Teléfono:</strong> 744-383-3734<br>
             <Icon icon="ic:baseline-email" class="c-contacto c-contacto--email"/>
              <strong>Email:</strong> cariciaspa.aca@gmail.com<br>
            </p>
        </div>

      </div>
    </div>

    <div class="container">
    <hr>
    <div class="c-footer-block__año">© {{ year }} All Rights Reserved</div>
    </div>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
