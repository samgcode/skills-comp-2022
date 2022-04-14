<template>
  <body>
    <error-display :error="errorData" :show="errorOccured"></error-display>
    <div v-if="!errorOccured">
      <loading :loading="loading" class="pt-5"></loading>
      <div class="flex justify-center" data-aos="fade-up" v-if="!loading">
        <div class="flex max-w-8xl">
          <div class="p-10">
            <div
              class="
                max-w-8xl
                min-w-7xl
                rounded-lg
                overflow-hidden
                shadow-lg
                bg-superdark
              "
            >
              <div class="px-8 pt-8 pb-4">
                <h1 class="text-3xl">Write a review</h1>
                <p class="text-lg">
                  Please use the form to write a review of our service
                </p>
              </div>
              <!-- <hr class="border-primary border-3" /> -->
              <div class="text-xl pt-4 px-4 bg-white max-w-full">
                <form @submit.prevent="submitForm()" @change="validateForm">
                  <div class="mb-4">
                    <label class="form-label" for="name">Name</label>
                    <span class="sr-only">name input</span>
                    <input
                      class="
                        w-full
                        xl:max-w-5xl
                        lg:max-w-4xl
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
                  <div class="mb-4" v-if="showProduct">
                    <label class="form-label" for="product">Product</label>
                    <span class="sr-only">product input</span>
                    <select
                      class="
                        w-full
                        xl:max-w-5xl
                        lg:max-w-4xl
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
                      id="product"
                      placeholder="product"
                      v-model="formdata.product"
                      :class="{ 'border-red-500': validation[1] }"
                    >
                      <!-- <option></option> -->
                      <option
                        v-for="product in products"
                        :key="product.id"
                        :value="product.id"
                      >
                        {{ product.name }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="rating">Rating</label>
                    <span class="sr-only">star rating input</span>
                    <star-rating
                      :star-size="40"
                      :border-color="ratingBorderColor"
                      :border-width="2"
                      :show-rating="false"
                      :active-color="primaryColor"
                      @update:rating="ratingSelected"
                    >
                    </star-rating>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="message">Review</label>
                    <span class="sr-only">review input</span>
                    <textarea
                      class="
                        w-2xl
                        xl:max-w-5xl
                        lg:max-w-4xl
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
                      id="review"
                      placeholder="Review"
                      v-model="formdata.text"
                      :class="{ 'border-red-500': validation[2] }"
                    />
                  </div>
                </form>
                <div class="flex justify-center pt-5 pb-8">
                  <button
                    class="
                      rounded-lg
                      border-3 border-primary
                      text-primary
                      px-4
                      h-10
                      hover:bg-primary-superlight
                      active:bg-primary-light
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
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import serviceLocator from "../services/serviceLocator";
import Loading from "../components/spinners/Loading.vue";
import StarRating from "vue-star-rating";
import ErrorDisplay from "../components/Error/ErrorDisplay.vue";
import vSelect from "vue-select";
import Colors from "../colors";
const colors = new Colors();
const itemService = serviceLocator.services.itemService;
const reviewService = serviceLocator.services.reviewService;

export default {
  name: "ReviewForm",
  title: "Write a review",
  components: {
    Loading,
    vSelect,
    StarRating,
    ErrorDisplay,
  },
  data() {
    return {
      formdata: {
        name: "",
        product: "",
        rating: 0,
        text: "",
      },
      test: "",
      validation: [],
      products: [],
      errorOccured: false,
      errorData: {},
      loading: true,
      ratingBorderColor: "",
      primaryColor: "",
      options: [],
      showProduct: true,
    };
  },
  methods: {
    keyToVal: function (someKey) {
      return this.possibleValues[someKey];
    },
    async submitForm() {
      console.log("1");
      this.hasSubmitted = true;
      this.errorOccured = false;
      if (this.validateForm()) {
        console.log("2");

        this.loading = true;
        try {
          console.log("3");

          await reviewService.addReview(this.formdata);
          console.log("4");

          this.loading = false;
          this.$router.push({
            name: "Store",
          });
        } catch (err) {
          this.loading = false;
          this.errorOccured = true;
          this.submitText = "Try again";
          this.errorData = {
            message: "Error occured while trying send the review to the server",
          };
        }
      }
    },
    validateForm() {
      this.validation = [false, false, false];
      let valid = true;
      this.ratingBorderColor = "";
      if (this.formdata.name === "") {
        this.validation[0] = true;
        valid = false;
      }
      if (this.formdata.product === "") {
        this.validation[1] = true;
        valid = false;
      }
      if (this.formdata.rating <= 0) {
        this.ratingBorderColor = "#DC3545";
        valid = false;
      }
      if (this.formdata.text === "") {
        this.validation[2] = true;
        valid = false;
      }
      return valid;
    },
    async getProducts() {
      this.errorOccured = false;
      try {
        this.products = await itemService.getItems();
        this.options = [];
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.errorOccured = true;
        this.errorData = {
          message: "Error occured while trying to fetch review form",
        };
      }
      if (!this.errorOccured && !this.loading) {
        this.displayForm = true;
      }
    },
    ratingSelected: function (rating) {
      this.ratingBorderColor = "";
      this.formdata.rating = rating;
    },
  },
  mounted() {
    this.formdata.product = this.$route.params.item;
    // if (this.formdata.product === "noItem") {
    //   }
      this.showProduct = false;
    this.getProducts();
    this.primaryColor = colors.primary;
  },
};
</script>

<style scoped>
.form-input-sm {
  @apply w-2xl md:max-w-lg sm:max-w-xl max-w-sm shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight transform transition;
}
.form-input {
  @apply w-2xl xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-sm shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight transform transition;
}
</style>