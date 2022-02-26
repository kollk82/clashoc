<template>
    <div class="container">
        <navbar /><logo />
        <div class="pageError"><h1>Page not found.</h1></div>
        <foot />
    </div>
</template>
<style scoped>
.pageError {
    grid-column: 2 / span 3;
    grid-row: 2;
    display: block;
    margin: auto 0;
    text-align: center;
}
</style>
<script>
export default {
    data() {
        return {
            scrollToTop: true,
        }
    },
};
</script>
