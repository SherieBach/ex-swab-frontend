<template>
    <div id="contact">
        <h2>Contact us</h2>
        <div class="contact-content">
            <h2>{{this.getAllContent.companyName}}</h2>
            <span>Contact us <a href="mailto:admin@softwarelse.se">@ softwarelse</a></span>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'Contact',
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
        margin: 40px 10px 40px 10px;

        @include flex($flexDir: column, $justify: space-around);

        h2 {
            color: $aquaWhite;
            font-size: 2em;
            text-align: center;
            text-transform: uppercase;
        }

        .contact-content {
            @include border();
            height: 150px;
            width: auto;
            color: $aquaWhite;
            text-align: left;
            padding: 20px;
            margin-top: 40px;

            span, a {
                text-transform: uppercase;
                color: $aquaWhite;
                text-decoration: none;
            }
        }
    }
</style>
