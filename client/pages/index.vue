<template>
    <div>
        <h1>In 2020 you walked</h1>
        <h3>{{ stepData }}</h3>
        <p>which is</p>
        <h3>{{ distanceDataMiles }} miles / {{ distanceDataKm }} km</h3>
    </div>
</template>

<script>
import mixins from "../mixins/output.js";

export default {
    mixins: [mixins],
    async asyncData({ $axios }) {
        const { stepData, distanceData } = await $axios.$get(
            "/yearly-step-data"
        );
        return {
            stepData: mixins.methods.formatLargeNum(stepData),
            distanceDataMiles: mixins.methods.formatLargeNum(distanceData[0]),
            distanceDataKm: mixins.methods.formatLargeNum(distanceData[1]),
        };
    },
};
</script>
