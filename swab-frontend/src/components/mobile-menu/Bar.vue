<template>
    <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
        <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <img src="../../assets/images/Bar.png" class="burger-bar--img" alt="A clickable menubar for mobile navigation">
            <span class="burger-bar burger-bar--2"></span>
        </button>
    </div>
</template>
<script>

    import {mapMutations} from "vuex";
    import store from "../../store/modules/content";

    export default {
        name: 'Bar',
        computed: {
            ...mapMutations([
                'setIsNavOpen'
            ]),
            isBurgerActive() {
                return store.state.isNavOpen;
            }
        },
        methods: {
            toggle() {
                store.mutations.toggleNav();
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../styles/global";

    button {
        cursor: pointer;
    }

    button:focus {
        outline: 0;
    }

    .burger-button {
        position: relative;
        height: 40px;
        width: 32px;
        display: block;
        z-index: 999;
        border: 0;
        margin-top: 5px;
        margin-right: 15px;
        background-color: transparent;
        pointer-events: all;
        transition: transform 1s cubic-bezier(.165, .84, .44, 1);
    }

    .burger-bar {
        background-color: #ABB4D3;
        position: absolute;
        top: 50%;
        right: 0;
        left: 6px;
        height: 2px;
        width: auto;
        opacity: 0;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165, .84, .44, 1),
        opacity .3s cubic-bezier(.165, .84, .44, 1),
        background-color .6s cubic-bezier(.165, .84, .44, 1);
    }

    .burger-bar--img {
        position: absolute;
        top: 1%;
        right: 16px;
        left: 0;
        height: 40px;
        width: 40px;
        transform-origin: 100% 50%;
    }

    .burger-button .burger-bar--img {
        transform: scaleX(1);
    }

    #burger.active .burger-bar--img {
        opacity: 0;
    }

    #burger.active .burger-bar {
        background-color: $aquaWhite;
        opacity: 1;
    }

    #burger.active .burger-button {
        transform: rotate(-180deg);
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg);
    }

    #burger.active .burger-bar--2 {
        transform: rotate(-45deg)
    }
</style>
