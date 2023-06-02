<template>
  <section class="c-section">
    <div class="container py-5">
      <h1 class="c-section__title mb-3 text-center">
        ¡Gracias por su reserva, la esperamos!
      </h1>
      <h5 class="c-section__title mb-3 text-center">
        Si agrego su e-mail, le llegara un correo de confirmacion.
      </h5>
      </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellidos: '',
      telefono: '',
      sucursal: '',
      email: '',
      hora: '',
      serviceTitle: '',

      price: '',

      fecha: new Date(),
      hours: [],
      disable_dates: [],
    };
  },
  watch: {
    date(value) {
      this.getHoursByDay(value);
    },
    $route() {
      this.cargarServicio1();
      this.cargarServicio3();
      this.cargarServicio2();
      this.cargarServicio4();
      this.sucursal = this.$route.query.sucursal;
    },
  },

  mounted() {
    this.cargarServicio1();
    this.cargarServicio3();
    this.cargarServicio2();
    this.cargarServicio4();

    this.sucursal = this.$route.sucursal;
  },
  methods: {
    cargarServicio3() {
      if (this.$route.query.servi === 'manicureruso') {
        this.serviceTitle = 'Manicure Ruso';
        this.price = '$170 MXN';
      } else if (this.$route.query.servi === 'manicurebiojelly') {
        this.serviceTitle = 'Manicure Biojelly';
        this.price = '$300 MXN';
      } else if (this.$route.query.servi === 'manicurespa') {
        this.serviceTitle = 'Manicure Spa';
        this.price = '$300 MXN';
      } else if (this.$route.query.servi === 'pedicureruso') {
        this.serviceTitle = 'Pedicure Ruso';
        this.price = '$200 MXN';
      } else if (this.$route.query.servi === 'pedicurebiojelly') {
        this.serviceTitle = 'Pedicure Biojelly';
        this.price = '$300 MXN';
      } else if (this.$route.query.servi === 'unasesculturales') {
        this.serviceTitle = 'Uñas esculturales';
        this.price = '$400 MXN';
      } else if (this.$route.query.servi === 'unasacrilicas') {
        this.serviceTitle = 'Uñas acrilicas';
        this.price = '$350 MXN';
      } else if (this.$route.query.servi === 'bañoacrilico') {
        this.serviceTitle = 'Baño acrilico';
        this.price = '$200 MXN';
      } else if (this.$route.query.servi === 'aplicaciondegelish') {
        this.serviceTitle = 'Aplicación de gelish';
        this.price = '$150 MXN';
      } else if (this.$route.query.servi === 'reparacionuñas') {
        this.serviceTitle = 'Reparación de uña';
        this.price = '$100 MXN';
      }
    },

    cargarServicio1() {
      if (this.$route.query.servi === 'masajereductivo') {
        this.serviceTitle = 'Masaje reductivo';
        this.price = '$750 MXN';
      } else if (this.$route.query.servi === 'lipopapadasincirugia') {
        this.serviceTitle = 'Lipopapada sin cirugía';
        this.price = '$500 MXN';
      } else if (this.$route.query.servi === 'gimnasiapasiva') {
        this.serviceTitle = 'Gimnasia pasiva';
        this.price = '$300 MXN';
      } else if (this.$route.query.servi === 'cavitacionoradiofrecuencia') {
        this.serviceTitle = 'Cavitación o radiofrecuencia';
        this.price = '$300 MXN';
      } else if (this.$route.query.servi === 'presoterapia') {
        this.serviceTitle = 'Presoterapia';
        this.price = '$350 MXN';
      } else if (this.$route.query.servi === 'masajerelajante') {
        this.serviceTitle = 'Masaje relajante';
        this.price = '$800 MXN';
      }
    },

    cargarServicio2() {
      if (this.$route.query.servi === 'limpiezaprofunda') {
        this.serviceTitle = 'Limpieza Profunda';
        this.price = '$450 MXN';
      } else if (this.$route.query.servi === 'despigmentante') {
        this.serviceTitle = 'Despigmentante';
        this.price = '$500 MXN';
      } else if (this.$route.query.servi === 'revitalizante') {
        this.serviceTitle = 'Revitalizante';
        this.price = '$450 MXN';
      } else if (this.$route.query.servi === 'rejuvenecedor') {
        this.serviceTitle = 'Rejuvenecedor';
        this.price = '$450 MXN';
      }
    },

    cargarServicio4() {
      if (this.$route.query.servi === 'peclasica') {
        this.serviceTitle = 'Pestañas Clásicas';
        this.price = '';
      } else if (this.$route.query.servi === 'pehibrida') {
        this.serviceTitle = 'Pestañas Híbridas';
        this.price = '';
      } else if (this.$route.query.servi === 'pevolumen') {
        this.serviceTitle = 'Pestañas Volumen';
        this.price = '';
      } else if (this.$route.query.servi === 'pehawaiano') {
        this.serviceTitle = 'Pestañas Hawaiano';
        this.price = '';
      }
    },
  },
};
</script>
