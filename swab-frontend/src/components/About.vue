<template>
    <div v-if="this.getAllContent" id="about"> <!-- setting a v-if directive to check if all content is loaded -->
        <hr>
        <div>
            <h1>About us</h1>
        </div>
        <div class="about__content">
            <span></span>
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
    #about {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    h1 {
        color: white;
        text-align: center;
    }

    hr {
        width: 70%;
        margin: 5% auto;
        border-color: white;
        background-color: black;
        opacity: 0.5;
    }

    .about__content {
        height: 150px;
        width: auto;
        color: white;
        text-align: left;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 20px;
    }
</style>
