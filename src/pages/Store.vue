<template>
  <div>
    <loading :loading="loading" class="pt-5"></loading>
    <error-display :error="error" :show="errorOccured"></error-display>
    <div
      class="
        grid grid-cols-1
        gap-4
        w-3/4
        mx-auto
        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
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
        this.reviews = await reviewService.getReviews()
        this.reviewsLoading = false
        if (this.reviews.length > 0) {
          this.hasReviews = true;
        } else {
          this.hasReviews = false;
        }
      } catch (err) {
        this.reviewsLoading = false
        this.reviewErrorOccured = true
        this.reviewError = {
          message: 'Error occured while trying to fetch reviews'
        }
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