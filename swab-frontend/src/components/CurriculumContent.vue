<template>
    <div id="cv">
        <div v-if="this.getCVContent" class="cv-card">
            <div class="cv-card--header">
                <h3>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h3>
                <img src="../assets/images/gabriel.jpg" alt="A profile picture of the consultant">
            </div>
            <div class="cv-card--intro">
                <p v-for="text in this.getCVContent.cv.introText">{{text}}</p>
            </div>
            <div class="cv-card--comp">
                <h2>Key competencies</h2>
                <ul v-for="competence in this.getCVContent.cv.keyCompetencies">
                    <li>{{competence}}</li>
                </ul>
            </div>
            <div class="cv-card--skills">
                <h2>Skills</h2>
                <div v-for="skill in this.getCVContent.cv.skills">
                    <h4>{{skill.category}}</h4>
                    <ul v-for="skillName in skill.bulletPoints">
                        <li>{{skillName}}</li>
                    </ul>
                </div>
            </div>
            <div class="cv-card--techs">
                <h2>TECHNOLOGIES</h2>
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
                <h2>METHODOLOGIES</h2>
                <div>
                    <span> {{this.getCVContent.cv.methodologies.join(", ")}}</span>
                </div>
            </div>
            <div class="cv-card--history">
                <h2>Employment history</h2>
                <div v-for="company in this.getCVContent.cv.workExperience">
                    <h4>{{company.contractVia}}</h4>
                    <span v-for="time in company.timespan"> {{time.month}} {{" - " +time.year}}</span>
                    <h3>{{company.companyInfo.name}}</h3>
                    <h4>The company</h4>
                    <span>{{company.companyInfo.description}}</span>
                    <h3>My roles</h3>
                    <span>{{company.roles[0]}}</span>
                    <h3>Technical environment</h3>
                    <span>{{company.technicalEnvironment[0]}}</span>
                    <h3>Achievement Highlights</h3>
                    <div v-for="achievements in company.achievementHighlights">
                        <p>{{achievements}}</p>
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
        methods: {
            ...mapActions([
                'loadSingleCvFromJson', // loading up the action from store
            ])
        },
        computed: {
            ...mapGetters([
                'getCVContent' // adding the getter for rendering the data
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

    #cv {
        @include flex($flexWrap: wrap, $justify: space-between);
        margin: 0;
        color: $aquaWhite;
        background-color: $black;
        text-decoration: none;

        .cv-card {
            @include border();
            margin: 10px;
            padding: 10px;
            text-align: left;

            h3 {
                font-size: 1.5em;
            }

            img {
                align-content: center;
                width: 200px;
                height: auto;
                padding: 20px;
            }
            .cv-card--header{

            }
            .cv-card--intro {

            }

            .cv-card--comp {
                margin: auto;

                ul {
                    li {
                        text-decoration: none;
                    }
                }

            }
            .cv-card--skills {
            }

            .cv-card--techs {
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
            .cv-card--methods{
            }
            .cv-card--history{
            }
            .cv-card--personalData {
            }
        }
    }
</style>
