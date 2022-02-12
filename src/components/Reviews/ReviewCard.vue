<template>
  <div class="flex max-w-7xl">
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
          <div class="flex">
            <h1 class="text-xl pr-3">{{ review.name }}</h1>
            <!-- <star-rating
              class=""
              :read-only="true"
              :show-rating="false"
              :rating="rating"
              :star-size="23"
            ></star-rating> -->
          </div>
          <p class="text-gray-500 text-sm">
            {{ review.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import StarRating from "vue-star-rating";
// import Colors from "../../colors";

export default {
  name: "ReviewCard",
  props: {
    review: Object,
  },
  components: {
    // StarRating,
  },
  data() {
    return {
      primaryColor: "",
      rating: this.review.rating,
    };
  },
  mounted() {
    // this.primaryColor = colors.primary;
  },
};
</script>