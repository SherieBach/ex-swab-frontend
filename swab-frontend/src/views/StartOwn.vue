<template>
    <div id="contact">
        <h2>Starting your own?</h2>
        <div class="contact-content">
                <!-- adding a v-for directive to loop out the paragraphs-->
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'StartOwn',
    }
</script>
<style scoped lang="scss">
    @import "../styles/global";

    #contact {
        @include flex($justify: space-around , $flexDir: column);
        margin: 60px 10px 40px 10px;


        h2 {
            color: $aquaWhite;
            font-size: 2em;
            text-align: center;
            text-transform: uppercase;
        }

        .contact-content {
            @include border();
            height: auto;
            color: $aquaWhite;
            text-align: left;
            padding: 20px;
        }
    }
</style>
