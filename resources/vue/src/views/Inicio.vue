<template>
  <section>

   <!--CARRUSEL INICIO-->
    <div class="container-FLUID mb-4 pb-4">
   <div class="c-carousel">
      <div class="swiper micarousel">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="c-carousel-slide c-carousel-slide--inc1">
              <h2 style="font-size: 5vw;" >Bienvenida</h2>
              <p style="font-size: 17px;" class = "mt-2 text">¡Agenda ya tu cita!</p>
              <a href="#about" class="mt-3 c-button c-button--servicios">
                Ver mas
              </a> </div>
          </div>

          <div class="swiper-slide">
            <div class="c-carousel-slide c-carousel-slide--inc2">
              <h2 style="font-size: 5vw;" >Bienvenida</h2>
              <p style="font-size: 17px;" class = "mt-2 text">#TeLoMereces</p>
              <a href="#about" class="mt-3 c-button c-button--servicios">
                Ver mas
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>   <!--CARRUSEL FINAL-->

  <section class="text-center">
  <h1 data-aos="zoom-in" class="w-bold mb-5">
   Nuestros servicios </h1>

  <!--CARRUSEL SERVICIOS INICIO-->
<div class="container mb-5">
  <div class="c-carousel">
    <div class="swiper micarousel2">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
            <div class="c-carousel-slide2 c-carousel-slide2--ims1">
              </div>
              <br>
              <h3> Tratamientos con aparatología estética </h3>
              <router-link class="mt-3 c-button c-button--servicios" to="/servicio1">
                Ver mas
                 </router-link>
            </div>

            <div class="swiper-slide">
              <div class="c-carousel-slide2 c-carousel-slide2--ims2">
              </div>
              <br>
              <h3> Tratamientos spa</h3>
                <router-link class="mt-3 c-button c-button--servicios" to="/Servicio3">
                Ver mas
                 </router-link>
            </div>

            <div class="swiper-slide">
              <div class="c-carousel-slide2 c-carousel-slide2--ims3">
              </div>
              <br>
              <h3> Tratamientos faciales</h3>
                <router-link class="mt-3 c-button c-button--servicios" to="/servicio2">
                Ver mas
                 </router-link>
            </div>

            <div class="swiper-slide">
              <div class="c-carousel-slide2 c-carousel-slide2--ims4">
              </div>
              <br>
              <h3> Lashes </h3>
                <router-link class="mt-3 c-button c-button--servicios" to="/servicio4">
                Ver mas
                 </router-link>
            </div>
          </div>
          <!--FLECHAS-->
          <div class="swiper-button-next">
            <Icon icon="material-symbols:arrow-forward-ios" />
          </div>
          <div class="swiper-button-prev">
            <Icon icon="material-symbols:arrow-back-ios-new" />
          </div>
      </div>
    </div>
    </div>   <!-- === CARRUSEL FINAL ======= -->

  <hr id="about" size="4" style="margin-left: 8%" width="85%" class="mb-5">
  </section>

   <!-- ======= About Section ======= -->
   <section class="about mb-5">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2 class="w-bold mb-4">Nuestras promociones</h2>
        </div>

        <div>
       <div data-aos="fade-up" data-aos-delay="200">
          <img class="prom" src="@/assets/images/Caricia-4.jpeg"
          alt="Masaje reductivo">
        </div>
        </div>

      </div>
    </section>
    <!-- End About Section -->

   <!-- =======Galeria ======= -->
   <section class="about mb-5">
    <hr size="4" style="margin-left: 8%" width="85%" class="mb-5">
      <div class="container " data-aos="fade-up">

           <div class="section-header">
          <h2 class="w-bold mb-4">Galería</h2>
        </div>
      </div>

   <!-- ======= Carousel galeria ======= -->
   <div class="container col-lg-7">
    <div class="c-carousel">
      <div class="swiper mySwiper31">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims1">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims2">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims3">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims4">
      </div> </div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims5">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims7">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims8">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims10">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide31 c-carousel-slide31--ims9">
      </div></div>
    </div>
    <div class="swiper-button-next">
            <Icon style="font-size: 30px;" icon="material-symbols:arrow-forward-ios"/>
          </div>
          <div class="swiper-button-prev">
            <Icon style="font-size: 30px;" icon="material-symbols:arrow-back-ios-new" />
          </div>
  </div> <br>
  <div thumbsSlider="" class="swiper mySwiper3">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims1">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims2">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims3">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims4">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims5">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims7">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims8">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims10">
      </div></div>
      <div class="swiper-slide">
        <div class="c-carousel-slide3 c-carousel-slide31--ims9">
      </div></div>
    </div>
  </div>
</div>
</div>
      <!-- ======= Carousel galeria ======= -->

  </section>
   <!-- =======Galeria ======= -->

</section>
</template>

<!--------===========------->
<script>
import {
  Swiper, Navigation, Autoplay, Thumbs,
} from 'swiper';

export default {
  data() {
    return {
      carousel: null,
      carousel2: null,
      carousel3: null,
      carousel31: null,

      slide: 0,
      sliding: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.carousel = new Swiper('.micarousel', {
        modules: [Autoplay],

        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });

      // ===CARROUSEL!===
      this.carousel3 = new Swiper('.mySwiper3', {
        modules: [Autoplay, Thumbs],
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      this.carousel31 = new Swiper('.mySwiper31', {
        modules: [Navigation, Thumbs],
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: this.carousel3,
        },
      });

      this.carousel2 = new Swiper('.micarousel2', {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
        },
      });
    }, 100);
  },

  methods: {
    guardar() {
      const form = new FormData();

      fetch('http://citas.site/wp-json/custom/v1/citas', {
        method: 'POST',
        body: form,
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
        });
    },

    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
