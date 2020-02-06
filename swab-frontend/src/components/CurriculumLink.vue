<template xmlns="http://www.w3.org/1999/html">
    <div id="cvLink">  <!-- adding a linked component for each CV and rerouting it, searchable URL tweaked by comp -->
        <h1 id="consultants_block">Our consultants</h1>

        <div v-scrollanimation v-if="this.getCVContent" class="cvLink-card">
            <div class="cvLink-card--profile ">
                <div>
                    <img src="../assets/images/gabriel.jpg" alt="Thumbnail photo of the consultant">
                </div>
                <h2>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h2>
            </div>
            <span class="cvLink-card--intro" v-for="text in this.getCVContent.cv.introText">{{text}}</span>
            <router-link :to="{
            name: 'curriculum',
            params: { name: this.getCVContent.cv.firstName +
            this.getCVContent.cv.lastName }
            }">
                <span> ... read more</span>
            </router-link>
        </div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'CurriculumLink',
        data() {
            return {}
        },
        methods: {
            ...mapActions([
                'loadSingleCvFromJson',
            ])
        },
        computed: {
            ...mapGetters([
                'getCVContent'
            ])
        },
        created() {
            console.log("calling json content ", this.getCVContent);
            this.loadSingleCvFromJson();
        }
    }
</script>
<style scoped lang="scss">
    @import "../styles/global";

    #cvLink {
        @include flex($justify: space-between, $flexDir: column);
        flex-wrap: wrap;

        h1 {
            color: $aquaWhite;
            text-align: center;
            padding: 15px;
            text-transform: uppercase;
        }

    }


    .cvLink-card {
        flex: 0 1 24%; /*flex-grow is 0, flex-shrink is 1, and the width is 24%.*/
        margin: 10px;
        padding: 10px;
        width: auto;
        height: 250px;
        overflow: hidden;
        border: grey 1px solid;


        .cvLink-card--profile {
            align-content: end;
            color: $aquaWhite;
            padding: 10px;

            img {
                width: 200px;
                height: auto;
                padding: 15px;
            }
        }

        .cvLink-card--intro, span {
            text-align: right;
            color: $aquaWhite;
        }

        a {
            font-style: italic;
            text-decoration: none;
        }
    }

    .before-enter {
        @include slideBefore();
    }

    .enter {
        @include slideEnter
    }

</style>
