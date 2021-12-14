<template>
    <div>
        <Head :lang="'en-GB'">
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
                        'width=device-width, initial-scale=1, maximum-scale=1',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

            htmlAttrs: {
                lang: 'en-IE',
            },
        });
    },
};
</script>
