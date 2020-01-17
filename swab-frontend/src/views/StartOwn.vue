<template>
    <div id="contact">
        <h2>Starting your own?</h2>
        <div class="contact-content">
            <div v-for="item in this.getAllContent.companyDescription.paragraphs">
                <!-- adding a v-for directive to loop out the paragraphs-->
                <p>{{item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'StartOwn',
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

    #contact {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin: auto;
        h2 {
            color: $aquaWhite;
            font-size: 2em;
            text-align: center;
            text-transform: uppercase;
        }

        .contact-content {
            height: 150px;
            width: auto;
            color: $aquaWhite;
            text-align: left;
            border: 1px solid grey;
            border-radius: 5px;
            padding: 20px;
        }
    }
</style>
