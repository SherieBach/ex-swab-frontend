<template>
    <div id="about">
        <div v-if="this.getAllContent" class="about__content">
            <h1>Who we are</h1>
            <span>{{this.getAllContent.companyName}}</span>
            <div v-for="item in this.getAllContent.companyDescription.paragraphs">
                <p>{{item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import store from "../store/modules/content";

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
            this.loadAllJSONContent();

        }
    }
</script>

<style scoped lang="scss">
    #about {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        border: 1px red solid;
        height: 300px;
        width: 100%;
        color: white;
    }

    .about__content {
        padding: 20px;
        border: lightgrey solid 1px;
    }
</style>
