import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
    css: ['assets/css/main.css', 'assets/css/fontawesome.css'],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webp|mp4)$/,
                loader: 'url-loader',
                query: {
                    limit: 3000, // 1kB
                    name: 'img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 3000, // 1kB
                    name: 'fonts/[name].[hash:7].[ext]',
                },
            },
        ],
    },
});
