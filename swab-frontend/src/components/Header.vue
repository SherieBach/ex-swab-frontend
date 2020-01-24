<template>
    <div id="header">
        <div class="header-bgImage">
            <!-- Note to self; add component and set the mobile view in method -->
            <div class="header-menu">
                <Bar/>
            </div>
            <SideBar class="sideBar-component">
                <div class="header-logo--holder">
                </div>
                <ul class="sidebar-links">
                    <router-link v-for="routes in links"
                                 v-bind:key="routes.id"
                                 :to="`${routes.page}`" > <li @click="closeSidebar">{{routes.text}}</li>
                    </router-link>
                </ul>
            </SideBar>
            <img src="../assets/images/softwarelse.svg" class="header-logo" alt="Softwarelse logotype">
            <img src="../assets/images/mouse-alt2.png" class="header-mouse mouse-animate"
                 alt="Advisory image of a mouse referring to scroll">
        </div>
    </div>
</template>
<script>
    import Bar from "./mobile-menu/Bar";
    import SideBar from "./mobile-menu/SideBar";
    import store from "../store/modules/content";

    export default {
        name: 'Header',
        components: {
            SideBar,
            Bar,
        },
        data() {
            return {
                isOpen: false,
                links: [
                    {
                        id: 0,
                        text: 'Home',
                        page:'/'
                    },
                    {
                        id: 2,
                        text: 'Career',
                        page:'/career'
                    },
                    {
                        id: 3,
                        text: 'Contact',
                        page:'/contact'
                    },
                    {
                        id: 4,
                        text: 'Start own',
                        page:'/startown'
                    },
                    {
                        id: 5,
                        text: 'Consultants',
                        page:'/curriculum'
                    }
                ]
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

    @import "../styles/global";

    div#header {
        position: relative;
        width: auto;
        height: 40em;
        margin-bottom: 20px;

        @include md {
            height: 50em;
        }
        @include xl {
            height: 70em;
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

            .header-logo--holder {
                position: relative;


                .header-btn--thumbnail {
                    position: absolute;
                    width: auto;
                    height: auto;
                    top: -25px;
                    left: 133px;
                    margin-left: 10px;

                }
            }

            @include lg {
                background: linear-gradient(
                                180deg, rgba(2, 0, 36, 0.024247198879551846) 40%,
                                rgba(0, 0, 0, 0.9878326330532213) 92%
                ),
                url("../assets/images/joel-filipe-_AjqGGafofE-unsplash 2@x2.jpg") no-repeat center;
                background-size: cover;
                margin: 0;
                height: 100%;
            }

            .header-menu {
                @include flex($justify: flex-end);
                padding: 0.5rem 0.8rem;
                z-index: 5;

                @include md {
                    display: none;
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


            }

            .header-mouse {
                position: absolute;
                bottom: 50px;
                left: 180px;
                width: 4.5%;
                height: auto;
                mix-blend-mode: luminosity;

                @include md {
                    bottom: 50px;
                    left: 375px;
                    width: 1.4em;
                }
                @include lg {
                    bottom: 50px;
                    left: 500px;
                    width: 1.6em;
                }
                @include xl {
                    bottom: 155px;
                    left: 800px;
                    width: 1.8em;
                }

                &.header-mouse {
                    animation: bounce 0.6s;
                    animation-direction: alternate;
                    animation-iteration-count: infinite;
                }

                @keyframes bounce {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-15px);
                    }
                }
            }

            .header-logo {
                position: absolute;
                top: 230px;
                left: 48px;
                width: 80%;
                height: auto;

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
        }
    }
</style>
