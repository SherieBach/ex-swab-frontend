<template>
    <div v-if="this.getAllContent" id="about"> <!-- setting a v-if directive to check if all content is loaded -->
        <div>
            <h1>About us</h1>
        </div>
        <div class="about-content">
            <div v-for="item in this.getAllContent.companyDescription.paragraphs">
                <!-- adding a v-for directive to loop out the paragraphs-->
                <span>{{item}} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.  </span>
            </div>
        </div>
        <div class="about-company_logos">

            <div v-scrollanimation class="about-services--top">
                <div class="about-services-skillbase column">
                    <img src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
                         class="klarna-image">
                </div>
                <div class="about-services-backend column">
                    <img src="../assets/images/company-logos/magine.png" class="magine-image">
                </div>
            </div>

            <div v-scrollanimation class="about-services--bottom">
                <div class="about-services-workflow column">
                    <img src="../assets/images/company-logos/Spotify_Icon_RGB_Green.png" class="spotify-image">
                </div>
                <div class="about-services-git column">
                    <img src="../assets/images/company-logos/dagensN.jpg" class="dn-image">
                </div>
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
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
        background: black;

        @include md {
            background: #0e0e0e;

        }

        h1 {
            color: $aquaWhite;
            text-align: center;
            text-transform: uppercase;
            margin: 0;
        }

        .about-content {
            height: auto;
            color: $aquaWhite;
            text-align: left;
            padding: 20px;
            margin: 33px;
            border: solid #171717 3px;
            background: #06121d;
            border-radius: 10px;
            -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 1);
            -moz-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 1);
            box-shadow: 0 0 15px 1px rgba(0, 0, 0, 1);

            @include md {
                width: 940px;
            }
            @include lg {
                width: 1260px;

            }

        }

        .about-company_logos {
            text-align: center;
            width: auto;
            padding: 20px 0 20px 0;
            margin: 35px 0 35px 0;
            background: black;

            @include md {
                background: #0F0F0F;
            }

            .column {
                padding: 20px 0 20px 0;
                width: 300px;
                height: auto;
            }

            span {
                color: $aquaWhite;
            }

            h3 {
                color: $aquaWhite;
                text-transform: uppercase;
                font-weight: bolder;
                letter-spacing: 0.1em;
            }

            .about-services--top {
                display: flex;
                flex-direction: column;
                align-items: center;
                flex-wrap: wrap;
                padding: 20px 0 20px 0;


                .klarna-image {
                    width: 250px;
                    height: auto;
                    padding: 15px;
                }

                .magine-image {
                    width: 150px;
                    height: auto;
                    padding: 15px;

                }
            }

            .about-services--bottom {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 0 20px 0;


                .spotify-image {
                    width: 150px;
                    height: auto;
                    padding: 15px;

                }

                .dn-image {
                    width: 180px;
                    height: auto;
                    padding: 15px;
                }
            }

            .before-enter {
                @include slideBefore();
            }

            .enter {
                @include slideEnter
            }
        }
    }
</style>
