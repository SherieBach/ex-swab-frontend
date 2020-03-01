<template>
    <div id="home" v-on:scroll="handleScroll" :class="{'fadeIn scrollAnimation': handledScroll}">
        <div v-scrollanimation>
        <About/>
        </div>
        <CurriculumLink/>
    </div>
</template>

<script>
    import CurriculumLink from "../components/CurriculumLink";
    import About from "../components/About";
    import Navigation from "../components/Navigation";

    export default {
        name: 'home',
        data(){
            return{
                scrollEvent: null,
                handledScroll: false
            }
            },
        components: {
            Navigation,
            About,
            CurriculumLink // note to self used to be consultants
        },
        methods: {
            handleScroll(event) {
                console.log(event, "scroll event");
                this.handledScroll = true;
                setTimeout(function(){ this.handledScroll = false; }, 1000);
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>
<style scoped lang="scss">

    @import "../styles/global";

    #home {
        margin: 0;

    }

    .before-enter {
        @include slideBefore();
    }

    .enter {
        @include slideEnter
    }

</style>
