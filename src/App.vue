
<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <body>
      <router-view />
    </body>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    Navbar,
  },
  created() {
    AOS.init()
  }
};
</script>