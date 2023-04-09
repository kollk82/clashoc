<template>
    <div class="navigation">
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
                    <NuxtLink to="/packages">Shop</NuxtLink>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                    <a
                        href="https://www.buymeacoffee.com/clashofcars182"
                        target="_blank" class="support"
                    >
                        <img
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                            alt="Buy Me A Coffee"
                    /></a>
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
