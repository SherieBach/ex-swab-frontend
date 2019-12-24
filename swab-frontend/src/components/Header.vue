<template>
    <div id="header">
        <div class="bgImage">
            <img src="../assets/images/softwarelse.png" class="logo" alt="softwarelse logo">
            <img src="../assets/images/mouse-alt.png" class="mouse-scroll" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                show: true,
            }
        }
    }
</script>
<style scoped lang="scss">

    @import "../styles/global";

    div#header {
        width: auto;
        height: 40em;
        margin-bottom: 20px;

        @include md {
            height: 50em;
        }
        @include xl {
            height: 70em;
        }

        .bgImage {
            position: relative;
            background: linear-gradient(
                            180deg, rgba(2, 0, 36, 0.024247198879551846) 40%,
                            rgba(0, 0, 0, 0.9878326330532213) 92%
            ),
            url("../assets/images/joel-filipe-sm.jpg") no-repeat center;
            background-size: cover;
            margin: 0;
            height: 100%;

            @include xl {
                background: linear-gradient(
                                180deg, rgba(2, 0, 36, 0.024247198879551846) 40%,
                                rgba(0, 0, 0, 0.9878326330532213) 92%
                ),
                url("../assets/images/joel-filipe-_AjqGGafofE-unsplash 2@x2.jpg") no-repeat center;
                background-size: cover;
                margin: 0;
                height: 100%;
            }
        }

        /* .bar-menu {  // Note to self, add new component for mobile navigation
             position: absolute;
             top: 10px;
             right: 10px;
             width: 12%;
             height: auto;
             opacity: 1;
         }*/

        .logo {
            position: absolute;
            top: 230px;
            left: 48px;
            width: 80%;
            height: auto;
            mix-blend-mode: luminosity;

            @include md {
                top: 225px;
                left: 200px;
                width: 50%;
            }

            @include lg {
                top: 270px;
                left: 233px;
                width: 55%;
            }
            @include xl {
                top: 390px;
                left: 500px;
                width: 40%;
            }
        }

        .mouse-scroll {
            position: absolute;
            bottom: 50px;
            left: 180px;
            width: 4.5%;
            height: auto;
            mix-blend-mode: luminosity;

            @include md {
                bottom: 50px;
                left: 375px;
                width: 1.6%;
            }
            @include lg {
                bottom: 50px;
                left: 500px;
                width: 1.6%;
            }
            @include xl{
                bottom: 255px;
                left: 800px;
                width: 1.6%;
            }

        }


    }
</style>
