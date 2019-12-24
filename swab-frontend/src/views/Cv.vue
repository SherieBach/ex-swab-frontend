<template>
    <div id="Cv">
        <router-link to="/">Back</router-link>
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
    #Cv {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: auto;
        margin: 10px;

        a {
            font-weight: bold;
            color: white;
            background-size: 100% 100%;
            text-decoration: none;
            text-align: right;
            padding: 2px 20px;
            cursor: pointer;

            &:hover {
                color: #7ca971;
            }

            &.router-link-exact-active {
                color: #42b983;
            }

        }
    }

</style>
