<template xmlns="http://www.w3.org/1999/html">
    <div id="cvLink">  <!-- adding a linked component for each CV and rerouting it, searchable URL tweaked by comp -->
        <h1 id="consultants_block">consultants</h1>

        <div v-scrollanimation v-if="this.getCVContent" class="cvLink-card">
            <div class="cvLink-card--profile ">
                <div><img src="../assets/images/gabriel.jpg" alt="Thumbnail photo of the consultant"></div>
                <h2>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h2>
            </div>
            <span class="cvLink-card--intro" v-for="text in this.getCVContent.cv.introText">{{text}}</span>
            <router-link :to="{
            name: 'curriculum',
            params: { name: this.getCVContent.cv.firstName +
            this.getCVContent.cv.lastName }
            }">
                <span>...</span>
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

        a, button {
            width: 20px;
            height: auto;
            color: $aquaWhite;
            text-decoration: none;
            text-transform: uppercase;

            &:hover {
                cursor: pointer;
            }

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

            img {
                width: 200px;
                height: auto;
            }
        }

        .cvLink-card--intro, span {
            text-align: right;
            color: $aquaWhite;
        }
    }

    .before-enter {
        opacity: 0;
        transform: translateY(70px);
        transition: all 2s ease-out;
    }
    .enter {
        opacity: 1;
        transform: translateY(0px);
    }

</style>
