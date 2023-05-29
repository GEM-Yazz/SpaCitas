<template>
  <section class="wrap">
    <h2 class="mb-1">{{title}}</h2>
    <button @click="auth">conectar con google calendar</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      context: {...panda},
      metas: new URLSearchParams(window.location.search),

      title: 'Agregar calendario',
    };
  },
  mounted() {
    if (this.metas.get('code')) {
      this.storeToken(this.metas.get('code'));
    }
  },
  methods: {
    auth() {
      fetch(`${this.context.api}/citas/auth`, {
        method: 'GET',
      })

        .then((res) => res.json())
        .then((response) => {
          window.location.href = response.data.data;
        });
    },
    storeToken(code) {
      const formData = new FormData();

      formData.append('code', code);

      fetch(`${this.context.api}/citas/auth/token`, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status) {
            alert('Token guardado exitosamente')
          }
        });
    },
  }
};
</script>
