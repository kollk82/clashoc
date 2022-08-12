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
                <NuxtLink to="/meets/solow">
                    <div class="gall--images-wrapper">
                        <h3>SoLow Autmotive Event</h3>
                        <img
                            :src="'/gallery/img_tumb/28.jpg'"
                            :alt="`${thumbnail} Car meet Solow`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/osns">
                    <div class="gall--images-wrapper">
                        <h3>Osns Longford</h3>
                        <img
                            :src="'/gallery/img_tumb/27.jpg'"
                            :alt="`${thumbnail} Car meet Osns`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/vage_shownshine">
                    <div class="gall--images-wrapper">
                        <h3>VAGE Show & Shine</h3>
                        <img
                            :src="'/gallery/img_tumb/25.jpg'"
                            :alt="`${thumbnail} Car meet VAGE Show & Shine`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/northeast072022">
                    <div class="gall--images-wrapper">
                        <h3>Northeast 07.2022</h3>
                        <img
                            :src="'/gallery/img_tumb/24.jpg'"
                            :alt="`${thumbnail} Car meet Northeast July 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/db_quay">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">DB on the quay</h3>
                        <img
                            :src="'/gallery/img_tumb/23.jpg'"
                            :alt="`${thumbnail} Omni car meet 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/omni_car_meet">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Dublin Car Culture - Omni</h3>
                        <img
                            :src="'/gallery/img_tumb/22.jpg'"
                            :alt="`${thumbnail} Omni car meet 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/street_beast_2022">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Street Beasts Ireland 2022</h3>
                        <img
                            :src="'/gallery/img_tumb/21.jpg'"
                            :alt="`${thumbnail} Street Beatst Ireland car meet 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/black_diamond_events">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Black Diamond Events</h3>
                        <img
                            :src="'/gallery/img_tumb/20.jpg'"
                            :alt="`${thumbnail} Black Diamond Events car meet 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/johnstown">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Johnstown Castle</h3>
                        <img
                            :src="'/gallery/img_tumb/19.jpg'"
                            :alt="`${thumbnail} Johnstown Castle car meet 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/drift_games">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Drift games</h3>
                        <img
                            :src="'/gallery/img_tumb/18.jpg'"
                            :alt="`${thumbnail} Drift games car meet 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/athy_meet">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Athy Car Meet</h3>
                        <img
                            :src="'/gallery/img_tumb/17.jpg'"
                            :alt="`${thumbnail} Athy car meet 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/outcasts_ire">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Outcasts_ire<br />K4 Media</h3>
                        <img
                            :src="'/gallery/img_tumb/16.jpg'"
                            :alt="`${thumbnail} Car meet Outcasts_ire 2022`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/dubshed2022">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Dubshed 2022</h3>
                        <img
                            :src="'/gallery/img_tumb/15.jpg'"
                            :alt="`${thumbnail} Car meet Dubshed 2022`"
                        />
                    </div>
                </NuxtLink>
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
                            :alt="`${thumbnail} Car meet Northeast March 2022`"
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
