<template>
    <div id="cv">
        <div v-if="this.getCVContent" class="cv__card">
            <div class="cv__profile">
                <h2>{{this.getCVContent.cv.firstName + " " + this.getCVContent.cv.lastName}}</h2>
                <img src="../assets/images/gabriel.jpg">
                <p v-for="text in this.getCVContent.cv.introText">{{text}}</p>
            </div>
             <div class="cv__card-comp">
                 <h1>Key competencies</h1>
                 <ul v-for="competence in this.getCVContent.cv.keyCompetencies">
                     <li>{{competence}}</li>
                 </ul>
             </div>
              <div class="cv__card-skills">
                 <h1>Skills</h1>
                 <div v-for="skill in this.getCVContent.cv.skills">
                     <h4>{{skill.category}}</h4>
                     <ul v-for="skillName in skill.bulletPoints">
                         <li>{{skillName}}</li>
                     </ul>
                 </div>
             </div>
               <div class="cv__card-techs">
                  <h1>TECHNOLOGIES</h1>
                   <table>
                       <tr v-for="tech in this.getCVContent.cv.technologies">
                           <th>{{tech.category}}</th>
                           <td>
                               {{tech.names.join(", ")}}
                           </td>
                       </tr>
                   </table>
              </div>
                <div class="cv__card-method">
                     <h1>METHODOLOGIES</h1>
                     <div>
                         <span> {{this.getCVContent.cv.methodologies.join(", ")}}</span>
                     </div>
                 </div>
                <div class="cv__card-history">
                     <h1>Employment history</h1>
                     <div v-for="company in this.getCVContent.cv.workExperience">
                         <h4>{{company.contractVia}}</h4>
                         <span v-for="time in company.timespan"> {{time.month}} {{time.year}}</span>
                         <h3>{{company.companyInfo.name}}</h3>
                         <h4>The company</h4>
                         <span>{{company.companyInfo.description}}</span>
                         <h4>My roles</h4>
                         <span>{{company.roles[0]}}</span>
                         <h4>Technical environment</h4>
                         <span>{{company.technicalEnvironment[0]}}</span>
                         <h4>Achievement Highlights</h4>
                         <div v-for="achievements in company.achievementHighlights">
                             <p>{{achievements}}</p>
                         </div>
                     </div>
                 </div>
            <div class="cv__card-personalDetails">
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
        name: 'Curriculum',

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

    #cv {
        color: black;
        background-color: white;



        .cv__card {
            display: flex;
            flex-flow: wrap;
            border: 1px solid red;
            margin: 10px;

            h3 {
                font-size: 1.5em;
            }

            .cv__profile {
                border: 1px solid red;
                align-content: end;

                img {
                    border-radius: 20%;
                    width: 200px;
                    height: auto;
                    padding: 20px;
                }

            }

            .cv__card-skills {
                border: 1px solid red;
            }

            .cv__card-comp {
                border: 1px solid red;
                margin: auto;

                ul {
                    li {
                        text-decoration: none;
                    }
                }

            }

            .cv__card-techs {
                border: 1px solid red;

                table {
                    border-collapse: collapse;
                    table-layout: fixed;
                    width: 100%;


                    table, td, th {
                        border-collapse: collapse;
                        border: 1px solid black;
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
        }
    }

</style>
