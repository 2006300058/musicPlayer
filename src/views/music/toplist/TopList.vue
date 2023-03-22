<template>
    <div>
        <Title title="官方榜"/>
        <div class="grid gap-5 grid-flow-row grid-cols-2 2xl:grid-cols-4">
            <div v-for="(topList, topListIndex) in toplistDetailData.slice(0,4)" :key="topList.id" class="flex bg-dc rounded-lg items-center cursor-pointer ">         
                <CoverPlay :pic-url="topList.coverImgUrl" class="flex-shrink-0 w-36" :play-count="topList.playCount" show-play-count :name="topList.name" @click="router.push({name:'playlist', query:{
                id: topList.id }})"
                /> 
                <div class="flex flex-1 flex-col flex-shrink-0 px-5 ">
                    <div class="font-bold  text-xl py-2 ">{{ topList.name }}</div>
                    <div class="flex-auto w-22 truncate py-1 text-sm">1.{{ topList.tracks[0].first}} -- {{topList.tracks[0].second}}</div>
                    <div class="flex-auto w-22 truncate py-1 text-sm">2.{{ topList.tracks[1].first}} -- {{topList.tracks[1].second}}</div>
                    <div class="flex-auto w-22 truncate py-1 text-sm">3.{{ topList.tracks[2].first}} -- {{topList.tracks[2].second}}</div>
                </div>             
            </div>
        </div>
        <Title title="特色榜" class="mt-2"/>
        <div class="grid gap-5 grid-flow-row grid-cols-5 2xl:grid-cols-10">
            <div v-for="(topList, topListIndex) in toplistDetailData.slice(4)">
                <CoverPlay :pic-url="topList.coverImgUrl" :play-count="topList.playCount" show-play-count :name="topList.name"
                @click="router.push({name:'playlist', query:{
                id: topList.id }})"
                />
                <div class="mt-1 text-center">{{ topList.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue';
import {onMounted, toRefs, onUnmounted, } from "vue";
import {useRouter} from "vue-router";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useMusicStore} from "@/stores/music";
import type {TopListDetail} from "@/models/toplist_detail";

const {getTopListDetailData} = useMusicStore()
const {toplistDetailData} = toRefs(useMusicStore())
const router = useRouter()

// onMounted(async () => {
//   await getTopListDetailData()
// })
onMounted(async () => {
  await getTopListDetailData()
})

</script>

<style lang="scss" scoped>

</style>