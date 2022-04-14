
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
    Footbar,
  },
  created() {
    AOS.init();
  },
};
</script>

<style>
.btn-primary {
  @apply rounded-md transform transition hover:-translate-y-0.5 hover:bg-primary-light active:bg-primary-superlight font-semibold hover:shadow-md hover:shadow-primary-dark bg-primary p-3 px-6;
}
.btn-primary-outline {
  @apply text-primary p-2 py-1.5 rounded-md font-bold border-4 border-primary transition hover:bg-red-100 active:bg-red-300 hover:shadow-md hover:shadow-primary
}
.btn-white-outline {
  @apply py-2.5 px-6 border-2 border-white hover:bg-gray-700 active:bg-gray-500 rounded-md inset-1 text-white hover:shadow-md hover:shadow-white
}
</style>