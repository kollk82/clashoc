<template>
    <div class="container">
        <navbar /><logo />
        <photogall />
        <foot />
    </div>
</template>
<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1);
        },
    },
    data: function () {
        return {
            // group is name of the url param we created
            groupId: this.$route.params.group,
            // id is name of the url param we created
            userId: this.$route.params.id,
        };
    },
};
</script>
