import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
    css: ['assets/css/main.css', 'assets/css/fontawesome.css'],
    router: {
        scrollBehavior: function (to, from, savedPosition) {
            return { left: 0, top: 0 };
        },
    },
});
