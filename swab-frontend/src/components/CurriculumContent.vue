<template>
    <div id="cv">
        <div v-if="this.getCVContent" class="cv-card"> <!--if the data exists -->
            <div class="cv-card--header">
                <h1>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h1>
                <img src="../assets/images/gabriel.jpg" alt="A profile picture of the consultant">
            </div>
            <div class="cv-card--intro">
                <p v-for="text in this.getCVContent.cv.introText">{{text}}</p>
            </div>
            <div class="cv-card--comp">
                <h3>Key competencies</h3>
                <ul v-for="competence in this.getCVContent.cv.keyCompetencies">
                    <li>{{competence}}</li>
                </ul>
            </div>
            <div class="cv-card--skills">
                <h3>Skills</h3>
                <div v-for="skill in this.getCVContent.cv.skills">
                    <h4>{{skill.category}}</h4>
                    <ul v-for="skillName in skill.bulletPoints">
                        <li>{{skillName}}</li>
                    </ul>
                </div>
            </div>
            <div class="cv-card--techs">
                <h3>TECHNOLOGIES</h3>
                <table>
                    <tr v-for="tech in this.getCVContent.cv.technologies">
                        <th>{{tech.category}}</th>
                        <td>
                            {{tech.names.join(", ")}}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="cv-card--methods">
                <h3>METHODOLOGIES</h3>
                <div>
                    <span> {{this.getCVContent.cv.methodologies.join(", ")}}</span>
                </div>
            </div>
            <div class="cv-card--history">
                <h1>Employment history</h1>
                <div v-for="company in this.getCVContent.cv.workExperience">
                    <div v-bind:class="{ active: company.companyInfo.name === activeCompanyName }" class="company-name">
                        <div @click="toggleHistoryDetail(company.companyInfo.name)">
                            <img src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/32/Status-image-missing-icon.png"
                                 class="company-logo">
                            <span class="cv-card--history_title">{{company.companyInfo.name + " "}} </span>
                            <span class="cv-card--history_contractVia"> Assigned by {{company.contractVia + " "}}</span>
                        </div>
                        <transition name="fade">
                            <div v-if="activeCompanyName === company.companyInfo.name">
                                <span>{{renderMonths(company.timespan.from.month, 'eng') + " " + company.timespan.from.year + " - "}}</span>
                                <span v-if="company.timespan.to">{{company.timespan.to.month + " " + company.timespan.to.year}}</span>
                                <span v-else> now </span>
                                <h4>The company</h4>
                                <span>{{company.companyInfo.description}}</span>
                                <h3>My roles</h3>
                                <span v-for="role in company.roles">{{role}}</span>
                                <h3>Technical environment</h3>
                                <span v-for="techs in company.technicalEnvironment">{{techs + ", "}}</span>
                                <div v-if="company.achievementHighlights ">
                                    <h3>Achievement Highlights</h3>
                                    <div v-for="achievements in company.achievementHighlights">
                                        <p>{{achievements}}</p>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="cv-card--personalData">
                <h2>Education</h2>
                <div v-for="bar in this.getCVContent.cv.education">
                    <span> {{bar.school}} - {{bar.degree}}</span>
                </div>
                <h2>Interest</h2>
                <div v-for="interests in this.getCVContent.cv.interests">
                    <span> {{interests}}</span>
                </div>
                <h2>Personal Details</h2>
                <div v-for="details in this.getCVContent.cv.personalDetails">
                    <span> {{details}}</span>
                </div>
                <h2>Language</h2>
                <div v-for="lang in this.getCVContent.cv.languages">
                    <span> {{lang}}</span>
                </div>
                <h2>References</h2>
                <div v-for="ref in this.getCVContent.cv.references">
                    <span> {{ref}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'CurriculumContent',
        data() {
            return {
                activeCompanyName: "",
                months: {
                    eng: [
                        'January',
                        'February',
                        'Mars',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ],
                    swe: [
                        'Januari',
                        'Februari',
                        'Mars',
                        'April',
                        'Maj',
                        'Juni',
                        'Juli',
                        'Augusti',
                        'September',
                        'Oktober',
                        'November',
                        'December',
                    ],
                }
            }
        },
        methods: {
            ...mapActions([
                'loadSingleCvFromJson', // loading up the action from store
            ]),
            toggleHistoryDetail(companyName) {
                if (this.activeCompanyName === companyName) { // sets the company name to the active one
                    this.activeCompanyName = null;
                } else {
                    this.activeCompanyName = companyName;
                }
            },
            renderMonths(number, lang) {
                if (lang === 'eng') {
                    return this.months.eng[number - 1];
                } else if (lang === 'swe') {
                    return this.months.swe[number - 1];
                }
            },
        },
        computed: {
            ...mapGetters([
                'getCVContent' // adding the getter for rendering the data
            ]),

        },
        mounted() {
            this.renderMonths();

        },
        created() {
            console.log("calling json content ", this.getCVContent);
            this.loadSingleCvFromJson();
        }
    }
</script>
<style scoped lang="scss">
    @import "../styles/global";

    #cv {
        @include flex($justify: space-between);
        color: $aquaWhite;
        background-color: $black;
        text-decoration: none;
        margin: 60px 0 40px 0;


        h2, h3, h4 {
            text-decoration: underline;
        }

        .cv-card {
            @include border();
            margin: 10px;
            padding: 10px;
            text-align: left;

            h3 {
                font-size: 1.4em;
            }

            img {
                align-content: center;
                width: 200px;
                height: auto;
                padding: 20px;
            }

            .cv-card--header {
                margin: 15px;
            }

            .cv-card--intro {
                margin: 15px;
            }

            .cv-card--comp {
                margin: 15px;

                ul {
                    li {
                        text-decoration: none;
                    }
                }

            }

            .cv-card--skills {
                margin: 15px;
            }

            .cv-card--techs {
                margin: 15px;

                table {
                    border-collapse: collapse;
                    table-layout: fixed;
                    width: 100%;


                    table, td, th {
                        border-collapse: collapse;
                        border: 1px solid $aquaWhite;
                    }

                    td {
                    }

                    th {
                        width: 130px;
                        height: 20px;
                        text-align: left;
                        text-transform: uppercase;
                    }

                    th, td {
                        padding: 15px;
                    }
                }
            }

            .cv-card--methods {
                margin: 15px;
            }

            .cv-card--history {
                margin: 15px;

                .company-logo {
                    padding: 0;
                }

                .cv-card--history_contractVia {
                    color: #abb4d3cf;
                }


                img {
                    width: 50px;
                    height: auto;
                }

                .cv-card--history_title {
                    font-weight: bolder;
                    font-size: 1.6em;
                    text-decoration: underline;
                }
            }

            .cv-card--personalData {
                margin: 15px;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
    }

    .fade-enter, .fade-leave-to {

    }
</style>
