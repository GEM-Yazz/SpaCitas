<template>
  <section class="c-section c-section--home">
    <div class="container">

 <section class="py-5 h-100 text-center">
        <h1 data-aos="zoom-in" class="titulo w-bold">
          {{ serviceTitle }}
        </h1>
      </section>

      <section id="menu" class="menu">
        <div class="container" data-aos="fade-up">

            <!-- ======= Menu Section ======= -->
            <ul class="nav nav-tabs d-flex justify-content-center"
        data-aos="fade-up" data-aos-delay="200">

          <li class="nav-item">
            <a class="nav-link active show"
            data-bs-toggle="tab" data-bs-target="#paso1">
              <h4>Paso 1</h4>
            </a>
          </li><!-- End tab nav item -->

          <li class="nav-item">
            <a class="nav-link"
            data-bs-toggle="tab" data-bs-target="#paso2">
              <h4> Paso 2 </h4>
            </a>
          </li><!-- End tab nav item -->
        </ul>   <!-- =======END Menu Section ======= -->

        <div class="tab-content">

         <!-- Inicio Paso1 Menu Content -->
         <div class="tab-pane fade active show" id="paso1">
            <div class="tab-header text-center">
              <h3 class="mt-4 mb-4">Fecha y sucursal</h3>
              <h3></h3>
            </div>
            <div class="calendarsuc row">

              <form>
                <div class="custom-select" >
                <h5> Sucursal: </h5>
             <select style="width: 40%; padding: 5px 20px; margin: 6px 0;"
               v-model="sucursal" v-model.trim="$v.sucursal.$model">
              <option disabled> Elija una sucursal </option>
              <option value="PlazaLasPergolas">
                 Plaza Las Pérgolas </option>
              <option value="SucursalCentro">
                 Sucursal Centro </option>
              </select>
              <hr style="margin-right: 90px;">
          </div><!-- Menu Item -->
            </form>

<!--===CALENDARIO Inicio===-->
    <div class="">
      <h5> Selecciona una fecha:</h5>

  {{fecha.toLocaleDateString
    ('es-ES', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}}
    <br><br>

  <p class="row mb-7">
    <vc-date-picker :min-date='new Date()' :disabled-dates='{ weekdays: [2] }'
    color="pink" class="calndar col-3" trim-weeks v-model="fecha"
      @dayclick="$event => getHoursByDay()"/>

      <ul class="row col">
        <p class="col-6"
          v-for="(item, indice) of hours"
          :key="`hora${indice}`" >
          <button @click="saveHour(item.hora)"
          class="hourbutton col-8"> {{ item.hora }}</button>
        </p>
    </ul>
    </p>
    </div><!-- Menu Item -->
<!--===CALENDARIO FIN===-->

            </div>
          </div><!-- End Paso1 Menu Content -->

          <div class="tab-pane fade" id="paso2">
            <div class="tab-header text-center">
              <h3 class="mt-4 mb-4">Tu información</h3>
              <h4 class="mt-4 mb-4">revise que sus datos sean correctos</h4>
            </div>

              <div class="row d-flex justify-content-center mt-4 mb-2 text-center">
              <div style="font-weight: bold;" class="col-lg-2 menu-item">
                Fecha:
                <div style="font-weight: normal;" >
                {{fecha.toLocaleDateString
                ('es-ES', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}}
                </div>
              </div><!-- Menu Item -->
              <div style="font-weight: bold;" class="col-lg-2 menu-item ">
                Hora:
                <div style="font-weight: normal;" > {{ hora }}</div>
              </div><!-- Menu Item -->
              <div style="font-weight: bold;" class="col-lg-2 menu-item">
               Sucursal:
               <div style="font-weight: normal;" > {{ sucursal }}</div>
              </div><!-- Menu Item -->
            </div>
            <hr>

          <!-- PASO 2 FORMULARIO -->
            <form @submit.prevent="submit()" class="container row gy-3"
            :class="{'c-form-group--error': $v.sucursal.$error }">
            <div class="col-lg-4 menu-item" :class="{ 'c-form-group--error': $v.nombre.$error }">
              *Nombre: <br>
              <input style="width: 100%; padding: 5px 20px; margin: 6px 0;"
               v-model="nombre" type="text" placeholder="Nombre" v-model.trim="$v.nombre.$model" />
            <span class="c-form-group__error" v-if="!$v.nombre.required">El nombre está vacío</span>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item"
              :class="{ 'c-form-group--error': $v.apellidos.$error }">
                *Apellidos: <br>
          <input style="width: 100%; padding: 5px 20px; margin: 6px 0;"
           v-model="apellidos" type="text" placeholder="Apellidos"
           v-model.trim="$v.apellidos.$model" />
      <span class="c-form-group__error" v-if="!$v.apellidos.required">El apellido está vacío</span>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item"
               :class="{ 'c-form-group--error': $v.telefono.$error }">
                *Teléfono: <br>
          <input style="width: 100%; padding: 5px 20px; margin: 6px 0;"
           v-model="telefono" type="number" placeholder="Teléfono"
           v-model.trim="$v.telefono.$model" />
     <span class="c-form-group__error" v-if="!$v.telefono.required">El teléfono está vacío</span>
              </div><!-- Menu Item -->
      <br>
              <div class="col-lg-4 menu-item">
                Correo Electronico [Opcional]: <br>
          <input style="width: 100%; padding: 5px 20px; margin: 6px 0;"
           v-model="email" type="email" placeholder="E-mail"/>
              </div><!-- Menu Item -->
      <span class="text-center c-form-group__error"
       v-if="!$v.sucursal.required">La sucursal está vacía</span>
            <hr>

              <div class="col-lg-2 menu-item">
              <div style="font-weight: bold;">
               Precio base:
              </div>
              </div><!-- Menu Item -->

              <div class="mb-6 col-lg-9 menu-item">
                <div style="font-weight: bold;">
                 {{ price }}
              </div>
              </div><!-- Menu Item -->

                 <hr>

              <div class="mb-6 col-lg-2 menu-item">
                <div style="font-weight: bold;" class="mb-4">
                Total:
              </div>
              </div><!-- Menu Item -->

              <div class="mb-6 col-lg-9 menu-item">
                <div style="font-weight: bold;">
                 {{ price }}
              </div>
              </div><!-- Menu Item -->

              <div class="row container d-flex justify-content-center">
              <div class="mb-4 col-lg-2 menu-item ">
                  <router-link class="c-button--cancel" to="/inicio"> Cancelar</router-link>
              </div><!-- Menu Item -->

              <div class="mb-4 col-lg-2 menu-item ">
                <button
                  :disabled="isSending"
                  class="c-button--accept"
                  @click="$event => guardar()">
                  {{ (isSending) ? 'Reservando, Espere un momento :)' : 'Reservar' }}
                </button>
              </div><!-- Menu Item -->
            </div>

          </form>
            </div>
        </div>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import VCalendar from 'v-calendar';
import Vue from 'vue';

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

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
      isSending: false,
    };
  },

  validations: {
    nombre: {
      required,
    },
    apellidos: {
      required,
    },
    telefono: {
      required,
    },
    sucursal: {
      required,
    },
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
    // guardar() {
    //   const form = new FormData();
    //   form.append('nombre', this.nombre);
    //   form.append('apellidos', this.apellidos);
    //   form.append('telefono', this.telefono);
    //   form.append('servicio', this.serviceTitle);
    //   form.append('sucursal', this.sucursal);
    //   form.append('email', this.email);
    //   form.append('reserva', this.fecha.toLocaleDateString('sv'));
    //   form.append('hora', this.hora);

    //   fetch(`${process.env.VUE_APP_API}/citas`, {
    //     method: 'POST',
    //     body: form,
    //   })

    //     .then((res) => res.json())
    //     .then((response) => {
    //       console.log(response);
    //     });
    // },

    submit() {
      this.$v.$touch();
      this.isSending = true;
      if (!this.$v.$invalid) {
        const form = new FormData();
        form.append('nombre', this.nombre);
        form.append('apellidos', this.apellidos);
        form.append('telefono', this.telefono);
        form.append('servicio', this.serviceTitle);
        form.append('sucursal', this.sucursal);
        form.append('email', this.email);
        form.append('reserva', this.fecha.toLocaleDateString('sv'));
        form.append('hora', this.hora);

        fetch(`${process.env.VUE_APP_API}/citas`, {
          method: 'POST',
          body: form,
        })

          .then((res) => res.json())
          .then((response) => {
            this.isSending = false;
            if (response.status) {
              alert('Reservado con exito! Gracias, la esperamos <3');
              alert('Si quiere cancelar su cita, contacte al número #######');
            }
          });
        // window.location.href = '/confirmacion';
      } else {
        alert('Porfavor llene los espacios');
      }
    },

    getHoursByDay() {
      const day = this.fecha.toLocaleDateString('en', { weekday: 'long' }).toLowerCase();
      console.log(this.fecha.toLocaleDateString('sv'));
      const service = this.$route.query.servi;
      fetch(`${process.env.VUE_APP_API}/citas/hours?day=${day}&services=${service}&day_date=${this.fecha.toLocaleDateString('sv')}`, {
        method: 'GET',
      })

        .then((res) => res.json())
        .then((response) => {
          this.hours = response.data;
        });
    },
    saveHour(hora) {
      this.hora = hora;
    },

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
