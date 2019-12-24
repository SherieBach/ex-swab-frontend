<template>
    <div id="app">
        <div id="top-nav" v-if="mobileView"> <!--Note to self; add component and set the mobile view in method -->
            <img src="././assets/images/Bar.png" class="menu-bar" alt="A clickable menu icon for navigation">
        </div>
        <Header/>
        <div>
            <Navigation v-if="!mobileView"/> <!-- // not complete, for navigation bar depending on viewpoints-->
        </div>
        <router-view/>
    </div>
</template>
<script>
    import Header from "./components/Header.vue";
    import Navigation from "./components/Navigation";

    export default {
        name: 'app',
        data() {
            return {
                mobileView: false, // set method fot viewpoint v-if directive
                showNav: false,
            }
        },
        components: {
            Navigation,
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

    #top-nav {
        display: flex;
        width: 100%;

        .menu-bar {
            position: absolute;
            padding: 10px 10px 20px;
            top: 10px;
            right: 10px;
            width: 12%;
            height: auto;
            opacity: 1;
            cursor: pointer;
        }
    }

</style>
