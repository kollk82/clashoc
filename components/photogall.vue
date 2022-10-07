<template>
    <div>
        <div
            class="images-show"
            v-if="$route.params.id === 'segregated_society' ? !show : show"
        >
            <figure v-for="(image, i) in 168" :key="i">
                <img
                    :src="`/gallery/meets/society/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'cleanfest' ? !show : show"
        >
            <figure v-for="(image, i) in 356" :key="i">
                <img
                    :src="`/gallery/meets/cleanfest/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'solow' ? !show : show"
        >
            <figure v-for="(image, i) in 212" :key="i">
                <img
                    :src="`/gallery/meets/solow/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
         <div
            class="images-show"
            v-if="$route.params.id === 'osns' ? !show : show"
        >
            <figure v-for="(image, i) in 125" :key="i">
                <img
                    :src="`/gallery/meets/osns/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'vage_shownshine' ? !show : show"
        >
            <figure v-for="(image, i) in 277" :key="i">
                <img
                    :src="`/gallery/meets/vage_eire/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'northeast072022' ? !show : show"
        >
            <figure v-for="(image, i) in 118" :key="i">
                <img
                    :src="`/gallery/meets/northeast/2022/07/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'db_quay' ? !show : show"
        >
            <figure v-for="(image, i) in 218" :key="i">
                <img
                    :src="`/gallery/meets/db_quay/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'omni_car_meet' ? !show : show"
        >
            <figure v-for="(image, i) in 74" :key="i">
                <img
                    :src="`/gallery/meets/omni/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'street_beast_2022' ? !show : show"
        >
            <figure v-for="(image, i) in 84" :key="i">
                <img
                    :src="`/gallery/meets/sbo/2022/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'black_diamond_events' ? !show : show"
        >
            <figure v-for="(image, i) in 169" :key="i">
                <img
                    :src="`/gallery/meets/black_diamond/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'johnstown' ? !show : show"
        >
            <figure v-for="(image, i) in 138" :key="i">
                <img
                    :src="`/gallery/meets/johnstown/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'drift_games' ? !show : show"
        >
            <figure v-for="(image, i) in 242" :key="i">
                <img
                    :src="`/gallery/meets/driftgames/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'athy_meet' ? !show : show"
        >
            <figure v-for="(image, i) in 95" :key="i">
                <img
                    :src="`/gallery/meets/athy/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'outcasts_ire' ? !show : show"
        >
            <figure v-for="(image, i) in 96" :key="i">
                <img
                    :src="`/gallery/meets/outcasts_ire/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'dubshed2022' ? !show : show"
        >
            <figure v-for="(image, i) in 354" :key="i">
                <img
                    :src="`/gallery/meets/dubshed2022/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'portlaoise032022' ? !show : show"
        >
            <figure v-for="(image, i) in 171" :key="i">
                <img
                    :src="`/gallery/meets/portlaoise/pl032022/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'northeast032022' ? !show : show"
        >
            <figure v-for="(image, i) in 127" :key="i">
                <img
                    :src="`/gallery/meets/northeast/2022/03/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'VW_Golf_Gti_Clubsport' ? !show : show"
        >
            <figure v-for="(image, i) in 16" :key="i">
                <img
                    :src="`/gallery/gti/gti_${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'portlaoise2022' ? !show : show"
        >
            <figure v-for="(image, i) in 82" :key="i">
                <img
                    :src="`/gallery/meets/portlaoise/pl30012022/pl_${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'Toyota_Gt86' ? !show : show"
        >
            <figure v-for="(image, i) in 12" :key="i">
                <img
                    :src="`/gallery/gt86/${image}.jpg`"
                    :alt="`Toyota GT86 image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'mercedes_sls' ? !show : show"
        >
            <figure v-for="(image, i) in 17" :key="i">
                <img
                    :src="`/gallery/sls/${image}.jpg`"
                    :alt="`Mercedes SLS image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'leon_cupra' ? !show : show"
        >
            <figure v-for="(image, i) in 12" :key="i">
                <img
                    :src="`/gallery/cupra/leon/${image}.jpg`"
                    :alt="`Leon Cupra image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'cupra_formentor_vz' ? !show : show"
        >
            <figure v-for="(image, i) in 19" :key="i">
                <img
                    :src="`/gallery/cupra/formentor/${image}.jpg`"
                    :alt="`Cupra Formentor VZ image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'abt_transporter' ? !show : show"
        >
            <figure v-for="(image, i) in 21" :key="i">
                <img
                    :src="`/gallery/abt/abt_${image}.jpg`"
                    :alt="`VW ABT Transporter image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'rs3' ? !show : show"
        >
            <figure v-for="(image, i) in 20" :key="i">
                <img
                    :src="`/gallery/rs3/rs3_${image}.jpg`"
                    :alt="`Audi RS3 image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'wexford2021' ? !show : show"
        >
            <figure v-for="(image, i) in 68" :key="i">
                <img
                    :src="`/gallery/meets/wexford/2021/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'northeast2021' ? !show : show"
        >
            <figure v-for="(image, i) in 141" :key="i">
                <img
                    :src="`/gallery/meets/northeast/2021/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'portlaoise2021' ? !show : show"
        >
            <figure v-for="(image, i) in 106" :key="i">
                <img
                    :src="`/gallery/meets/portlaoise/pl2021/${image}.jpg`"
                    :alt="`Car meet image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="$route.params.id === 'street_beasts_irl' ? !show : show"
        >
            <figure v-for="(image, i) in 28" :key="i">
                <img
                    :src="`/gallery/meets/sbo/${image}.jpg`"
                    :alt="`Street Beasts IRL image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
        <div
            class="images-show"
            v-if="
                $route.params.id === 'daly_automotive_solution_meet'
                    ? !show
                    : show
            "
        >
            <figure v-for="(image, i) in 32" :key="i">
                <img
                    :src="`/gallery/meets/das/das_${image}.jpg`"
                    :alt="`Daly Automotive Solutions image number ${image}`"
                />
            </figure>
            <btn-back />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        this.show = false; // might need this.$nextTick
    },
};
</script>
