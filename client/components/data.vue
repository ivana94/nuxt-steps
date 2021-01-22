<template>
    <div class="data-container" v-if="yearlyStepData">
        <div class="align-text-left">
            <h2>2020 -----</h2>
            <h3>{{ yearlyStepData }} steps</h3>
            <h3>
                {{ yearlyDistanceDataMiles }} miles /
                {{ yearlyDistanceDataKm }} km
            </h3>
            <template>
                <NuxtLink to="/weekly">Weekly data here</NuxtLink>
            </template>
        </div>
    </div>
</template>

<script>
import mixins from "~/mixins/output.js";

export default {
    mixins: [mixins],
    data() {
        return {
            yearlyStepData: null,
            yearlyDistanceDataMiles: null,
            yearlyDistanceDataKm: null,
        };
    },
    async fetch() {
        const { yearlyStepData, yearlyDistanceData } = await this.$axios.$get(
            "/yearly-step-data"
        );
        this.yearlyStepData = mixins.methods.formatLargeNum(yearlyStepData);
        this.yearlyDistanceDataMiles = mixins.methods.formatLargeNum(
            yearlyDistanceData[0]
        );
        this.yearlyDistanceDataKm = mixins.methods.formatLargeNum(
            yearlyDistanceData[1]
        );
    },
};
</script>

<style scoped>
div.data-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 10px;
    text-align: left;
    width: 50%;
    height: 100%;
}

div.data-container h2,
div.data-container h3 {
    font-family: "Courier New", Monaco;
}

hr {
    position: absolute;
    transform: rotate(270deg);
    width: 100%;
    top: 10%;
    border: 1.5px solid var(--text);
}

h3 {
    font-size: 1.25rem;
}
</style>
