<template>
    <div v-if="artistMv && artistMv.length > 0">
        <div class="grid grid-flow-row grid-cols-3 2xl:grid-cols-6 gap-4">
            <div v-for="(item, index) in artistMv" @click="router.push({name: 'mvDetail', query:{id: item.id}})">
                <CoverPlay :pic-url="item.imgurl16v9" video show-play-count :play-count="item.playCount"/>
                <div class="mt-2 truncate">{{ item.name }}</div>
            </div>
        </div>
    </div>
    <div v-else>暂无数据</div>
</template>

<script setup lang="ts">
import CoverPlay from '@/components/common/CoverPlay.vue';
import type { Mv } from '@/models/artist';
import {useArtistMv} from '@/utils/api'
import { onMounted, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const artistMv = ref<Mv[]>([])
onMounted(async() => {
  artistMv.value =  await useArtistMv(props.id)
})
const props = defineProps<{id: number}>()

</script>

<style lang="scss" scoped>

</style>