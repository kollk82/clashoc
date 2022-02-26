<template>
    <main class="container">
        <navbar /><logo />
        <section class="gall">
            <div class="gall--h">
                <h1>My work</h1>
                <arrow />
            </div>
            <div class="gall--images">
                 <NuxtLink to="/gallery/VW_Golf_Gti_Clubsport">
                    <div class="gall--images-wrapper">
                        <h3>VW Golf GTI Clubsport</h3>
                        <img
                            :src="`/gallery/img_tumb/3.jpg`"
                            :alt="`Car meet image number 3`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/portlaoise2022">
                    <div class="gall--images-wrapper">
                        <h3>Portlaoise 30.01.22</h3>
                        <img
                            :src="'/gallery/img_tumb/4.jpg'"
                            :alt="'Car meet image number 4'"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/Toyota_Gt86">
                    <div class="gall--images-wrapper">
                        <h3>Toyota GT86</h3>
                        <img
                            :src="'/gallery/img_tumb/5.jpg'"
                            :alt="'Toyota GT86 image number 5'"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/mercedes_sls">
                    <div class="gall--images-wrapper">
                        <h3>Amg Sls</h3>
                        <img
                            :src="'/gallery/img_tumb/1.jpg'"
                            :alt="`Mercedes SLS image number 1`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/cupra_formentor_vz">
                    <div class="gall--images-wrapper">
                        <h3>Cupra Formentor VZ</h3>
                        <img
                            :src="'/gallery/img_tumb/2.jpg'"
                            :alt="'Cupra Formentor VZ image number 2'"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/leon_cupra">
                    <div class="gall--images-wrapper">
                        <h3>Seat Leon Cupra</h3>
                        <img
                            :src="'/gallery/img_tumb/6.jpg'"
                            :alt="'Seat Leon Cupra image number 6'"
                        />
                    </div>
                </NuxtLink>
            </div>
        </section>
        <foot />
    </main>
</template>
<script>
export default {
    data() {
        return {
            showGt86: false,
            showSls: false,
            showVz: false,
            showLeon: false,
            showMeetpl: false,
            scrollToTop: true,
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
