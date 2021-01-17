<template>
    <div class="text-container">
        <h1 class="main-header">steps</h1>
        <p class="highlight">
            Walking is the ultimate act of isolation.
        </p>
        <p>
            When you walk you discover new platitudes, new modes of thoughts,
            you reach a higher level of consciousness than you thought possible.
        </p>
        <p class="highlight ellipses">
            ...
        </p>
        <p>
            All I'm trying to say is that I walk a lot. And this is a simple
            website that dissects the walking data I have available for myself.
        </p>
        <p>
            This website is built with <u>Nuxt</u> in the front,
            <u>express</u> in the back.
        </p>
        <p>
            My goal in building this website was to play around with data in a
            functional way. The pedometer I use, Pedometer+, exports all of my
            walking data as a big CSV. It doesn't allow for filtering of the
            data at all. I therefore thought this would be a brilliant
            opportunity for me to play around with data and learn about how to
            filter data by week, year, and so on.
        </p>
        <p>
            While the tech stack is nothing to marvel at, I hope the code itself
            is interesting to view. I had never in any serious capacity written
            code in a functional way, and I had a lot of fun trying to do so
            with this project!
        </p>
    </div>
</template>

<style scoped>
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
</style>
