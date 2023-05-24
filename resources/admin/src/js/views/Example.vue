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

      title: 'Example',
    };
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
    }
  }
};
</script>
