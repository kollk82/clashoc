<template>
    <main class="container">
        <navbar /><logo />
        <section class="gall">
            <div class="gall--h">
                <h1>My work</h1>
                <h4>meets/photoshoots</h4>
                <arrow />
            </div>
            <div class="gall--images">
                <div
                    class="gall--images-wrapper coming"
                    data-coming="coming soon"
                >
                    <h3 class="h3">Dubshed 04.2022</h3>
                    <img
                        :src="`/gallery/meets/portlaoise/pl032022/100.jpg`"
                        :alt="`${thumbnail} Car meet Portlaoise March 2022`"
                    />
                </div>

                <NuxtLink to="/meets/portlaoise032022">
                    <div class="gall--images-wrapper">
                        <h3>Portlaoise 03.2022</h3>
                        <img
                            :src="'/gallery/img_tumb/14.jpg'"
                            :alt="`${thumbnail} Car meet Portlaoise March 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/northeast032022">
                    <div class="gall--images-wrapper">
                        <h3>Northeast 03.2022</h3>
                        <img
                            :src="'/gallery/img_tumb/12.jpg'"
                            :alt="`${thumbnail} Car meet Portlaoise March 2022`"
                        />
                    </div>
                </NuxtLink>
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
                <NuxtLink to="/gallery/abt_transporter">
                    <div class="gall--images-wrapper">
                        <h3>Abt Transporter</h3>
                        <img
                            :src="'/gallery/img_tumb/7.jpg'"
                            :alt="`${thumbnail} VW ABT Transporter`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/gallery/rs3">
                    <div class="gall--images-wrapper">
                        <h3>Audi RS3 Quattro</h3>
                        <img
                            :src="'/gallery/img_tumb/rs3.jpg'"
                            :alt="`${thumbnail} Audi Rs3`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/northeast2021">
                    <div class="gall--images-wrapper">
                        <h3>Cars & Coffee Northeast 2021</h3>
                        <img
                            :src="'/gallery/img_tumb/11.jpg'"
                            :alt="`${thumbnail} Car meet Northeast 2021`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/wexford2021">
                    <div class="gall--images-wrapper">
                        <h3>Cars & Coffee Wexford 2021</h3>
                        <img
                            :src="'/gallery/img_tumb/13.jpg'"
                            :alt="`${thumbnail} Car meet Wexford 2021`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/portlaoise2021">
                    <div class="gall--images-wrapper">
                        <h3>Cars & Coffee Portlaoise 2021</h3>
                        <img
                            :src="'/gallery/img_tumb/10.jpg'"
                            :alt="`${thumbnail} Car meet Portlaoise 2021`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/street_beasts_irl">
                    <div class="gall--images-wrapper">
                        <h3>Street Beasts Ireland 2021</h3>
                        <img
                            :src="'/gallery/img_tumb/9.jpg'"
                            :alt="`${thumbnail} streetbeastsirl`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/daly_automotive_solution_meet">
                    <div class="gall--images-wrapper">
                        <h3>Daly Automotive Solutions 2021</h3>
                        <img
                            :src="'/gallery/img_tumb/das.jpg'"
                            :alt="`${thumbnail} Daly Automotive Solutions`"
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
            thumbnail: 'Thumbnail picture of',
        };
    },
};
</script>
<style scoped>
.h3 {
    padding-left: 1.5rem;
}
.coming {
    position: relative;
}
.coming::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: attr(data-coming);
    font-size: 178%;
    background-color:#000 ;
    color: rgb(180, 51, 51);
    top: -1rem;
    left: 15rem;
    position: absolute;
    width: 10rem;
    height: max-content;
    padding-inline: 2rem;
    z-index: 999;
    transform: rotate(-65deg);
    margin: auto;
    border-radius: 1rem;
}
</style>
