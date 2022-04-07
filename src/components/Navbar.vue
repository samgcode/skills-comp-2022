
<template>
  <div class="content-center mx-auto">
      <nav class="shadow-md w-full mx-auto">
        <div class="bg-white w-full h-16 flex md:justify-between justify-end md:rounded">
          <div class="text-black text-center align-middle my-auto md:block hidden ">
            <router-link to="/Home" class="px-5">Home</router-link>
            <router-link to="/Store" class="px-5">Store</router-link>
            <router-link to="/Contact" class="px-5">Contact us</router-link>
            <router-link to="/Home" class="px-5">Home</router-link>
          </div>
          <button class="w-6 h-6 my-auto text-black mx-5 md:hidden"  @click="open = !open">
              <svg v-if="open" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <svg v-if="!open" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
          <div v-if="open" class="w-full flex flex-col text-black align-middle z-50 my-auto bg-whiterounded-b md:hidden">
            <router-link to="/Home" class="mx-5 my-2">Home</router-link>
            <router-link to="/Store" class="mx-5 my-2">Store</router-link>
            <router-link to="/Contact" class="mx-5 my-2">Contact us</router-link>
            <router-link to="/Home" class="mx-5 my-2">Home</router-link>
          </div>
      </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>