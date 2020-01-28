<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebar" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel"> <!-- check if the panel is open -->
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>


    import {mapMutations} from "vuex";
    import store from "../../store/modules/content";

    export default {
        name: 'SideBar',
        computed: {
            ...mapMutations([
                'isNavOpen'
            ]),
            isPanelOpen() {
                return store.state.isNavOpen; // returns the state to store
            }
        },
        methods: {
            closeSidebar() {
                store.mutations.toggleNav(); // checks the state mutation if the nav is open and toggles
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../styles/global";

    .slide-enter-active {
        transition: transform 0.5s ease;
    }

    .slide-leave-active {
        transition: opacity .3s;

    }

    .slide-enter {
        transform: translateY(-100%);
        transition: 180ms ease-in;
    }

    .slide-leave-to {
        opacity: 0;
    }

    .sidebar-backdrop {
        background-color: rgba(0, 0, 0, .5);
        width: auto;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;

    }

    .sidebar-panel {
        overflow: hidden;
        background-color: $black;
        position: fixed;
        right: 0;
        top: 0;
        height: 33vh;
        z-index: 99;
        width: 100%;
        cursor: pointer;
    }
</style>
