<template>
  <div id="home">
    <About />
    <Footer />
    <CurriculumLink />
  </div>
</template>

<script>
// @ is an alias to /src
import CurriculumLink from "../components/CurriculumLink";
import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default {
  name: 'home',
  components: {
    Navigation,
    Footer,
    Hero,
    About,
    CurriculumLink // note to self used to be consultants
  }
}
</script>
<style scoped lang="scss">

  #home {
    margin:0;
  }

</style>
