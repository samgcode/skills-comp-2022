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
</template>

<script>
import ReviewCard from "../../components/Reviews/ReviewCard.vue";
import Loading from "../../components/spinners/Loading.vue";
import ErrorDisplay from "../../components/Error/ErrorDisplay.vue";

export default {
  name: "ReviewModal",
  props: {
    showReviews: Boolean,
    hasReviews: Boolean,
    reviews: Array,
    item: Object,
    showError: Boolean,
    error: Object,
    loading: Boolean,
  },
  components: {
    ReviewCard,
    Loading,
    ErrorDisplay,
  },
  data() {
    return {
      emptyReview: {
        name: "There are no reviews Currently available",
        text: "You can submit one on the store page",
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
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