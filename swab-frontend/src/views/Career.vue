<template>
    <div id="career">
        <h2>Work with us</h2>
        <div class="career-content">
            <h3> Ready to spread your wings?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'Career',
    }
</script>
<style scoped lang="scss">

    @import "../styles/global";

    #career {
        @include flex($justify: space-around);
        flex-direction: column;
        margin: auto;

        h2 {
            color: $aquaWhite;
            font-size: 2em;
            text-align: center;
            text-transform: uppercase;
        }

        .career-content {
            @include border();
            height: auto;
            color: $aquaWhite;
            text-align: left;
            padding: 20px;
            margin: 40px 10px 0 10px;
        }
    }
</style>
