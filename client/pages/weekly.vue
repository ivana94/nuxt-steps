<template>
    <div>
        <ul class="data-container">
            <li v-for="(dailyStepData, i) in weeklyStepData" :key="i">
                #{{ i + 1 }} || {{ formatLargeNum(dailyStepData) }}
            </li>
        </ul>
    </div>
</template>

<script>
import mixins from "~/mixins/output.js";

export default {
    mixins: [mixins],
    data() {
        return {
            weeklyStepData: null,
        };
    },
    async fetch() {
        const { weeklyStepData, weeklyDistanceData } = await this.$axios.$get(
            "/weekly-step-data"
        );
        this.weeklyStepData = weeklyStepData;
    },
};
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
}

ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Monaco;
    width: 15vw;
    height: 10vh;
    list-style-type: none;
    box-shadow: 0;
    transition: width 3s;
}

ul li:hover {
    background-image: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
    );
    background-position: 100% 50%;
    transition: all 0.3s;
    box-shadow: 10px 10px 10px black;
    animation: rainbow 3s ease-in-out infinite alternate;
}

@keyframes rainbow {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
