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
                <NuxtLink to="/meets/The_Classic_Car_Show_UK">
                    <div class="gall--images-wrapper">
                        <h3>The Classic Car Show UK</h3>
                        <img
                            :src="'/gallery/img_tumb/31.jpg'"
                            :alt="`${thumbnail} The_Classic_Car_Show_UK`"
                        />
                    </div>
                </NuxtLink>
                <NuxtLink to="/meets/cleanfest">
                    <div class="gall--images-wrapper">
                        <h3>Cleanfest Edinburgh UK</h3>
                        <img
                            :src="'/gallery/img_tumb/29.jpg'"
                            :alt="`${thumbnail} Car meet Cleanfest`"
                        />
                    </div>
                </NuxtLink>
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
                <NuxtLink to="/meets/dubshed2022">
                    <div class="gall--images-wrapper">
                        <h3 class="h3">Dubshed 2022</h3>
                        <img
                            :src="'/gallery/img_tumb/15.jpg'"
                            :alt="`${thumbnail} Car meet Dubshed 2022`"
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
