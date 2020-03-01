<template>
    <div>
        <p class="title typeWriter-animate">Welcome </p>
    </div>
</template>

<script>
    export default {
        name: "TypeWriter"
    }
</script>

<style scoped lang="scss">
    @import "../styles/global";


    p {
        border-right: solid 3px rgba(140, 128, 206, 0.85);
        white-space: nowrap;
        overflow: hidden;
        font-family: $font-stack;
        font-size: 3.5em;
        color: $aquaWhite;
        margin: 0;

        @include lg {
            font-size: 3.7em;
        }
        @include xl {
            font-size: 4em;
        }
        @include xxl {
            font-size: 5em;
        }

        /* Animation */
        &.typeWriter-animate {
            animation: animated-text 3s steps(25, end) 1s 1 normal both,
            animated-cursor 1000ms steps(25, end) infinite;
        }
    }

    /* text animation */
@include lg {
    @keyframes animated-text {
        from {
            width: 0;
        }
        to {
            width: 250px;
        }
    }
    }
    /* cursor animations */

    @keyframes animated-cursor {
        from {
            border-right-color: rgba(140, 128, 206, 0.85);
        }
        to {
            border-right-color: transparent;
        }
    }

</style>
