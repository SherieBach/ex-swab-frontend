<template>
    <div v-if="this.getAllContent" id="about"> <!-- setting a v-if directive to check if all content is loaded -->
        <div>
            <h1>About us</h1>
        </div>
        <div class="about-content">
            <div v-for="item in this.getAllContent.companyDescription.paragraphs">
                <!-- adding a v-for directive to loop out the paragraphs-->
                <span>{{item}} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. </span>
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
        margin: 60px 10px 40px 10px;
        background-color: $black;
    }

    h1 {
        margin-top: 40px;
        color: $aquaWhite;
        text-align: center;
        text-transform: uppercase;
    }

    .about-content {
        @include border();
        height: auto;
        color: $aquaWhite;
        text-align: left;
        padding: 20px;
        margin: 33px;
    }

</style>
