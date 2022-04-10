<template>
  <div class="flex justify-center pt-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4" data-aos="fade-up">
      <div class="w-full rounded-lg shadow-lg">
        <div class="px-8 pt-8 w-96">
          <h1 class="text-3xl pb-2">Contact RapidAir</h1>
        </div>
        <div class="text-xl px-4 bg-white max-w-full">
          <form @submit.prevent="submitForm()" @change="validateForm">
            <div class="mb-4">
              <label class="form-label" for="name"> Name </label>
              <span class="sr-only">name input</span>
              <input
                class="
                  w-full
                  md:max-w-3xl
                  sm:max-w-xl
                  max-w-sm
                  shadow-md
                  appearance-none
                  border
                  rounded
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  transform
                  transition
                "
                id="name"
                type="text"
                placeholder="Name"
                v-model="formdata.name"
                :class="{ 'border-red-500': validation[0] }"
              />
            </div>
            <div class="mb-4">
              <label class="form-label" for="email"> Email </label>
              <span class="sr-only">email input</span>
              <input
                class="
                  w-full
                  md:max-w-3xl
                  sm:max-w-xl
                  max-w-sm
                  shadow-md
                  appearance-none
                  border
                  rounded
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  transform
                  transition
                "
                id="email"
                type="text"
                placeholder="Email"
                v-model="formdata.email"
                :class="{ 'border-red-500': validation[1] }"
              />
              <h2 class="text-red-500 pt-2 pl-1" v-if="validation[1]">
                Please enter a valid email address
              </h2>
            </div>
            <div class="mb-4">
              <label class="form-label" for="message"> Message </label>
              <span class="sr-only">message input</span>
              <textarea
                class="
                  w-full
                  md:max-w-3xl
                  sm:max-w-xl
                  max-w-sm
                  shadow-md
                  appearance-none
                  border
                  rounded
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  transform
                  transition
                  h-32
                  flex
                  justify-end
                "
                id="message"
                placeholder="Message"
                v-model="formdata.message"
                :class="{ 'border-red-500': validation[2] }"
              />
            </div>
          </form>
          <div class="flex justify-center pt-5 pb-8">
            <button
              class="
                rounded-lg
                border-3 border-black
                px-4
                h-10
                hover:bg-gray-200
                active:bg-gray-300
                transition
              "
              type="submit"
              @click="submitForm()"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="w-full rounded-lg shadow-lg">
        <div class="px-8 pt-8 w-96">
          <h1 class="text-3xl pb-2">Our locations</h1>
        </div>
        <div class="text-xl px-4 bg-white max-w-full">
          <location-map :btnText="Map" class="p-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationMap from "../components/UIComponents/Map.vue";

export default {
  name: "Contact",
  title: "Contact",
  components: {
    LocationMap,
  },
  data() {
    return {
      formdata: {
        name: "",
        email: "",
        message: "",
      },
      validation: [],
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        this.$router.push({
          name: "Home",
        });
      }
    },
    validateForm() {
      this.validation = [false, false, false];
      let valid = true;
      if (this.formdata.name === "") {
        this.validation[0] = true;
        valid = false;
      }
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.formdata.email
        ) === false
      ) {
        this.validation[1] = true;
        valid = false;
      }
      if (this.formdata.message === "") {
        this.validation[2] = true;
        valid = false;
      }
      return valid;
    },
  },
};
</script>

