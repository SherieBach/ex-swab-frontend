<template>
    <div id="app">
        <Header />
        <router-view />

    </div>
</template>
<script>
    import Header from "./components/Header.vue";

    export default {
        name: 'app',
        components: {
            Header,
        }
    }
</script>

<style lang="scss">
    @import "styles/global";

    body, html {
        background-color: $primary-color;
        margin: 0;
        font-size: $font-size;
        height: auto;
        width: 100%;
    }

    #app {
        font-family: $font-stack;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

    }

</style>
