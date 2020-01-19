<template>
    <div id="cvLink">  <!-- adding a linked component for each CV and rerouting it, searchable URL tweaked by comp-->
        <h1 id="consultants_block">Our consultants</h1>
        <div v-if="this.getCVContent" class="cvLink-card hoverOn" :style="{ width:bgWidth + 'px' }">
            <router-link :to="{
            name: 'curriculum',
            params: { name: this.getCVContent.cv.firstName +
            this.getCVContent.cv.lastName }
            }">
                <div class="cvLink-card--profile ">
                <div @mouseover="handleHoverIn"
                     @mouseout="handleHoverOut">
                    <img src="../assets/images/gabriel.jpg" alt="Thumbnail photo of the consultant">
                </div>
                    <h2>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h2>
                    <span class="cvLink-card--intro" v-for="text in this.getCVContent.cv.introText">{{text}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'CurriculumLink',
        data() {
            return {
                bgWidth: 300,
            }
        },
        methods: {
            ...mapActions([
                'loadSingleCvFromJson',
            ]),
            handleHoverIn() { // transition for hovering over the cv box container - enlarges it for view only (desktop)
                this.bgWidth = 500;

            },
            handleHoverOut() {
                this.bgWidth = 300;
            }
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
        @include flex($flexDir: column);
    }

    h1 {
        color: $aquaWhite;
        text-align: center;
        padding: 15px;
    }

    .cvLink-card {
        margin: 10px;
        padding: 10px;
        width: 300px;
        height: 250px;
        overflow: hidden;

        a {
            color: $aquaWhite;
            text-decoration: none;


            &:hover {
                cursor: pointer;
            }

        }

    }

    .cvLink-card--profile {
        align-content: end;

        img {
            width: 250px;
            height: auto;
        }
        .cvLink-card--intro {

        }

    }

    .hoverOn {
        transition: all 2.5s;
    }

</style>
