<template>
    <div class="main-container">
        <Intro />
        <hr />
        <Data />
    </div>
</template>

<style scoped>
div.main-container {
    position: relative;
    height: 100vh;
}

hr {
    position: absolute;
    transform: rotate(270deg);
    width: 100%;
    top: 10%;
    border: 1.5px solid var(--text);
}
</style>
