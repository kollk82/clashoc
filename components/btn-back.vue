<template>
    <button class="btn-back" @click="goBack()">Go back</button>
</template>
<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1);
        },
    },
};
</script>