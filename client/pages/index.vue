<template>
    <div class="main-container">
        <div class="text-container">
            <h1 class="main-header">steps</h1>
            <p class="highlight">
                Walking is the ultimate act of isolation.
            </p>
            <p>
                When you walk you discover new platitudes, new modes of
                thoughts, you reach a higher level of consciousness than you
                thought possible.
            </p>
            <p class="highlight ellipses">
                ...
            </p>
            <p>
                All I'm trying to say is that I walk a lot. And this is a simple
                website that dissects the walking data I have available for
                myself.
            </p>
            <p>
                This website is built with <u>Nuxt</u> in the front,
                <u>express</u> in the back.
            </p>
            <p>
                My goal in building this website was to play around with data in
                a functional way. The pedometer I use, Pedometer+, exports all
                of my walking data as a big CSV. It doesn't allow for filtering
                of the data at all. I therefore thought this would be a
                brilliant opportunity for me to play around with data and learn
                about how to filter data by week, year, and so on.
            </p>
            <p>
                While the tech stack is nothing to marvel at, I hope the code
                itself is interesting to view. I had never in any serious
                capacity written code in a functional way, and I had a lot of
                fun trying to do so with this project!
            </p>
        </div>
        <hr />
        <div class="data-container">
            <div class="align-text-left">
                <h2>2020 -----</h2>
                <h3>{{ stepData }} steps</h3>
                <h3>{{ distanceDataMiles }} miles / {{ distanceDataKm }} km</h3>
            </div>
        </div>
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

<style global>
:root {
    --cream: #f9f1f0;
    --quartz: #fadcd9;
    --rose: #f8afa6;
    --coral: #f79489;
    --text: #6b4c48;
}

html {
    background: var(--cream);
    overflow: hidden;
}

h1 {
    font-family: Georgia, Garamond, "New York Times";
    font-size: 3rem;
    color: var(--text);
}

h2,
h3,
h4,
h5 {
    font-family: sans-serif;
    color: var(--text);
}

p {
    font-family: sans-serif;
    color: var(--text);
}

.align-text-left {
    text-align: left;
}
</style>

<style scoped>
div.main-container {
    position: relative;
    height: 100vh;
}

div.text-container {
    position: absolute;
    width: 45%;
    height: 100%;
    left: 5%;
    top: 0;
}

h1.main-header ~ p {
    font-family: Monaco;
}

h1.main-header ~ p.highlight {
    font-family: "Courier New";
    font-size: 1.5rem;
    font-weight: bold;
}

p.ellipses {
    text-align: center;
}

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
    text-decoration: underline;
    font-size: 1.25rem;
}
</style>
