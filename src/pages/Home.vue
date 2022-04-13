<template>
  <div class="bg-dark">
    <div class="xl:mx-52 sm:mx-10">
      <div class="px-8 py-4 lg:flex justify-between">
        <div data-aos="fade-right">
          <h1 class="mt-20 text-6xl text-white font-bold">This is a title</h1>
          <h2
            class="
              text-xl text-gray-300
              max-w-md
              ml-3
              pl-5
              border-4 border-l-primary border-y-0 border-r-0
            "
          >
            sub text/slogan/etc. sub text/slogan/etc. sub text /slogan/etc.sub
            text/slogan/etc.
          </h2>
          <div class="my-8">
            <router-link
              :to="{ name: 'About' }"
              class="
                bg-primary
                p-3
                px-6
                rounded-md
                transform
                transition
                hover:-translate-y-0.5 hover:bg-primary-light
                active:bg-primary-superlight
                font-semibold
              "
              >About us</router-link
            >
            <router-link
              :to="{ name: 'Store' }"
              class="
                ml-4
                py-2.5
                px-6
                border-2 border-white
                hover:bg-gray-700
                active:bg-gray-500
                rounded-md
                inset-1
                text-white
              "
              >Store</router-link
            >
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/temp.png?alt=media&token=8fe5a801-439e-424e-8cbd-207a55b674c4"
          class="object-contain h-96 lg:pt-0 pt-4"
          data-aos="fade-left"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-16 max-w-full text-center">
    <div class="grid grid-cols-1">
      <h1 class="text-4xl font-bold" data-aos="fade-down">Title</h1>
      <br />
      <p class="w-[35rem] text-lg" data-aos="fade-up">
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
      </p>
    </div>
  </div>
  <div class="mt-24 xl:mx-52 sm:mx-10">
    <div class="px-8 py-4 lg:flex justify-between">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/temp.png?alt=media&token=8fe5a801-439e-424e-8cbd-207a55b674c4"
        class="object-contain h-96 lg:pt-0 pt-4"
        data-aos="fade"
      />
      <div data-aos="fade-left">
        <h1 class="mt-20 text-4xl font-bold">This is a title</h1>
        <h2 class="text-lg max-w-md">
          text text text text text text text text text text text text text text
          text text text text text text text text
        </h2>
      </div>
    </div>
  </div>
  <div class="mt-24 bg-gray-300 pb-24" data-aos="fade-up">
    <div class="p-20 pl-60">
      <h1 class="text-4xl">See what our customers are saying:</h1>
      <div class="grid grid-cols-3">
        <div>
          <div class="flex ml-4 mt-4">
            <h2 class="text-2xl">name -</h2>
            <star-rating
              :star-size="30"
              :rating="5"
              :read-only="true"
              :show-rating="false"
              :active-color="primaryColor"
              class="pl-2"
            >
            </star-rating>
          </div>
          <p class="text-lg ml-4 w-80">
            "yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo
            yo yo"
          </p>
        </div>
        <div>
          <div class="flex ml-4 mt-4">
            <h2 class="text-2xl">name -</h2>
            <star-rating
              :star-size="30"
              :rating="5"
              :read-only="true"
              :show-rating="false"
              :active-color="primaryColor"
              class="pl-2"
            >
            </star-rating>
          </div>
          <p class="text-lg ml-4 w-80">
            "yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo
            yo yo"
          </p>
        </div>
        <div class="h-full ">
          <button class="bg-primary rounded-lg p-3 font-bold">See more reviews</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import Colors from "../colors";

const colors = new Colors();

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      primaryColor: "",
    };
  },
  mounted() {
    this.primaryColor = colors.primary;
  },
};
</script>
