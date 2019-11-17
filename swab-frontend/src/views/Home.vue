<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hero />
    <About />
    <Consults />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "../components/About";
import Consults from "../components/Consults";
import Hero from "../components/Hero";

export default {
  name: 'home',
  components: {
    Hero,
    Consults,
    About,
  }
}
</script>
