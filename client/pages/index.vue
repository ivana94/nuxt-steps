<template>
    <h1>{{ heading }}</h1>
</template>

<script>
export default {
    data() {
        return {
            heading: "Heyyyyy",
        };
    },
    async asyncData({ $axios }) {
        const data = await $axios.$get("/test");
        console.log(data);
    },
};
</script>
