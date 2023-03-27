<template>
    <div v-loading="!desc" v-if="desc && desc.introduction.length > 0">
        <div >
            <div v-for="(item, index) in desc?.introduction" :key="item.ti">
                <div class="font-bold mb-5 text-lg">{{ item.ti }}</div>
                <div class="mb-5 leading-8" style="white-space: pre-wrap" >{{ item.txt }} </div>      
            </div>
        </div>
    </div> 
    <div v-else class="text-2xl justify-center items-center ">暂无数据</div>
</template>

<script setup lang="ts">
import {useArtistDesc} from '@/utils/api'
import { toRefs, ref, reactive, onMounted } from 'vue'
import type { ArtistDesc} from '@/models/artist_detail';

const props = defineProps<{id: number}>()
const desc = ref<ArtistDesc>()
onMounted(async() => {
    desc.value = await useArtistDesc(props.id)
})
</script>

<style lang="scss" scoped>

</style>