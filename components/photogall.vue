<template>
    <div>
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
            v-if="$route.params.id === 'abt_transformer' ? !show : show"
        >
            <figure v-for="(image, i) in 12" :key="i">
                <img
                    :src="`/gallery/abt/abt_${image}.jpg`"
                    :alt="`Seat Leon Cupra image number ${image}`"
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
        this.show1 = false;
    },
};
</script>
