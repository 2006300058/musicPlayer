<template>
    <div class="mt-5 ml-4">
        <div class="flex">
            <img :src="artistAlbum?.picUrl" class="w-44 h-44 rounded-2xl"/>
            <div class="flex flex-col">
                <div class="text-2xl font-bold pl-5 pt-1.5">{{ artistAlbum?.name }}</div>
                <div class="pl-5 mt-6 ">: {{ artistAlbum?.artist.name }}</div>
                <div class="text-gray-400 pl-5 mt-4 text-xs">{{ artistAlbum?.publishTime.toDate() }}</div>
                <div class="flex flex-row mt-7 pl-5">
                    <button class="button w-32 mr-5" @click="playAll">
                        <IconPark :icon="Play" size="20" />
                        <span class="pl-1">播放全部</span>
                    </button>
                    <button class="button-outline w-32 mr-5">
                        <IconPark :icon="Like" size="20"/>
                        <span class="pl-1">收藏</span>
                    </button>
                    <button class="button-outline w-8">
                        <IconPark :icon="More" size="20"/>
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-3 ml-2">
            <el-tabs>
                <el-tab-pane>
                    <template #label>
                        <span>歌曲 {{ artistSongs.length }}</span>
                    </template>

                    <div class="flex text-gray-500">
                        <div class="w-2/3 ml-1">歌曲:</div>
                        <div class="w-1/3 mr-10">歌手:</div>
                        <div class="w-20 mr-3">时长:</div>
                    </div> 

                    <div v-for="(item ,index) in artistSongs">
                            <SongListItem :song="item"  show-ar-name />
                    </div> 
                </el-tab-pane>

                <el-tab-pane>
                    <template #label>
                        <span>专辑详情</span>
                    </template>
                    <span class="text-lg text-gray-500" style="white-space: pre-wrap">{{ artistAlbum?.description }}</span>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAlbum } from '@/utils/api';
import {useRoute, useRouter} from 'vue-router';
import { More, Play, Like } from '@icon-park/vue-next';
import  IconPark from '@/components/common/IconPark.vue';
import type { Album } from '@/models/album';
import type { Song } from '@/models/song';
import SongListItem from '@/components/common/SongListItem.vue';
import { usePlayerStore } from '@/stores/player';

const route = useRoute()
const id = Number(route.query.id)
const artistAlbum = ref<Album>()
const artistSongs = ref<Song[]>([])
const {pushPlayList, play} = usePlayerStore()

const playAll = () => {
    pushPlayList(true, ...artistSongs.value)
    play(artistSongs.value.first().id)
}
onMounted(async() => {
   const {album} = await useAlbum(id)
   artistAlbum.value = album
   const {songs} = await useAlbum(id)
   artistSongs.value = songs
})
</script>

<style lang="scss" scoped>

</style>