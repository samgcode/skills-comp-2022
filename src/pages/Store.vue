<template>
  <div class="pb-20">
    <div class="flex flex-col justify-center text-center pt-5">
      <h1 class="text-4xl text-black">Our Services</h1>
      <div class="flex gap-4 justify-center pt-3 content-center w-full">
        <router-link
          :to="{ name: 'Review', params: { item: 'none' } }"
          class="btn-primary-outline"
          >Write a review</router-link
        >
        <button
          class="
            bg-secondary
            p-2
            rounded-md
            font-semibold
            shadow-lg
            hover:bg-secondary-light hover:shadow-md hover:shadow-secondary
            active:bg-secondary-light active:shadow-md active:shadow-secondary
          "
          @click="getReviews"
        >
          See reviews
        </button>
      </div>
    </div>
    <loading :loading="loading" class="pt-5"></loading>
    <error-display :error="error" :show="errorOccured"></error-display>
    <div
      class="
        grid grid-cols-1
        gap-6
        w-[80%]
        mx-auto
        sm:grid-cols-1
        lg:grid-cols-2
        2xl:grid-cols-3
        mt-6
      "
    >
      <item-card
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:item="item"
        @show="getReviews"
        data-aos="fade-up"
      ></item-card>
    </div>
    <ReviewModal
      @close="closeModal"
      :showReviews="showReviews"
      :hasReviews="hasReviews"
      :reviews="reviews"
      :item="item"
      :loading="reviewsLoading"
      :showError="reviewErrorOccured"
      :error="reviewError"
    />
  </div>
</template>

<script>
import Loading from "../components/spinners/Loading.vue";
import ErrorDisplay from "../components/Error/ErrorDisplay.vue";
import ItemCard from "../components/items/ItemCard.vue";
import ReviewModal from "../components/Reviews/ReviewModal.vue";
import serviceLocator from "../services/serviceLocator";

const itemService = serviceLocator.services.itemService;
const reviewService = serviceLocator.services.reviewService;

export default {
  name: "Store",
  title: "Store",
  components: {
    ItemCard,
    ReviewModal,
    ErrorDisplay,
    Loading,
  },
  data() {
    return {
      showReviews: false,
      item: {},
      items: [],
      reviews: [],
      hasReviews: false,
      error: {
        statusCode: "404",
        message:
          "This is an error message which is a message for an error which has a message because this is an error with an error message",
      },
      errorOccured: false,
      reviewError: {},
      reviewErrorOccured: false,
      loading: true,
      reviewsLoading: true,
    };
  },
  methods: {
    async getReviews(itemName, itemId) {
      this.hasReviews = false;
      this.showReviews = true;
      this.reviewsLoading = true;
      this.item = {
        name: itemName,
        id: itemId,
      };
      try {
        this.reviews = await reviewService.getReviews();
        this.reviewsLoading = false;
        if (this.reviews.length > 0) {
          this.hasReviews = true;
        } else {
          this.hasReviews = false;
        }
      } catch (err) {
        this.reviewsLoading = false;
        this.reviewErrorOccured = true;
        this.reviewError = {
          message: "Error occured while trying to fetch reviews",
        };
      }
    },
    closeModal() {
      this.showReviews = false;
      this.reviewsLoading = true;
    },
    async getItems() {
      try {
        this.loading = true;
        this.items = await itemService.getItems();
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.errorOccured = true;
        this.error = {
          message: "error occured while trying to fetch items",
        };
        console.log(err);
      }
    },
    onReviewError(err) {
      this.reviewsLoading = false;
      this.hasReviews = false;
      this.reviewErrorOccured = true;
      this.reviewError = err;
      console.log(err);
    },
  },
  mounted() {
    this.getItems();
  },
};
</script>