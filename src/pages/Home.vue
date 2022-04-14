<template>
  <div class="fixed overflow-hidden z-10 inset-0" v-show="showReviews">
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
        overflow-hidden
      "
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
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
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start justify-between">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Here are some reviews for our company
              </h3>
            </div>
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
          <div
            class="
              mt-2
              flex-row
              grid-cols-1
              xl:h-2xl
              md:h-96
              overflow-auto
              mb-20
            "
          >
            <!-- <error-display :error="error" :show="showError"></error-display>
            <square-spinner :loading="loading"></square-spinner> -->
            <error-display :error="error" :show="showError"></error-display>
            <loading :loading="loading" class="pt-5"></loading>
            <div v-if="!showError">
              <div v-if="hasReviews">
                <review-card
                  v-for="review in reviews"
                  v-bind:key="review.id"
                  :review="review"
                />
              </div>
              <div v-if="!hasReviews && !loading">
                <div class="flex max-w-7xl" data-aos="fade-up">
                  <div class="pt-5 sm:pl-9">
                    <div
                      class="
                        max-w-sm
                        w-96
                        rounded-lg
                        overflow-hidden
                        shadow-lg
                        bg-white
                        border-2
                      "
                    >
                      <div class="px-4 py-4">
                        <h1 class="text-xl">
                          No reviews are currently available
                        </h1>
                        <p class="text-gray-500 text-md">
                          You can submit one on the store page
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            bg-gray-50
            px-4
            py-3
            sm:px-6 sm:flex sm:flex-row-reverse
            absolute
            inset-x-0
            bottom-0
          "
        >
          <button
            type="button"
            @click="closeModal()"
            class="
              mt-3
              w-full
              inline-flex
              justify-center
              rounded-md
              cursor-pointer
              px-5
              py-2
              shadow-lg
              bg-gray-50
              text-secondary
              font-semibold
              tracking-wider
              border-4 border-secondary
              transform
              transition
              hover:-translate-y-0.5 hover:bg-secondary-superlight
              focus:-translate-y-0.5
              focus:outline-none
              focus:ring
              focus:ring-offset-1
              focus:ring-primary
              active:-translate-y-0.5
              sm:ml-3 sm:w-auto
            "
          >
            Close
          </button>
          <button
            type="button"
            @click="openReviewForm()"
            class="
              mt-3
              w-full
              inline-flex
              justify-center
              rounded-md
              sm:ml-3 sm:w-auto
              cursor-pointer
              px-5
              py-3
              shadow-lg
              bg-primary
              font-semibold
              tracking-wider
              transform
              transition
              hover:-translate-y-0.5 hover:bg-primary-dark
              focus:-translate-y-0.5
              focus:outline-none
              focus:ring
              focus:ring-offset-1
              focus:ring-secondary
              active:bg-primary-light
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
                hover:shadow-md hover:shadow-primary-dark
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
                hover:shadow-md hover:shadow-white
              "
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
          to="/Calculator"
          class="
            text-primary
            p-2
            rounded-md
            font-bold
            border-4 border-primary
            transition
            hover:bg-red-100
            active:bg-red-300
            hover:shadow-md hover:shadow-primary
          "
          data-aos="fade-down"
        >
          Calculator
        </router-link>
      </div>
    </div>
  </div>
  <div class="mt-24 xl:mx-52 sm:mx-10">
    <div class="px-8 py-4 lg:flex justify-between">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/roomRender.png?alt=media&token=682e9305-f5a1-4167-8b94-730836e6f55d"
        class="object-contain h-96 lg:pt-0 pt-4"
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
            to="/Store"
            class="
              text-primary
              p-2
              rounded-md
              font-bold
              border-4 border-primary
              transition
              hover:bg-red-100
              active:bg-red-300
              hover:shadow-md hover:shadow-primary
            "
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
          <div class="flex ml-4 mt-4">
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
          <button
            class="
              transition
              bg-primary
              rounded-lg
              font-bold
              h-12
              px-3
              hover:bg-primary-light hover:shadow-md hover:shadow-primary
              active:bg-primary-superlight
              active:shadow-md
              active:shadow-primary
            "
            @click="showModal"
          >
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
