<template>
    <div id="footer">
    <div class="footer-bgImage"></div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped lang="scss">

    @import "../styles/global";

    #footer {
        width: 100%;
        margin: 0;
        padding: 0;
        height: 15vh;

        .footer-bgImage {
            background: linear-gradient(
                            180deg, rgba(2, 0, 36, 0.024247198879551846) -10%,
                            rgba(0, 0, 0, 0.9878326330532213) 82%
            ),
            url("../assets/images/joel-filipe-sm.jpg") no-repeat center;
            background-size: cover;
            width: auto;
            height: 250%;
            transform: rotate(180deg);

            @include md{
                height: 200%;
                width: auto;
            }
            @include lg {
                height: 200%;
                width: auto;
            }

        }
    }

</style>
