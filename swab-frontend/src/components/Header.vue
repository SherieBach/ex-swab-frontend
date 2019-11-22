<template>
    <div id="header">
        <div class="bgImage"></div>
        <nav>
            <router-link to="/">Home</router-link>  ||
            <!---<router-link :to="{ name: consults, hash: '#consults_block' }">Consults</router-link> ||---->
            <router-link to="/career">Career</router-link>  ||
            <router-link to="/startown">Start up</router-link>  ||
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
        height: 33em;
        background-size: 100% auto;

        .bgImage {
            margin: 0;
            height: 100%;
            background-size: cover;
                background: linear-gradient(
                                180deg,
                                rgba(2, 0, 36, 0.024247198879551846) 30%,
                                rgba(0, 0, 9, 0.5704656862745099) 62%,
                                rgba(0, 0, 0, 0.923406862745098) 92%),
                url("../assets/images/joel-filipe-_AjqGGafofE-unsplash 2@x2.jpg") no-repeat fixed center;
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
