<template>
    <div v-if="this.getAllContent" id="about"> <!-- setting a v-if directive to check if all content is loaded -->
        <div>
            <h1>About us</h1>
        </div>
        <div class="about-content">
            <div v-for="item in this.getAllContent.companyDescription.paragraphs"> <!-- adding a v-for directive to loop out the paragraphs-->
                <p>{{item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'About',
        methods: {
            ...mapActions([
                'loadAllJSONContent',
            ])
        },
        computed: {
            ...mapGetters([
                'getAllContent'
            ])
        },
        created() {
            console.log("calling json content ", this.getAllContent);
            this.loadAllJSONContent(); // calling the action from store to get all content

        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/global";


    #about {
        @include flex($flexDir: column);
        margin: 20px;
        background-color: $black;
    }

    h1 {
        color: $aquaWhite;
        text-align: center;
    }

    .about-content {
        height: 150px;
        width: auto;
        color: $aquaWhite;
        text-align: left;
        border-top-style: groove;
        border-bottom-style: groove;
        border-width: thin;
        border-color: $aquaWhite;
        padding: 20px;
    }

</style>
