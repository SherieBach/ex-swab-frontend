<template>
  <div class="home">
    <About />
    <Consults />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "../components/About";
import Consults from "../components/Consultants";
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
