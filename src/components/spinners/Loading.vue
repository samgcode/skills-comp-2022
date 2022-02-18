<template>
    <div :class="{ 'hidden' : !loading }">
        <orbit-spinner
            class="mx-auto mt-5"
            :animation-duration="2000"
            :size="50"
            :color="primaryColor"
        />
    </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'
import Colors from '../../colors'
const colors = new Colors()
export default {
    name: 'loading',
    props: {
        loading: Boolean
    },
    components: {
        OrbitSpinner 
    },
    data() {
        return {
            primaryColor: ''
        }
    },
    mounted() {
        this.primaryColor = colors.primary
    }
}
</script>