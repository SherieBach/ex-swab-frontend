<template>
    <div id="nav">
        <router-link to="/">Home</router-link>  ||
        <router-link :to="{ name: consults, hash: '#consults_block' }">Consults</router-link> ||
        <router-link to="/career">Career</router-link>  ||
        <router-link to="/startown">Start up</router-link>  ||
        <router-link :to="{ name: contact, hash: '#contacts_block' }">Contact</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>
<style scoped lang="scss">

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
