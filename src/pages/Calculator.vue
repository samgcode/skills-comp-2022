<template>
  <error-display
    :error="error"
    :show="errorOccured"
    class="mb-[40Rem]"
  ></error-display>
  <div class="flex justify-center">
    <div
      class="shadow-lg rounded-lg w-[800px] mb-24 mt-8 mx-3"
      v-if="!errorOccured"
    >
      <form
        class="flex flex-col p-4"
        @submit.prevent="submitForm()"
        @change="formChanged"
      >
        <h1 class="text-2xl">Your project/request for a quote</h1>
        <h2 class="text-lg pt-3">
          Have a 3D modelling idea but not sure where to start? You can get a
          decent idea of cost from our calculator, just choose your 3D modelling
          type, number of hours you'll think it will take and generate a base
          price / estimate. Be sure to explain your project below in the given
          location and someone will get back to you soon!
        </h2>
        <div class="flex flex-col pt-4">
          <label class="text-xl">Your name</label>
          <input
            type="text"
            v-model="formData.name"
            class="border shadow-lg rounded-lg border-gray-300 p-1 text-xl"
            :class="{ 'border-red-400 border-2': validation.nameError }"
            placeholder="Name"
          />
        </div>
        <div class="flex flex-col pt-4">
          <label class="text-xl">Service</label>
          <select
            v-model="formData.selectedItem"
            class="border shadow-lg rounded-lg border-gray-300 p-2 text-xl"
            :class="{ 'border-red-400 border-2': validation.itemError }"
            placeholder="text"
          >
            <!-- <option selected="selected">Please select an item</option> -->
            <option v-for="item in items" :key="item.name" :value="item">
              {{ item.name }}
            </option>
          </select>
        </div>
        <h1 class="mt-2">{{ formData.selectedItem.description }}</h1>
        <div class="flex flex-col pt-4">
          <label class="text-xl"
            >Number of <span v-if="formData.selectedItem.perHour">hours</span
            ><span v-else>models</span></label
          >
          <input
            type="number"
            v-model="formData.hours"
            class="border shadow-lg rounded-lg border-gray-300 p-1 text-xl"
            :class="{ 'border-red-400 border-2': validation.hoursError }"
            placeholder="hours"
            min="0"
          />
        </div>
        <div class="flex flex-col pt-4">
          <label class="text-xl">Comments</label>
          <textarea
            type="text"
            v-model="formData.comments"
            class="border shadow-lg rounded-lg border-gray-300 p-1 text-xl"
            placeholder="text"
          />
        </div>
        <div class="flex justify-center text-center content-center py-8">
          <h1 class="my-auto text-xl pr-5">Aproximate quote: ${{ price }}</h1>
          <button
            class="
              btn-primary-outline
            "
            @click="submitForm()"
            v-if="!loading"
          >
            Send
          </button>
          <loading :loading="loading" class="pt-5"></loading>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from "../components/spinners/Loading.vue";
import ErrorDisplay from "../components/Error/ErrorDisplay.vue";
import serviceLocator from "../services/serviceLocator";

const quoteItemService = serviceLocator.services.quoteItemService;

export default {
  components: {
    Loading,
    ErrorDisplay,
  },
  data() {
    return {
      loading: true,
      error: {},
      errorOccured: false,
      items: [],
      formData: {
        name: "",
        selectedItem: "none",
        hours: 0,
        comments: "",
      },
      price: 0,
      validation: {
        nameError: false,
        itemError: false,
        hoursError: false,
      },
    };
  },
  methods: {
    async submitForm() {
      if (this.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.$router.push({
            path: "/Home",
          });
        }, 1000);
      }
    },
    formChanged() {
      if (this.formData.hours < 0) {
        this.formData.hours = 0;
      }
      this.validate
      if(this.formData.selectedItem != "none") {
        this.update()
      }
    },
    validate() {
      this.validation = {
        nameError: false,
        itemError: false,
        hoursError: false,
      };
      if (this.formData.name === "") {
        this.validation.nameError = true;
      }
      if (this.formData.selectedItem === "none") {
        this.validation.itemError = true;
      }

      if(this.formData.hours === 0) {
        this.validation.hoursError = true
      }
      return !(this.validation.nameError || this.validation.itemError || this.validation.hoursError);
    },
    update() {
      this.price = this.formData.hours * this.formData.selectedItem.price;
    },
  },
  async mounted() {
    this.loading = true;
    this.errorOccured = false;
    try {
      this.items = await quoteItemService.getItems();
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.errorOccured = true;
      this.error = {
        message: "Error occured while trying to fetch items",
      };
    }
  },
};
</script>