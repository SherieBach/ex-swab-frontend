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
        <div class="about-services">

            <div class="about-services--top">
                <div v-scrollanimation class="about-services-skillbase column">
                    <h3>Accessibility</h3>
                    <span>Adept knowledge of back-end programming security, language and framework</span>
                    <img src="../assets/images/gearDesktop.svg" class="laptop-image">
                </div>
                <div v-scrollanimation class="about-services-backend column">
                    <h3>Manage & hosting</h3>
                    <span>Ability to administrate database as well as handling scaling application</span>
                    <img src="../assets/images/DBcloud.svg" class="db-image">
                </div>
            </div>

            <div v-scrollanimation class="about-services--bottom">
                <div class="about-services-workflow column">
                    <h3>Agile environment</h3>
                    <span>Over 15 years of agile work method experience</span>
                    <img src="../assets/images/agile.svg" class="agile-image">
                </div>
                <div v-scrollanimation  class="about-services-git column">
                    <h3>Version control</h3>
                    <span>Experience with version control such as GIT and more</span>
                    <img src="../assets/images/git.svg" class="git-image">
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
        margin: 60px 0 60px 0;
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
        padding: 20px 0 20px 0;
        margin: 33px;
    }

    .about-services {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        width: auto;
        padding: 20px 0 20px 0;
        margin: 35px 0 35px 0;

        .column {
            display: flex;
            flex-direction: column;
            align-items: center;
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


            .laptop-image {
                width: 150px;
                height: auto;
                padding: 15px;
            }

            .db-image {
                width: 100px;
                height: auto;
                padding: 15px;

            }
        }

        .about-services--bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0 20px 0;


            .agile-image {
                width: 150px;
                height: auto;
                padding: 15px;

            }

            .git-image {
                width: 100px;
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

</style>
