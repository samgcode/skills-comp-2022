
<template>
  <div class="font-primary">
    <header>
      <Navbar></Navbar>
    </header>
    <body>
      <router-view />
    </body>
    <footer>
      <footbar />
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footbar from "./components/UIComponents/Footbar.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    Navbar,
    Footbar
  },
  created() {
    AOS.init();
  },
};
</script>