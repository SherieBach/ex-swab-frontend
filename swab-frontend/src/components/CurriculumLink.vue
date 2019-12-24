<template>
    <div id="cvLink">  <!-- adding a linked component for each CV and rerouting it, searchable URL tweaked by comp-->
        <h1 id="consultants_block">Consultants</h1>
        <div v-if="this.getCVContent" class="cvLink__card">
            <router-link
                    :to="{ name: 'curriculum', params: { name: this.getCVContent.cv.firstName + this.getCVContent.cv.lastName }}">
                <div class="cvLink__profile" >
                    <h3>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h3>
                    <img src="../assets/images/gabriel.jpg" alt="Thumbnail photo of the consultant">
                    <p v-for="text in this.getCVContent.cv.introText">{{text}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'CurriculumLink',
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

    h1 {
        color: white;
        text-align: center;
        padding: 15px;
    }
    .cvLink__card {
        display: flex;
        flex-flow: wrap;
        margin: 10px;
        border: solid grey 1px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;

        a {
            color: white;
            text-decoration: none;
        }

        .cvLink__profile {
            align-content: end;


            img {
                align-content: center;
                width: 200px;
                height: auto;
                padding: 20px;
            }

        }
    }


</style>
