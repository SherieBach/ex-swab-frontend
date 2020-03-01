<template>
    <div id="nav"> <!--underline hover on mousdeover animate-->
        <nav>
            <ul>
                <router-link to="/">
                    <li>
                        Home
                    </li>
                </router-link>
                <router-link to="/career">
                    <li>
                        Career
                    </li>
                </router-link>
                <router-link to="/contact">
                    <li>
                        Contact
                    </li>
                </router-link>
                <router-link :to="{ hash: '#consultants_block'}">
                    <li>
                        Consultants
                    </li>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>

    export default {
        name: 'Navigation',
    }

</script>

<style scoped lang="scss">
    @import "../styles/global";

    #nav {
        position: relative;
        color: $aquaWhite;


        @include lg {

            margin: 0 0 60px 0;
        }

        nav {
            display: none;

            @include md {
                display: block;
            }

            ul {
                display: flex;
                justify-content: space-around;
                list-style: none;
                padding: 0;
                margin: 0;
                position: absolute;
                top: 45px;
                right: 0;
                z-index: 999;
                font-size: 1em;

                @include lg { //992
                    top: 55px;
                    font-size: 1.2em;
                }

                @include xl { //1200
                    top: 60px;
                    font-size: 1.4em;
                }

                @include xxl { //1400
                    top: 65px;
                    right: 10px;
                    font-size: 1.5em;
                }


                a {
                    position: relative;
                    font-weight: bolder;
                    color: $aquaWhite;
                    text-decoration: none;
                    letter-spacing: 0.25em;
                    cursor: pointer;
                    padding: 15px 0;
                    margin-right: 35px;

                    &::after {
                        position: absolute;
                        content: '';
                        width: 0;
                        height: 1px;
                        background: $aquaWhite;
                        left: 0;
                        bottom: 0;
                        transition: 0.4s ease-out;
                    }

                    &:hover::after {
                        width: 100%;
                        transition: 0.1s ease-in;

                    }

                    @include lg {
                        margin-left: 30px;

                    }
                    @include xl {
                        margin-left: 35px;
                    }
                    @include xxl {
                        margin-left: 65px;
                    }
                }


            }
        }
    }

</style>
