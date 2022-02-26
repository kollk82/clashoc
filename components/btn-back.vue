<template>
    <button class="btn-back" @click="goBack()">&#8592;&nbsp;&nbsp;Go back</button>
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