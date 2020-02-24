<template xmlns="http://www.w3.org/1999/html">
    <div id="sticky">
        <div class="sticky-content">
            <button>
                <a href="mailto:admin@softwarelse.se"> CONTACT</a>
            </button>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'StickyContact',
    }
</script>
<style scoped lang="scss">
    @import "../styles/global";

    #sticky {

        .sticky-content {

            button {
                background-color: $aquaWhite;
                font-weight: bold;
                text-decoration: none;
                cursor: pointer;
                padding: 15px 0;
                border-radius: 15px 50px;
                border:none;

                a {
                    margin: 10px;
                    text-decoration: none;
                    color: black;
                    width: 60px;
                    height: auto;
                }
            }
        }
    }
</style>
