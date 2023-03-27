<template>
    <div class="  mt-10 ml-5">
        <video :src="artistMvUrl?.url" autoplay controls class=" flex items-center justify-center">
        </video>
    </div>
</template>

<script setup lang="ts">

import {ref, toRefs, onMounted,  reactive} from 'vue'
import type { MvUrl } from '@/models/mv';
import { useMvUrl } from '@/utils/api';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = Number(route.query.id)
const artistMvUrl = ref<MvUrl>()
onMounted(async() => {
    console.log(id)
    artistMvUrl.value = await useMvUrl(id)
    console.log(artistMvUrl.value)

})
</script>

<style lang="scss" scoped>

</style>