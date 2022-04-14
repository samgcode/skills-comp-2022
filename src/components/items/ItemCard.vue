
<template>
  <div class="rounded-md shadow-lg xl:w-[25rem] w-96">
    <div @mouseover="hover = true" @mouseleave="hover = false">
      <img
        @click="openReviewForm()"
        class="object-contain aspect-square w-full rounded-t-md"
        :class="{ hover: hover }"
        :src="`https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/${item.imageName}`"
        alt="one of our proucts"
      />
      <h1 class="text-2xl text-black absolute top-5 left-5" v-if="hover">
        Write a review
      </h1>
      <font-awesome-icon
        icon="edit"
        class="icon fa-4x"
        :style="{ color: primaryColor }"
        v-if="hover"
      />
    </div>
    <div
      class="
        h-30
        grid grid-cols-1
        place-content-between
        py-2
        px-2
        pb-4
        text-dark
        font-bold
        rounded-b-md
      "
    >
      <h1 class="text-xl">{{ item.name }}</h1>
      <h1 class="text-gray-500 flex flex-col" v-if="!showLongDescription">
        {{ description }} ...
        <button
          class="btn"
          @click="showLongDescription = !showLongDescription"
        >
          show more
        </button>
      </h1>
      <h1 class="text-gray-500 flex flex-col" v-if="showLongDescription">
        {{ longDescription }}
        <button
          class="btn"
          @click="showLongDescription = !showLongDescription"
        >
          close
        </button>
      </h1>
    </div>
  </div>
</template>


<script>
// import serviceLocator from "@/services/serviceLocator"
// import StarRating from "vue-star-rating"
import Colors from "../../colors";
const colors = new Colors();
// const reviewService = serviceLocator.services.reviewService

export default {
  name: "ItemCard",
  props: {
    item: Object,
  },
  components: {
    // StarRating,
  },
  data() {
    return {
      showReviews: false,
      itemId: "",
      reviews: [],
      hover: false,
      primaryColor: "",
      description: "",
      longDescription: "",
      showLongDescription: false,
    };
  },
  methods: {
    async showModal() {
      this.$emit("show", this.item.name, this.itemId);
    },
    openReviewForm() {
      this.$router.push({
        name: `Review`,
        params: {
          item: this.itemId,
        },
      });
    },
  },
  mounted() {
    this.itemId = this.item.id;
    if (this.item.description.length >= 100) {
      this.longDescription = this.item.description;
      this.description = this.item.description.slice(0, 100);
    }
    this.primaryColor = colors.primary;
  },
};
</script>

<style scoped>
.hover {
  filter: grayscale(1);
  filter: blur(5px);
  transition: filter 0.5s;
}
.icon {
  position: absolute;
  left: 50%;
  top: 33%;
  transform: translate(-33%, -50%);
}
</style>

<style scoped>
.btn {
  @apply font-bold text-xl hover:text-primary text-blue-600 transition hover:underline
}
</style>