<template>
    <div>
        <section class="logo" @click="goToHome()">
            <span class="sp">Clashofcars</span><span>.dev</span>
        </section>
    </div>
</template>
<script>
export default {
    methods: {
        goToHome() {
            this.$router.push('/');
        },
    },
};
</script>
