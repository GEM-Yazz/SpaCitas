<template>
  <header
    class="c-header c-header-mobile w-100 pb-0"
    :class="{ 'c-header-mobile--visible' : switcher}">
    <div class="container">
      <nav class="c-nav w-100">
        <div class="c-nav__left w-100 d-flex justify-content-center align-items-center">
          <figure class="c-brand c-brand--normal d-flex justify-content-center align-items-center">
            <router-link class="c-brand__link" to="/">
              <img class="c-brand__image" src="@/assets/images/logo.png" alt="Panda WP - Logo" />
            </router-link>
          </figure>
        </div>
        <div class="c-nav__right">
          <ul class="c-menu d-flex ul-reset">
            <li class="menu-item">
              <a
                href="/inicio"
                class="position-relative flex-container align-middle padding-1">
                INICIO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['switcher'],
  computed: {
    ...mapState(['general']),
  },
  methods: {
    isAtiveMenuItem(item) {
      return item.slug.toLowerCase() === this.$route.name.toLowerCase();
    },
  },
};
</script>
