<template>
    <div class="navigation">
        <div v-bind:class="{'active nav-icon': !show, 'nav-icon-x': show}" @click="show = !show"></div>
        <transition
            name="custom-classes-transition"
            enter-active-class="animation slideInDown"
            leave-active-class="animation slideOutUp"
        >
            <div class="nav" v-if="show">
                <nav>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/gear">My Gear</NuxtLink>
                    <NuxtLink to="/gallery">My work</NuxtLink>
                    <NuxtLink to="/shoots">Packages</NuxtLink>
                    <NuxtLink to="/social">Contact</NuxtLink>
                </nav>
            </div>
        </transition>
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
