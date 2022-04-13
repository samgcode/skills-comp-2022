<template>
    <body>
        <v-lazy-image :src="`https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/temp.png?alt=media&token=8fe5a801-439e-424e-8cbd-207a55b674c4`" :src-placeholder="`https://firebasestorage.googleapis.com/v0/b/skills-2022.appspot.com/o/temp.png?alt=media&token=8fe5a801-439e-424e-8cbd-207a55b674c4`" :alt="name" :class="classes"/>
    </body>
</template>

<script>
import VLazyImage from "v-lazy-image"
export default {
    name: 'LazyImage',
    props: {
        name: String,
        classes: String
    },
    components: {
        VLazyImage
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
}
.v-lazy-image-loaded {
    filter: blur(0);
}
</style>