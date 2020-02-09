<template>
    <div id="sticky">
        <div class="sticky-content">
            <router-link to="/contact">
                <img src="../assets/images/mail.svg">
            </router-link>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'StickyContact'
    }
</script>
<style scoped lang="scss">
    @import "../styles/global";

    #sticky {

        .sticky-content {

            a {
                font-weight: bolder;
                color: $aquaWhite;
                text-decoration: none;
                letter-spacing: 0.25em;
                cursor: pointer;
                padding: 15px 0;

                img {
                    width: 60px;
                    height: auto;
                }
            }
        }
    }
</style>
