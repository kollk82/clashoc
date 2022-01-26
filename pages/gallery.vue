<template>
    <main class="container">
        <navbar />
        <logo />
        <section class="gall">
            <div class="gall--h">
                <h1>My work</h1>
                <arrow />
            </div>
            <div class="gall--images">
                <figure v-for="(image, i) in images" :key="i">
                    <img :src="`/assets/gallery/${image}.jpg`" />
                </figure>
            </div>
        </section>
        <foot />
    </main>
</template>

<script>
export default {
    data() {
        return {
            images: ['1', '2', '3', '4', '5'],
        };
    },
};
</script>
