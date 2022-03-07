<template>
    <button class="btn-back" @click="test">
        <span>{{ htmlData }}</span>
    </button>
</template>
<script>
export default {
    props: {
        htmlData: {
            type: String,
        },
        test: {
            type: Function,
        },
    },
};
</script>
