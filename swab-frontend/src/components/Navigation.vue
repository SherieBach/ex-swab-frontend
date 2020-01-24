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
        font-size: 1.5em;
        color: $aquaWhite;
        margin: 60px 0 60px 0;


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

                a {
                    position:relative;
                    font-weight: bolder;
                    color: $aquaWhite;
                    text-decoration: none;
                    letter-spacing: 0.25em;
                    cursor: pointer;
                    padding: 15px 0;
                }
                a::after {
                    position: absolute;
                    content:'';
                    width:0;
                    height:1px;
                    background:$aquaWhite;
                    left: 0;
                    bottom:0;
                    transition: 0.5s ease-in;
                }
                a:hover::after {
                    width:100%;
                }
            }
        }
    }

</style>
