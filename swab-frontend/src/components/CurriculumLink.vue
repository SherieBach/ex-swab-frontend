<template>
    <div id="cvLink">  <!-- adding a linked component for each CV and rerouting it, searchable URL tweaked by comp -->
        <header>
            <h1>Our consultants</h1>
        </header>
        <main v-if="this.getCVContent" class="cvLink-card--container">
            <article v-scrollanimation class="cvLink-card--profile ">
                <div class="column">
                    <img src="../assets/images/gabriel.jpg" alt="Thumbnail photo of Gabriel Klappenbach">
                    <h2>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h2>
                    <p class="title">CEO & Founder</p>
                    <div class="cvLink-card--profile_icons">
                        <a href="https://twitter.com/gabbah79"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/gabrielklappenbach/"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </div>
                    <div>
                            <span class="cvLink-card--intro"
                                  v-for="text in this.getCVContent.cv.introText">{{text}}</span>
                        <router-link :to="{
            name: 'curriculum',
            params: { name: this.getCVContent.cv.firstName +
            this.getCVContent.cv.lastName }
            }">
                            <span> ... read more</span>
                        </router-link>
                    </div>
                </div>
            </article>
            <!-- start of ex profile-->
            <article v-scrollanimation class="cvLink-card--profile extra-profile ">
                <div class="column">
                    <img src="../assets/images/blank-profile.png" alt="Thumbnail photo of Gabriel Klappenbach">
                    <h2>Johan Kjölhede</h2>
                    <p class="title">CEO & Founder</p>
                    <div class="cvLink-card--profile_icons">
                        <a href="https://twitter.com/gigurra"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/johan-kj%C3%B6lhede-a763b76a/"><i
                                class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </div>
                    <div>
                        <span class="cvLink-card--intro">Software Engineer and Systems Architect Consultant at Samtrans</span>
                        <span> ... read more</span>
                    </div>
                </div>
            </article>
            <!--end of ex profile-->
        </main>
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

        h1 {
            color: $aquaWhite;
            text-align: center;
            padding: 15px;
            text-transform: uppercase;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: center;
            background: $black;

            @include md{
                background: #0F0F0F;

            }
        }
    }

    .cvLink-card--container {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-around;
        background: $black;

        @include md{
            background: #0F0F0F;

        }


        .cvLink-card--profile {
            flex: 0 0 80%;
            padding: 10px;
            max-width: 350px;
            color: $aquaWhite;
           border: 3px #171717 solid;
            background: rgb(27, 27, 27);
            margin: 25px 0 25px 0;
            border-radius: 10px;
            -webkit-box-shadow: 0 0 15px 1px rgba(0,0,0,1);
            -moz-box-shadow: 0 0 15px 1px rgba(0,0,0,1);
            box-shadow: 0 0 15px 1px rgba(0,0,0,1);

            @include md {
                /*background: #171717;*/
            }

            img {

                width: 100%;
                border-radius: 10px;
            }

            .cvLink-card--profile_icons {
                margin: 24px 0;

                i {
                    text-transform: uppercase;
                    text-decoration: none;
                    font-size: 22px;
                    color: $aquaWhite;
                    padding: 10px;
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

            button:hover, a:hover {
                opacity: 0.7;
            }
        }
    }


    .before-enter {
        @include slideBefore();
    }

    .enter {
        @include slideEnter
    }

</style>
