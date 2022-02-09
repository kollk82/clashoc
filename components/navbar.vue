<template>
    <div class="navigation">
        <section class="logo"></section>
        <div
            v-bind:class="{ 'active nav-icon': !show, 'nav-icon-x': show }"
            @click="show = !show"
        ></div>
        <transition
            enter-active-class="animation slideInDown"
            leave-active-class="animation slideOutUp"
        >
            <div class="nav" v-show="show">
                <nav>
                    <NuxtLink to="/">Home</NuxtLink>
                    <!-- <NuxtLink to="/gear">My Gear</NuxtLink> -->
                    <NuxtLink to="/gallery">My work</NuxtLink>
                    <NuxtLink to="/packages">Packages</NuxtLink>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                    <a
                        class="support"
                        href="https://www.buymeacoffee.com/clashofcars182"
                        target="_blank"
                        >Buy me a coffee☕</a
                    >
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
