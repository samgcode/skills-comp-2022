<template>
    <div class="bg-red-200 border-2 border-red-500 rounded-lg w-full md:w-3/4 mx-auto mt-5" v-if="show" data-aos="fade-in">
        <h1 class="text-red-500 p-5 text-lg font-semibold">Error {{ error.statusCode }}: {{ error.message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'ErrorDisplay',
    props: {
        error: Object,
        show: Boolean
    },
}
</script>