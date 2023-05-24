(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r=[];function o(t){return c.p+"js/"+({category:"category",error404:"error404",example:"example",home:"home",single:"single",image:"image"}[t]||t)+"."+{category:"c9acd2ac",error404:"201efecc",example:"2562d722",home:"42b07440",single:"ddfb00e1",image:"473fce4b"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var l=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/wp-content/themes/pandawp/app/static/public/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2fb4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("5530"),i=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("99af"),a("d3b7"),a("2b0e")),r=a("5f5b"),o=a("5ea9"),c=a("1dce"),s=a.n(c),l=a("f5af"),u=a.n(l),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Header"),a("HeaderMobile",{attrs:{switcher:t.isActiveMenu}}),a("Toggle",{attrs:{switcher:t.isActiveMenu},on:{"update:switcher":function(e){t.isActiveMenu=e}}}),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("keep-alive",[a("router-view")],1)],1),a("Footer")],1)},f=[],m=a("2f62"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"c-header w-100"},[n("div",{staticClass:"container position-relative"},[n("nav",{staticClass:"c-nav w-100"},[n("div",{staticClass:"c-nav__left d-flex justify-content-center align-items-center"},[n("figure",{staticClass:"c-brand c-brand--normal d-flex justify-content-center align-items-center\n         mt-2"},[n("router-link",{staticClass:"c-brand__link",attrs:{to:"/inicio"}},[n("img",{staticClass:"c-brand__image",attrs:{src:a("8052"),alt:"Caricia - Logo"}})])],1)]),n("div",{staticClass:"c-nav__right"},[n("ul",{staticClass:"c-menu menu ul-reset"},[n("router-link",{staticClass:"c-brand__link2",attrs:{to:"/inicio"}},[t._v(" INICIO ")]),n("a",{staticClass:"c-brand__link2",attrs:{href:"#horario"}},[t._v(" Horario de atención ")]),n("a",{staticClass:"c-brand__link21",attrs:{href:"#about"}},[t._v(" PROMOCIONES ")]),t._l(t.general.data.primary_menu,(function(e){return n("li",{key:e.id,class:[e.class,{activate:t.isAtiveMenuItem(e)}]},[n("router-link",{staticClass:"position-relative",attrs:{to:e.url,replace:""}},[t._v(" "+t._s(e.name)+" ")])],1)}))],2)])])])])},v=[],h=(a("b0c0"),{computed:Object(n["a"])({},Object(m["c"])(["general"])),methods:{isAtiveMenuItem:function(t){return t.slug.toLowerCase()===this.$route.name.toLowerCase()}}}),g=h,b=a("2877"),_=Object(b["a"])(g,p,v,!1,null,null,null),C=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"c-header c-header-mobile w-100 pb-0",class:{"c-header-mobile--visible":t.switcher}},[n("div",{staticClass:"container"},[n("nav",{staticClass:"c-nav w-100"},[n("div",{staticClass:"c-nav__left w-100 d-flex justify-content-center align-items-center"},[n("figure",{staticClass:"c-brand c-brand--normal d-flex justify-content-center align-items-center"},[n("router-link",{staticClass:"c-brand__link",attrs:{to:"/"}},[n("img",{staticClass:"c-brand__image",attrs:{src:a("9d64"),alt:"Panda WP - Logo"}})])],1)]),t._m(0)])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-nav__right"},[a("ul",{staticClass:"c-menu d-flex ul-reset"},[a("li",{staticClass:"menu-item"},[a("a",{staticClass:"position-relative flex-container align-middle padding-1",attrs:{href:"/inicio"}},[t._v(" INICIO ")])])])])}],x={props:["switcher"],computed:Object(n["a"])({},Object(m["c"])(["general"])),methods:{isAtiveMenuItem:function(t){return t.slug.toLowerCase()===this.$route.name.toLowerCase()}}},j=x,k=Object(b["a"])(j,w,y,!1,null,null,null),O=k.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"c-toggle button-reset button position-fixed",class:{"c-toggle--active":t.switcher},on:{click:function(e){return t.updateStatusMenu()}}},[a("div",{staticClass:"c-icons-container position-absolute overflow-hidden"},[a("div",{staticClass:"c-icons"},[a("div",{staticClass:"c-icon d-flex justify-content-center align-items-center"},[a("span",[a("Icon",{staticClass:"fs-30",attrs:{icon:"dashicons:menu"}})],1)]),a("div",{staticClass:"c-icon d-flex justify-content-center align-items-center"},[a("span",[a("Icon",{staticClass:"fs-30",attrs:{icon:"eva:close-fill"}})],1)])])])])},M=[],P={props:["switcher"],methods:{updateStatusMenu:function(){this.$emit("update:switcher",!this.switcher)}},components:{Icon:o["a"]}},E=P,S=Object(b["a"])(E,I,M,!1,null,null,null),L=S.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"c-footer",attrs:{id:"horario"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row gy-3"},[a("div",{staticClass:"col-lg-3 col-md-6 d-flex"},[a("Icon",{staticClass:"footer-icon",attrs:{icon:"material-symbols:nest-clock-farsight-analog-outline"}}),t._m(0)],1),a("div",{staticClass:"col-lg-3 col-md-6 footer-links d-flex"},[a("Icon",{staticClass:"footer-icon",attrs:{icon:"streamline:travel-map-navigation-map-maps-gps"}}),t._m(1)],1),a("div",{staticClass:"col-lg-3 col-md-6 footer-links d-flex"},[a("Icon",{staticClass:"footer-icon",attrs:{icon:"streamline:interface-favorite-like-1-reward-social-up-rating-media-like-thumb-hand"}}),a("div",[a("h4",[t._v("Siguenos!")]),a("br"),a("div",{staticClass:"d-flex"},[a("a",{staticClass:"c-social-media c-social-media--facebook",attrs:{href:"https://www.facebook.com/CariciaSpaAca/",target:"_blank"}},[a("Icon",{attrs:{icon:"ic:baseline-facebook"}})],1),a("a",{staticClass:"c-social-media c-social-media--instagram",attrs:{href:"https://www.instagram.com/cariciaspaaca/?fbclid=IwAR2IUd13pjv2kqrI67D19bqam2tigLTMLHTtV9ojEr2652_-5sdG3c3FlqM",target:"_blank"}},[a("Icon",{attrs:{icon:"mdi:instagram"}})],1)])])],1),a("div",{staticClass:"col-lg-3 col-md-6 footer-links"},[a("h4",[t._v("Contactanos")]),a("p",[a("Icon",{staticClass:"c-contacto c-contacto--telefono",attrs:{icon:"ic:baseline-phone"}}),a("strong",[t._v("Teléfono:")]),t._v(" 744-383-3734"),a("br"),a("Icon",{staticClass:"c-contacto c-contacto--email",attrs:{icon:"ic:baseline-email"}}),a("strong",[t._v("Email:")]),t._v(" cariciaspa.aca@gmail.com"),a("br")],1)])])]),a("div",{staticClass:"container"},[a("hr"),a("div",{staticClass:"c-footer-block__año"},[t._v("© "+t._s(t.year)+" All Rights Reserved")])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Horario")]),a("strong",[t._v("Martes - Domingo: 11AM")]),t._v(" - 7PM"),a("br"),t._v(" Lunes: Cerrado ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Dirección")]),a("p",[t._v(" 📍 Sursal: Plaza Las Pérgolas"),a("br"),t._v(" Escénica 1a, Las Brisas. 39580 ")]),a("p",[t._v(" 📍 Sucursal Centro: "),a("br"),t._v(" Baja California #42, piso 3, "),a("br"),t._v(" local P. ")])])}],T={data:function(){return{year:(new Date).getFullYear()}}},D=T,H=Object(b["a"])(D,$,A,!1,null,null,null),G=H.exports,F={data:function(){return{isActiveMenu:!1}},components:{Header:C,HeaderMobile:O,Toggle:L,Footer:G},created:function(){this.getGeneralData()},methods:Object(n["a"])({},Object(m["b"])(["getGeneralData"]))},N=F,q=Object(b["a"])(N,d,f,!1,null,null,null),R=q.exports,B=(a("3ca3"),a("ddb0"),a("8c4f"));i["default"].use(B["a"]);var W=[{path:"/",name:"Formulario",component:function(){return a.e("home").then(a.bind(null,"8ba6"))}},{path:"/example",name:"Example",component:function(){return a.e("example").then(a.bind(null,"f3c2"))},meta:{title:"Example"}},{path:"/category/:category_slug",name:"Category",component:function(){return a.e("category").then(a.bind(null,"8171"))}},{path:"/single/:single_slug",name:"Single",component:function(){return a.e("single").then(a.bind(null,"9755"))}},{path:"/inicio",name:"Inicio",component:function(){return a.e("example").then(a.bind(null,"b53f"))}},{path:"/servicio1",name:"Servicio1",component:function(){return a.e("example").then(a.bind(null,"42ac"))}},{path:"/servicio2",name:"Servicio1",component:function(){return a.e("example").then(a.bind(null,"2ae4"))}},{path:"/servicio3",name:"Servicio3",component:function(){return a.e("example").then(a.bind(null,"b728"))}},{path:"/servicio4",name:"Servicio4",component:function(){return a.e("example").then(a.bind(null,"123b"))}},{path:"*",component:function(){return a.e("error404").then(a.bind(null,"8cdb"))},name:"404"}],J=new B["a"]({scrollBehavior:function(){return{x:0,y:0}},mode:"history",base:"/",routes:W});J.afterEach((function(t){i["default"].nextTick((function(){document.title=t.meta.title?"".concat(t.meta.title," - ").concat("Panda WP"):"".concat("Panda WP")}))}));var z=J;i["default"].use(m["a"]);var U=new m["a"].Store({state:{general:{data:{},isLoading:!0}},mutations:{updateGeneralData:function(t,e){t.general=e}},actions:{getGeneralData:function(t){var e=t.commit,a="".concat("http://pandawp.site/wp-json/custom/v1","/pages/general/?type=general");fetch(a).then((function(t){if(201===t.status||t.status<300)return t.json();throw t})).then((function(t){t.status&&e("updateGeneralData",{data:t.data,isLoading:!1})})).catch((function(t){throw t}))}},modules:{}});a("7b17"),a("2fb4");u.a.init(),i["default"].config.productionTip=!1,i["default"].mixin({methods:{getFullContext:function(t){var e=this,a="".concat("http://pandawp.site/wp-json/custom/v1","/pages/").concat(t.slug,"/?type=").concat(t.type);t.typeName&&(a+="&type-name=".concat(t.typeName)),t.parent&&(a+="&parent=".concat(t.parent)),fetch(a).then((function(t){if(201===t.status||t.status<300)return t.json();throw t})).then((function(t){t.status?(e.context=Object(n["a"])(Object(n["a"])({},e.context),t.data),e.contextLoading=!1):e.$bvToast.toast("Página no encontrada",{title:"Error 404",variant:"danger",toaster:"b-toaster-bottom-left",autoHideDelay:5e3})})).catch((function(t){throw t}))}}}),i["default"].use(r["a"]),i["default"].use(s.a),i["default"].component("Icon",o["a"]),new i["default"]({router:z,store:U,render:function(t){return t(R)}}).$mount("#app")},8052:function(t,e,a){t.exports=a.p+"img/CariciaLogoGray.a23eba3c.png"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.64d03e1b.png"}});
//# sourceMappingURL=app.91bcd261.js.map