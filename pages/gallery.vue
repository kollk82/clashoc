<template>
    <main class="container">
        <navbar />
        <section class="gall">
            <div class="gall--h">
                <h1>My work</h1>
                <arrow />
            </div>
            <div class="gall--images">
                <div class="gall--images-wrapper" @click="showMeetpl = !showMeetpl">
                    <h3>Portlaoise 30.01.2022</h3>
                    <img
                        :src="`/gallery/meets/portlaoise/pl30012022/pl_23.jpg`"
                        :alt="`Car meet image number 23`"
                    />
                </div>
                <div v-if="showMeetpl">
                    <figure v-for="(image, i) in 82" :key="i">
                        <img
                            :src="`/gallery/meets/portlaoise/pl30012022/pl_${image}.jpg`"
                            :alt="`Car meet image number ${image}`"
                        />
                    </figure>
                    <a @click="showMeetpl = !showMeetpl"><span>up</span></a>
                </div>
                <div class="gall--images-wrapper" @click="showGt86 = !showGt86">
                    <h3>Toyota GT86</h3>
                    <img
                        :src="`/gallery/gt86/7.jpg`"
                        :alt="`Toyota GT86 image number 7`"
                    />
                </div>
                <div v-if="showGt86">
                    <figure v-for="(image, i) in images_gt86" :key="i">
                        <img
                            :src="`/gallery/gt86/${image}.jpg`"
                            :alt="`Toyota GT86 image number ${image}`"
                        />
                    </figure>
                    <a @click="showGt86 = !showGt86"><span>up</span></a>
                </div>
                <div class="gall--images-wrapper" @click="showSls = !showSls">
                    <h3>Amg Sls</h3>
                    <img
                        :src="`/gallery/sls/8.jpg`"
                        :alt="`Mercedes SLS image number 8`"
                    />
                </div>
                <div v-if="showSls">
                    <figure v-for="(image, i) in images_sls" :key="i">
                        <img
                            :src="`/gallery/sls/${image}.jpg`"
                            :alt="`Mercedes SLS image number ${image}`"
                        />
                    </figure>
                    <a @click="showSls = !showSls"><span>up</span></a>
                </div>
                <div class="gall--images-wrapper" @click="showVz = !showVz">
                    <h3>Cupra Formentor VZ</h3>
                    <img
                        :src="`/gallery/cupra/formentor/7.jpg`"
                        :alt="`Cupra Formentor VZ image number 7`"
                    />
                </div>
                <div v-if="showVz">
                    <figure v-for="(image, i) in images_vz" :key="i">
                        <img
                            :src="`/gallery/cupra/formentor/${image}.jpg`"
                            :alt="`Cupra Formentor VZ image number ${image}`"
                        />
                    </figure>
                    <a @click="showVz = !showVz"><span>up</span></a>
                </div>
                <div class="gall--images-wrapper" @click="showLeon = !showLeon">
                    <h3>Seat Leon Cupra</h3>
                    <img
                        :src="`/gallery/cupra/leon/8.jpg`"
                        :alt="`Seat Leon Cupra image number 8`"
                    />
                </div>
                <div v-if="showLeon">
                    <figure v-for="(image, i) in images_leonCupra" :key="i">
                        <img
                            :src="`/gallery/cupra/leon/${image}.jpg`"
                            :alt="`Seat Leon Cupra image number ${image}`"
                        />
                    </figure>
                    <a @click="showLeon = !showLeon"><span>up</span></a>
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
            showMeetpl: false,
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
        this.showMeetpl = false;
    },
};
</script>
