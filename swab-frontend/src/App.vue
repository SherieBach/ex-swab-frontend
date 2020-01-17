<template>
    <div id="app">
        <Header/>
        <Navigation :class="styleNav"/> <!-- // not complete, for navigation bar depending on viewpoints-->
        <transition
                name="fade"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter"
        >                                   <!-- transition for fade during page routing --->
            <router-view/>
        </transition>

    </div>
</template>
<script>
    import Header from "./components/Header.vue";
    import Navigation from "./components/Navigation";

    export default {
        name: 'app',
        data() {
            return {
                styleNav: 'navComponent'
            }
        },
        components: {
            Navigation,
            Header,

        },
        methods: {

            beforeLeave(element) { // gets the element of the current page, save for later
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) { // triggers the transition of the height of the new page
                const {height} = getComputedStyle(element);  // height of the new page and save it in a variable

                element.style.height = this.prevHeight; // starting point for the transition

                setTimeout(() => { // make sure the browser has triggered else no transition effect
                    console.log("trigger test");
                    element.style.height = height;
                });
            },
            afterEnter(element) { // set the height of the page back to auto, make sure height is dynamic again
                element.style.height = 'auto';
            },
        }
    }
</script>

<style lang="scss">
    @import "styles/global";

    body, html {
        background-color: $black;
        margin: 0;
        font-size: $font-size;
        height: auto;
        width: 100%;
    }

    #app {
        font-family: $font-stack;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $black;
    }

    .navComponent {
        margin: 30px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity;
        transition-timing-function: ease-in;
        overflow: hidden;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
