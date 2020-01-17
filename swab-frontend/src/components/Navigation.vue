<template>
    <div id="nav">
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/career">Career</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
             <!--   <li>
                    <router-link to="/startown">Start own</router-link>
                </li>-->
                <li>
                    <router-link :to="{ hash: '#consultants_block'}">Consultants</router-link>
                </li>
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
        font-size: 1.5em;
        color: $aquaWhite;

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }

        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
        {
            opacity: 0;
            min-height: 100%;
        }

        nav {
            @include sm {
                display: none;
            }
            @include lg {
                display: block;
            }


            ul {
                @include flex($justify: space-evenly);
                list-style: none;
                padding: 0;
                margin: 0 20px 0 0;

                li {
                    padding: 2px 20px;


                    a {
                        font-weight: bold;
                        color: $aquaWhite;
                        background-size: 100% 100%;
                        text-decoration: none;
                        cursor: pointer;

                        &.router-link-exact-active {
                            text-decoration: underline;
                        }

                    }
                }
            }
        }
    }

</style>
