<template>
    <div id="app">
        <Header />
        <div id="nav">
            <router-link to="/">Home</router-link>  ||
            <router-link to="/about">Konsulter</router-link>
        </div>
        <router-view/>
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
    }

    #app {
        font-family: $font-stack;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
