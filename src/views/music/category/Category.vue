<template>
    <PlaylistHighqualityTags @cat-change="catChange"/>
    <div class="grid gap-4 grid-flex-row grid-cols-5 xl:grid-cols-6  mt-3">
        <div v-for="(item, index) in list" class="py-1.5" @click="router.push({name: Pages.playlist, query:{id: item.id}})">
            <CoverPlay :pic-url="item.coverImgUrl" show-play-count :play-count="item.playCount" />
            <div class="pt-1.5 ">{{ item.name }}</div>
            <div class=" text-center truncate">by: {{ item.creator.nickname }}</div>
        </div>
    </div>
    <div class="text-center my-5">
        <el-button @click="loadMore" :loading="pageData.loading">加载过多</el-button>
    </div>
</template>

<script setup lang="ts">
import PlaylistHighqualityTags from './PlaylistHighqualityTags.vue';
import CoverPlay from '@/components/common/CoverPlay.vue';
import {ref,toRefs,onMounted, reactive } from 'vue'
import { usePlaylistHighquality } from '@/utils/api';
import {useRouter} from 'vue-router'
import type { PlaylistHighqualityTag } from '@/models/playlist';
import {Pages} from '@/router/pages'
import type {PlaylistDetail} from "@/models/playlist";

const list = ref<PlaylistDetail[]>()
const router = useRouter()

const pageData = reactive({
    init: false,
    loading: false,
    limit: 35,
    before: 0,
    more: false,
    cat: "全部"
})

const catChange = (cat: string) => {
    pageData.before = 0;
    pageData.more = false;
    pageData.cat = cat
    getData()
}
const getData = async () => {
    pageData.loading = true;
    try{
        const {playlists, lasttime, more} = await usePlaylistHighquality({
            limit: pageData.limit,
            before: pageData.before,
            cat: pageData.cat
        })
        if(pageData.before <= 0) {
            list.value = playlists;
        } else {
            list.value?.push(...playlists)
        }
        pageData.init = true;
        pageData.loading = false;
        pageData.before = lasttime;
        pageData.more = more
    } catch(e){

    }
}
const loadMore = () => {
    getData()
}
onMounted(getData)
</script>

<style lang="scss" scoped>
</style>