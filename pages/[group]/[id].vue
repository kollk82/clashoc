<template>
    <div class="container">
        <navbar /><logo />
        <photogall />
        <foot />
    </div>
</template>
<script>
export default {
    data() {
        return {
            // group is name of the url param we created
            groupId: this.$route.params.group,
            // id is name of the url param we created
            userId: this.$route.params.id,
            show: false,
        };
    },
    mounted() {
        this.show = false; // might need this.$nextTick
    },
};
</script>
