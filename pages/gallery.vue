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
                <h2 @click="showGt86 = !showGt86">Toyota GT86</h2>
                <div v-if="showGt86">
                    <figure v-for="(image, i) in images_gt86" :key="i">
                        <img
                            :src="`/gallery/gt86/${image}.jpg`"
                            :alt="`Toyota GT86 image number ${image}`"
                        />
                    </figure>
                    <a @click="showGt86 = !showGt86"><span>&#60;</span></a>
                </div>
                <h2 @click="showSls = !showSls">
                    Mercedes-Benz SLS Amg Roadster
                </h2>
                <div v-if="showSls">
                    <figure v-for="(image, i) in images_sls" :key="i">
                        <img
                            :src="`/gallery/sls/${image}.jpg`"
                            :alt="`Mercedes SLS image number ${image}`"
                        />
                    </figure>
                    <a @click="showSls = !showSls"><span>&#60;</span></a>
                </div>
                <h2 @click="showVz = !showVz">Cupra Formentor VZ</h2>
                <div v-if="showVz">
                    <figure v-for="(image, i) in images_vz" :key="i">
                        <img
                            :src="`/gallery/cupra/formentor/${image}.jpg`"
                            :alt="`Cupra Formentor VZ image number ${image}`"
                        />
                    </figure>
                    <a @click="showVz = !showVz"><span>&#60;</span></a>
                </div>
                <h2 @click="showLeon = !showLeon">Seat Leon Cupra</h2>
                <div v-if="showLeon">
                    <figure v-for="(image, i) in images_leonCupra" :key="i">
                        <img
                            :src="`/gallery/cupra/leon/${image}.jpg`"
                            :alt="`Seat Leon Cupra image number ${image}`"
                        />
                    </figure>
                    <a @click="showLeon = !showLeon"><span>&#60;</span></a>
                </div>
            </div>
        </section>
        <foot />
    </main>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    data() {
        return {
            showGt86: false,
            showSls: false,
            showVz: false,
            showLeon: false,
            images_gt86: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
            ],
            images_sls: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
            ],
            images_vz: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
            ],
            images_leonCupra: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
            ],
        };
    },
    mounted() {
        this.showGt86 = false; // might need this.$nextTick
        this.showSls = false; // might need this.$nextTick
        this.showVz = false;
        this.showLeon = false;
    },
};
</script>
