<template>
    <div id="consultant_block">
        <h1> Consultants</h1>
        <Curriculum />
    </div>
</template>

<script>
    import Curriculum from "./Curriculum";
    export default {
        name: 'Consultants',
        components: {
            Curriculum
        }
    }
</script>
<style scoped lang="scss">
    h1 {
        color: white;
    }
</style>
