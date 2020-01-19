<template>
    <div id="Cv">
        <router-link to="/">BACK TO HOMEPAGE</router-link>
        <CurriculumContent/>
    </div>
</template>
<script>
    import CurriculumContent from "../components/CurriculumContent";

    export default {
        name: 'Cv',
        components: {
            CurriculumContent
        },
    }
</script>
<style scoped lang="scss">
    @import "../styles/global";

    #Cv {
        @include flex($flexDir: column, $justify: space-around);
        width: 100%;
        height: auto;
        text-align: center;

        a {
            font-weight: bold;
            color: $aquaWhite;
            background-size: 100% 100%;
            text-decoration: none;
            text-transform: uppercase;
            padding: 2px 20px;

            margin:20px;
            cursor: pointer;

            &.router-link-exact-active {
                color: #42b983;
            }

        }
    }

</style>
