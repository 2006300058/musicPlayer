
import type CoverPlayVue from '@/components/common/CoverPlay.vue';

<template>
    <Title title="推荐MV" class="mt-5"/>
    <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(item, index) in personalizedMv"
            :key="item.id"
        >
            <CoverPlay :pic-url="item.picUrl" video :name="item.name"
            :play-count="item.playCount" show-play-count>
            </CoverPlay>
            <div class="mt-1.5 text-sm truncate">{{ item.name }}</div>
            <div class="mt-1.5 text-sm truncate text-slate-400">{{ item.artistName }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {onMounted, toRefs} from "vue";
import {useVideoStore} from "@/stores/video";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useRouter} from "vue-router";
import {Pages} from "@/router/pages";

const {personalizedMv} = toRefs(useVideoStore())
const {getPersonalizedMv} = useVideoStore()

onMounted( async() => {
    await getPersonalizedMv()
})

</script>

<style lang="scss">
</style>