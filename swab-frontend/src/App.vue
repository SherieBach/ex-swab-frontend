<template>
    <div id="app">
        <div class="app__gradient-container"></div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>
<script>
    import Footer from "./components/Footer.vue";
    import Header from "./components/Header.vue";

    export default {
        name: 'app',
        components: {
            Footer,
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
        text-align: center;
        color: #2c3e50;

    }

</style>
