import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "home" */ '../views/Formulario.vue'),
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue'),
    meta: {
      title: 'Example',
    },
  },
  {
    path: '/category/:category_slug',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/example/Category.vue'),
  },
  {
    path: '/single/:single_slug',
    name: 'Single',
    component: () => import(/* webpackChunkName: "single" */ '../views/example/Single.vue'),
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "example" */ '../views/Inicio.vue'),
  },
  {
    path: '/servicio1',
    name: 'Servicio1',
    component: () => import(/* webpackChunkName: "example" */ '../views/Servicio1.vue'),
  },
  {
    path: '/servicio2',
    name: 'Servicio1',
    component: () => import(/* webpackChunkName: "example" */ '../views/Servicio2.vue'),
  },
  {
    path: '/servicio3',
    name: 'Servicio3',
    component: () => import(/* webpackChunkName: "example" */ '../views/Servicio3.vue'),
  },
  {
    path: '/servicio4',
    name: 'Servicio4',
    component: () => import(/* webpackChunkName: "example" */ '../views/Servicio4.vue'),
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "error404" */'../views/404.vue'),
    name: '404',
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: '/',
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = (to.meta.title) ? `${to.meta.title} - ${process.env.VUE_APP_TITLE}` : `${process.env.VUE_APP_TITLE}`;
  });
});

export default router;
