<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-show="showReviews"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
          relative
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div class="flex justify-between">
                <h3
                  class="
                    text-lg
                    font-semibold
                    text-gray-900
                    lg:text-2xl
                    dark:text-white
                  "
                >
                  Here are some reviews for our company
                </h3>
                <button
                  type="button"
                  @click="closeModal()"
                  class="
                    focus:outline-none focus:ring-2
                    ring-secondary ring-offset-8
                    rounded-sm
                    hover:fill-black
                    fill-current
                  "
                >
                  <svg
                    class="h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-500 max-h-96 overflow-y-scroll">
                  <error-display
                    :error="error"
                    :show="showError"
                  ></error-display>
                  <loading :loading="loading" class="pt-5"></loading>
                  <review-card
                    v-for="review in reviews"
                    v-bind:key="review.id"
                    :review="review"
                  />
                </p>
                <div v-if="!hasReviews && !loading">
                  <review-card :review="emptyReview" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            @click="closeModal"
            type="button"
            class="
              modal-button
              md:ml-5
              text-blue-500
              p-2
              rounded-md
              font-bold
              border-4 border-blue-500
              transition
              hover:bg-blue-100
              active:bg-blue-300
              hover:shadow-md hover:shadow-blue-300
            "
          >
            Close
          </button>
          <button
            type="button"
            @click="openReviewForm"
            class="
              modal-button
              rounded-md
              transform
              transition
              hover:bg-primary-light
              active:bg-primary-superlight
              font-semibold
              hover:shadow-md hover:shadow-primary-dark
              bg-primary
              p-3
              px-6
            "
          >
            Write a review
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark">
    <div class="xl:mx-52 sm:mx-10">
      <div class="px-8 py-4 lg:flex justify-between">
        <div data-aos="fade-right">
          <h1 class="mt-20 text-6xl text-white font-bold">
            Real World Modeling
          </h1>
          <h2
            class="
              text-xl text-gray-300
              max-w-md
              ml-3
              pl-5
              border-4 border-l-primary border-y-0 border-r-0
            "
          >
            Today's best 3D Modellers on call for you
          </h2>
          <div class="my-8">
            <router-link :to="{ name: 'About' }" class="btn-primary"
              >About us</router-link
            >
            <router-link :to="{ name: 'Store' }" class="ml-4 btn-white-outline"
              >Services</router-link
            >
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/printers3.png?alt=media&token=e9c5828f-15e6-4b52-b2a5-349e4d2ab2fd"
          class="object-contain h-96 lg:pt-0 pt-4"
          data-aos="fade-left"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-16 max-w-full text-center">
    <div class="grid grid-cols-1">
      <p class="w-[35rem] text-lg" data-aos="fade-up">
        Have a 3D modelling idea but not sure where to start? You can get a
        decent idea of cost from our calculator.
      </p>
      <div class="mt-5">
        <router-link
          to="/Calculator.html"
          class="btn-primary-outline"
          data-aos="fade-down"
        >
          Calculator
        </router-link>
      </div>
    </div>
  </div>
  <div class="mt-24 xl:mx-52 sm:mx-10">
    <div class="px-8 py-4 lg:flex flex-col 2xl:flex-row justify-between">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/roomRender.png?alt=media&token=682e9305-f5a1-4167-8b94-730836e6f55d"
        class="object-contain w-[40rem] lg:pt-0 pt-4"
        data-aos="fade"
      />
      <div class="flex flex-col">
        <div data-aos="fade-left">
          <h1 class="mt-20 text-4xl font-bold">We offer premium services</h1>
          <h2 class="text-lg max-w-md">
            We offer many services such as 3d designing and printing, graphic
            design, 3D animation, and photgraphy
          </h2>
        </div>
        <div class="mt-6">
          <router-link
            to="/Store.html"
            class="btn-primary-outline"
            data-aos="fade-down"
          >
            See all services
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-24 bg-gray-300 pb-24" data-aos="fade-up">
    <div class="lg:p-20 p-5 lg:pl-60">
      <h1 class="text-4xl">See what our customers are saying:</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <div class="flex md:ml-4 mt-4">
            <h2 class="text-2xl">Jim -</h2>
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
            "I have worked in the Formula 1 sector for 20 years and had various
            in-house equipment to manufacture demo and sample goods but having
            left to start my own venture I found Real World Modelling a great
            option to get my sample goods made quickly and efficiently. 🙂"
          </p>
        </div>
        <div>
          <div class="flex lg:ml-4 mt-4">
            <h2 class="text-2xl">Sally -</h2>
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
          <p class="text-lg lg:ml-4 w-80">
            "A good service, quick and accurate, with friendly help in resolving
            problems, and trust me, I have lots. "
          </p>
        </div>
        <div class="h-full flex flex-wrap content-center lg:pt-0 pt-4">
          <button class="btn-primary" @click="showModal">
            See more reviews
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import Loading from "../components/spinners/Loading.vue";
import ErrorDisplay from "../components/Error/ErrorDisplay.vue";
import ReviewCard from "../components/Reviews/ReviewCard.vue";
import Colors from "../colors";
import serviceLocator from "../services/serviceLocator";

const reviewService = serviceLocator.services.reviewService;
const colors = new Colors();

export default {
  title: "Home",
  components: {
    StarRating,
    ReviewCard,
    Loading,
    ErrorDisplay,
  },
  data() {
    return {
      primaryColor: "",
      showReviews: false,
      hasReviews: false,
      reviews: [],
      showError: false,
      error: {},
      showError: false,
      loading: false,
      item: {},
      emptyReview: {
        name: "There are no reviews Currently available",
        text: "You can submit one on the store page",
      },
    };
  },
  mounted() {
    this.primaryColor = colors.primary;
  },
  methods: {
    showModal() {
      // if (this.open) {
      this.hasReviews = false;
      this.showReviews = true;
      this.displayReviews();
      // }
    },
    async displayReviews() {
      try {
        this.loading = true;
        this.showError = false;
        this.reviews = await reviewService.getReviews();
        this.reviewsLoading = false;
        if (this.reviews.length > 0) {
          this.hasReviews = true;
        } else {
          this.hasReviews = false;
        }
        this.loading = false;
      } catch (err) {
        console.error(err);
        this.error = {
          message: "error occured while fetching reviews",
        };
        this.loading = false;
        this.showError = true;
      }
    },
    closeModal() {
      this.showReviews = false;
      this.reviewsLoading = true;
    },
    openReviewForm() {
      this.$router.push({
        name: `Review`,
        params: {
          item: "noItem",
        },
      });
    },
  },
};
</script>

<style scoped>
.modal-button {
  @apply m-2 sm:w-auto inline-flex w-full justify-center;
}
</style>
