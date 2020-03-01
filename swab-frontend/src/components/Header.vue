<template>
    <div id="header">
        <img v-if="{active: this.isNavOpen}" src="../assets/images/softwarelse_bright.svg" class="header-logo_desktop" alt="Softwarelse logotype">
        <div :class="cardStyle"  class="header-bgImage" ref="bgCard"
             @mousemove="handleMouseMove"
             @mouseenter="handleMouseEnter"
             @mouseleave="handleMouseLeave">
            <!-- Note to self; add component and set the mobile view in method -->
            <TypeWriterTitle class="typeWriter-animate"/>
            <div class="header-menu">
                <Bar class="burger"/>
            </div>
            <SideBar>
                <ul class="sidebar-links">
                    <router-link v-for="routes in links"
                                 v-bind:key="routes.id"
                                 :to="`${routes.page}`">
                        <li v-scrollanimation @click="closeSidebar">{{routes.text}}</li>
                    </router-link>
                </ul>
            </SideBar>
            <img v-scrollanimation src="../assets/images/mouse-alt2.png" class="header-mouse mouse-animate"
                 alt="Advisory image of a mouse referring to scroll">
        </div>
        <img src="../assets/images/softwarelse_bright.svg" class="header-logo" alt="Softwarelse logotype">
    </div>
</template>
<script>
    import Bar from "./mobile-menu/Bar";
    import SideBar from "./mobile-menu/SideBar";
    import store from "../store/modules/content";
    import TypeWriterTitle from "./TypeWriterTitle";


    export default {
        name: 'Header',
        components: {
            SideBar,
            Bar,
            TypeWriterTitle
        },
        data() {
            return {
                isOpen: false,
                links: [
                    {
                        id: 0,
                        text: 'Home',
                        page: '/'
                    },
                    {
                        id: 2,
                        text: 'Career',
                        page: '/career'
                    },
                    {
                        id: 3,
                        text: 'Contact',
                        page: '/contact'
                    },
                    {
                        id: 4,
                        text: 'Start own',
                        page: '/startown'
                    },
                    {
                        id: 5,
                        text: 'Consultants',
                        page: '/curriculum'
                    }
                ],
                mouseX: 0,
                mouseY: 0,
                width: 0,
                height: 0,
                mouseLeave: null
            }
        },
        methods: {
            closeSidebar() {
                store.mutations.toggle();
            },
            handleMouseMove(e) {
                this.mouseX = e.pageX - this.$refs.bgCard.offsetLeft - this.width / 2;
                this.mouseY = e.pageY - this.$refs.bgCard.offsetTop - this.height / 2;
            },
            handleMouseEnter() {
                clearTimeout(this.mouseLeaveDelay)

            },
            handleMouseLeave() { // set it to default
                this.mouseLeaveDelay = setTimeout(() => {
                    this.mouseX = 0;
                    this.mouseY = 0;
                }, 2000);
            }
        },
        computed: {
            mousePX() {
                return this.mouseX / this.width; // take mouse pos X and divide with width
            },
            mousePY() {
                return this.mouseY / this.height; // take mouse pos Y and divide with height
            },
            cardStyle() { // bind style with func
                const rotateX = this.mousePX * 15; // angles which it will rotate in Y and X pos
                const rotateY = this.mousePY * -15;
                return {
                    transform: `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`,// set the transform rotate in both angles by the mouse pos +

                };
            },
        },

        mounted() {
            this.width = this.$refs.bgCard.offsetWidth;
            this.height = this.$refs.bgCard.offsetHeight;
        }
    }
</script>

<style scoped lang="scss">

    @import "../styles/global";

    div#header {
        position: relative;
        width: 100%;
        height: 35em;

        @include md {
            background: #0e0e0e;
            display: flex;
            justify-content: center;
            width: 100%;
            height: auto;
        }

        .header-logo {
            position: absolute;
            top: 34%;
            left: 22%;
            width: 60%;
            height: auto;
            z-index: 0;

            @include md {
                display: none;
            }
        }

        .header-logo_desktop {
            display: none;

            @include md {
                display: block;
                position: absolute;
                top: 45px;
                left: 46px;
                z-index: 999;
                width: 23%;
            }

            @include lg {
                top: 50px;
                left: 46px;
                width: 23%;
            }
            @include xl {
                top: 50px;
                left: 46px;
                width: 25%;
            }
            @include xxl {
                top: 50px;
                left: 46px;
                width: 25%;
            }

        }

        /*    @include md {
                height: 50em;
            }
            @include xl {
                height: 70em;
            }*/

        .typeWriter-animate {
            display: none;

            @include md {
                display: block;
                position: absolute;
                right: 5%;
                bottom: 45%;
                z-index: 999;
            }

            @include lg {


            }
            @include xl {

            }
        }

        .header-bgImage {
            position: relative;
            background: linear-gradient(
                            180deg, rgba(2, 0, 36, 0.024247198879551846) 40%,
                            rgba(0, 0, 0, 0.9878326330532213) 92%
            ),
            url("../assets/images/joel-filipe-sm.jpg") no-repeat center;
            background-size: cover;
            margin: 0;
            height: 100%;

            @include md {
                padding-top: 56.25%;
                background: url("../assets/images/joel-filipe-_AjqGGafofE-unsplash 2@x2.jpg");
                width: 80%;
                height: auto;
                background-size: cover;
                margin: 40px;
                opacity: .6;
                box-shadow: 0 0 15px 1px #000000;
                border-radius: 10px;
                transform: perspective(260px);
                transform-style: preserve-3d;
                transition: 1s $returnEasing,
                opacity 4s 100ms $returnEasing;


                &:hover {
                    transition: 0.6s $hoverEasing, opacity 2s,
                    box-shadow 2s $hoverEasing;
                    opacity: 1;

                }
            }
        }

        .header-menu {
            display: flex;
            justify-content: flex-end;
            padding: 0.5rem 0.8rem;
            z-index: 5;

            @include md {
                display: none;
            }

            .burger {
                padding: 20px 0;
            }

        }

        .sidebar-links, a {
            width: 100%;
            list-style-type: none;
            text-decoration: none;
            letter-spacing: 0.15em;
            color: $aquaWhite;
            padding-left: 0;


            li {
                font-size: 1.3em;
                padding: 10px 0 15px 40px;
            }

            .before-enter {
                opacity: 0;
                transform: translateY(10px);
                transition: all .6s ease-out;
            }

            .enter {
                opacity: 1;
                transform: translateY(0px);
            }

        }

        .header-mouse {
            position: absolute;
            bottom: 50px;
            left: 50%;
            width: 1em;
            height: auto;

            @include md {
                bottom: 30px;
                width: 1.3em;
            }
            @include lg {
                bottom: 50px;
                width: 1.5em;
            }
            @include xl {
                bottom: 60px;
                width: 1.7em;
            }
            @include xxl {
                width: 1.9em;
            }

            &.header-mouse {
                animation: bounce 0.8s;
                animation-direction: alternate;
                animation-iteration-count: infinite;
            }

            @keyframes bounce {
                0% {
                    transform: translateY(0);

                }
                100% {
                    transform: translateY(-25px);
                }
            }
        }

    }

</style>
