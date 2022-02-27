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
                            :src="'/gallery/img_tumb/3.jpg'"
                            :alt="`${thumbnail} VW Golf GTI Clubsport`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/portlaoise2022">
                    <div class="gall--images-wrapper">
                        <h3>Portlaoise 30.01.22</h3>
                        <img
                            :src="'/gallery/img_tumb/4.jpg'"
                            :alt="`${thumbnail} Car meet Portlaoise 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/Toyota_Gt86">
                    <div class="gall--images-wrapper">
                        <h3>Toyota GT86</h3>
                        <img
                            :src="'/gallery/img_tumb/5.jpg'"
                            :alt="`${thumbnail} Toyota GT86`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/mercedes_sls">
                    <div class="gall--images-wrapper">
                        <h3>Amg Sls</h3>
                        <img
                            :src="'/gallery/img_tumb/1.jpg'"
                            :alt="`${thumbnail} AMG SLS Roadster`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/cupra_formentor_vz">
                    <div class="gall--images-wrapper">
                        <h3>Cupra Formentor VZ</h3>
                        <img
                            :src="'/gallery/img_tumb/2.jpg'"
                            :alt="`${thumbnail} Cupra Formentor VZ`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/leon_cupra">
                    <div class="gall--images-wrapper">
                        <h3>Seat Leon Cupra</h3>
                        <img
                            :src="'/gallery/img_tumb/6.jpg'"
                            :alt="`${thumbnail} Seat Leon Cupra`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/abt_transformer">
                    <div class="gall--images-wrapper">
                        <h3>Abt Transformer</h3>
                        <img
                            :src="'/gallery/img_tumb/7.jpg'"
                            :alt="`${thumbnail} Cupra Formentor VZ`"
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
        return{
            thumbnail: 'Thumbnail picture of',
        }
    },
};
</script>
