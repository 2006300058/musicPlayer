<template>
    <div>
        <div class="flex flex-row justify-between items-center">
            <div class="flex">
                <button class="button-outline w-28 mr-4" @click="playAll">
                    <IconPark :icon="Play" size="20"/>
                    <span class="pl-1">播放全部</span>
                </button>
                <button class="button-outline w-28 mr-4">
                    <IconPark :icon="DownloadOne" size="20"/>
                    <span class="pl-1">下载</span>
                </button>
                <button class="button-outline w-28 mr-4">
                    <IconPark :icon="Anchor" size="20"/>
                    <span class="pl-1">批量操作</span>
                </button>
            </div>
            <div >
                <span class=" hover-text mr-8" @click="setOrder('time')" :class="{'text-red-500':pageData.order==='time'}">最新</span>
                <span class=" hover-text mr-8"  @click="setOrder('hot')" :class="{'text-red-500':pageData.order==='hot'}">最热</span>
            </div>       
        </div>
        <div class="mt-5 flex ">
            <span class="w-3/5 text-main ml-1">歌曲</span>
            <span class="w-1/3 text-main">专辑</span>
            <span class="w-20 text-main mr-0.5">时长</span>
        </div>
        <div class="mt-3">
            <div v-for="(item, index) in songList" :key="item.id">
                <SongListItem :show-ar-name="false" show-al-name :song="item"/>
            </div>

        </div>
        <div class="flex justify-center py-5" v-if="!pageData.noMore">
            <el-button type="text" class="text-center  w-full" @click="loadMore">加载更多
            </el-button>
        </div>
    </div>   
</template>


<script setup lang="ts">
import SongListItem from '@/components/common/SongListItem.vue'
import type { ArtistDetail } from '@/models/artist_detail';
import type { Song } from '@/models/song';
import { usePlayerStore } from '@/stores/player';
import {ref, onMounted,toRefs, reactive, computed } from 'vue'
import {useArtistSongs} from "@/utils/api";
import { Play,DownloadOne,Anchor  } from '@icon-park/vue-next';
import  IconPark from '@/components/common/IconPark.vue';

 const props = defineProps<{id: number}>()
 //const songs = ref<Song>()
 const songList = ref<Song[]>([])
const {pushPlayList, play} = usePlayerStore()

const playAll = () => {
    pushPlayList(false, ...songList.value)
    play(songList.value.first().id)
}

const pageData = reactive({
    order: 'hot',
    limit: 20,
    page: 1,
    loading: false,
    noMore: false
})

const offset = computed(() => {
    if(pageData.page === 1) return 0;
    return songList.value.length + pageData.limit
})

const getData = async () => {
    try {
        pageData.loading = true
        const {songs} = await useArtistSongs(props.id, pageData.order, pageData.limit, offset.value)
        if(pageData.page === 1) songList.value = songs
        else songList.value.push(...songs)
        if(songs.length < pageData.limit) pageData.noMore = true
    }catch(e){
        pageData.page--
    }
    pageData.loading = false
}

const loadMore = () => {
    pageData.page++
    getData()
}

const setOrder = (option: 'time' | 'hot') => {
    pageData.page = 1
    pageData.order = option
    getData()
}

onMounted(async () => {
    await  getData()
})

</script>

<style lang="scss" scoped>
</style>