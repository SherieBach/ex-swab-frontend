<template>
    <div id="header">
        <div class="bgImage">
            <img src="../assets/images/Bar.png" class="bar-menu" alt="menu bar">
            <img src="../assets/images/softwarelse.png" class="logo" alt="softwarelse logo">
            <img src="../assets/images/mouse-alt.png" class="mouse-scroll"  alt="">
        </div>
        <nav>
            <router-link to="/">Home</router-link>
            ||
            <!---<router-link :to="{ name: consults, hash: '#consults_block' }">Consults</router-link> ||---->
            <router-link to="/career">Career</router-link>
            ||
            <router-link to="/startown">Start up</router-link>
            ||
            <!---<router-link :to="{ name: contact, hash: '#contacts_block' }">Contact</router-link>--->
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>
<style scoped lang="scss">
    @import "../styles/global";

    div#header {
        width: auto;
        height: 55em;

        nav {

            display: none;

            @include lg {
                display: block;
            }
        }

        .bgImage {
            position: relative;;
            background: linear-gradient(
                            180deg,
                            rgba(2, 0, 36, 0.024247198879551846) 40%,
                            rgba(0, 0, 0, 0.8169642857142857) 92%),
            url("../assets/images/joel-filipe-sm.jpg") no-repeat center;
            background-size: cover;
            margin: 0;
            height: 56%;

        }

        .bar-menu {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 12%;
            height: auto;
        }

        .logo {
            position: absolute;
            top: 170px;
            left: 50px;
            width: 80%;
            height: auto;
            mix-blend-mode: luminosity;
        }

        .mouse-scroll {
            position: absolute;
            bottom: 50px;
            left: 180px;
            width: 6%;
            height: auto;
            mix-blend-mode: luminosity;


        }

        a {
            font-weight: bold;
            color: #2c3e50;
            background-size: 100% 100%;

            &.router-link-exact-active {
                color: #42b983;
            }
        }


    }
</style>
