<template>
    <div>
        <div
            class="images-show"
            v-if="$route.params.id === 'The_Classic_Car_Show_UK' ? !show : show"
        >
            <figure v-for="(image, i) in 228" :key="i">
                <img
                    :src="`/gallery/meets/The_Classic_Car_Show_UK/${image}.jpg`"
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
