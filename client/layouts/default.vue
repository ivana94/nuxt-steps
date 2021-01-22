<template>
    <Nuxt />
</template>

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
