<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebar" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>


    import { mapMutations } from "vuex";
    import store from "../../store/modules/content";

    export default {
        name: 'SideBar',
        computed: {
            ...mapMutations([
                'isNavOpen'
            ]),
            isPanelOpen(){
                return store.state.isNavOpen;
            }
        },
        methods: {
            closeSidebar(){
                store.mutations.toggleNav();
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../styles/global";

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-100%);
        transition: all 150ms ease-in 0s;
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;

    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: $black;
        position: fixed;
        right: 0;
        top: 0;
        height: 28vh;
        z-index: 99;
        padding: 3rem 0 2rem 0;
        width: 100%;
        cursor: pointer;
    }
</style>
