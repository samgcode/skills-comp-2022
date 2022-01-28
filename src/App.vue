<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>

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