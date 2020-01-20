<template>
    <div id="footer">
    <section> <!-- used illustrator to design my svg curved footer-->
        <svg class="curved-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400.66 108.53"><path class="cls-1" d="M707.47,225.48" transform="translate(0.16 -191.97)"/><path class="cls-2" d="M1183.53,339.29" transform="translate(0.16 -191.97)"/><path class="cls-2" d="M0,250.46A227.08,227.08,0,0,0,82.91,263C153.13,260,173,224.31,241.13,206.05c85.47-22.9,167.92,2.86,194.31,11.1,73.92,23.1,121.69,63.28,151.28,41.64,17-12.4,11.44-33,29.15-43,26.55-15,59.52,19.73,101.32,36.08,107.56,42.08,180.26-74.06,315.06-37.47,50.9,13.82,43.24,31.11,86,36.08,58.63,6.81,125.53-13,217.9-43,30.64-10,63.8-24,63.8-7.09V300H0" transform="translate(0.16 -191.97)"/>
            <linearGradient id="gradient-vertical" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--color-stop-1)" />
                <stop offset="20%" stop-color="var(--color-stop-2)" />
                <stop offset="40%" stop-color="var(--color-stop-3)" />
                <stop offset="80%" stop-color="var(--color-stop-4)" />
                <stop offset="100%" stop-color="var(--color-stop-5)" />
            </linearGradient>
        </svg>
    </section>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>
<style scoped lang="scss">
    #footer {
        margin: 0;
        height: 40px;
        width: 100%;

        section {
            position: relative;
            margin: 0;
            padding:0;
            width: 100%;
            height: 15vh;
        }

        .curved-line {
            position: absolute;
            bottom: 0;

            &.curved-line path{
                fill: url(#gradient-vertical) gray;

            }
            #gradient-vertical {
                --color-stop-1: #325674;
                --color-stop-2: #2f4a67;
                --color-stop-3: #293f56;
                --color-stop-4: #1b2938;
                --color-stop-5: #000a16;
            }

        }
    }
</style>
