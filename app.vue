<template>
    <div>
        <Head>
            <Title>ClashOfCars</Title>
            <Meta
                name="description"
                :content="'Car reviews, news and pictures, blog'"
            />
        </Head>
        <NuxtPage />
    </div>
</template>

<script>
export default {
    setup() {
        useMeta({
            meta: [
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, maximum-scale= 2, user-scalable=yes'
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
            ],
            htmlAttrs: {
                lang: 'en-IE',
            },
        });
    },
};
</script>
