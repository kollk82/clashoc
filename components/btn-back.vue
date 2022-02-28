<template>
    <button class="btn-back" @click="goBack()"><span>&#8592;</span></button>
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