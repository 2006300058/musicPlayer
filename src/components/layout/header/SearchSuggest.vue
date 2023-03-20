<template>
    <div v-if="suggestData" v-for="order in suggestData.order">
        <div class="pt-2 pb-1.5 px-2.5 border-x-0.5  shadow text-lg flex">{{ getTilte(order) }}</div>
        <div v-if="order === 'songs'" v-for="item in suggestData.songs" :key="item.id" class="py-1.5 px-1.5 hover-bg-main text-sm cursor-pointer">
            <span class="text-red-400">{{ item.name }}</span>
            <span class="pl-1.5">-- {{ item.artists[0]?.name }}</span>
        </div>
        <div v-if="order === 'artists'" v-for="item in suggestData.artists" class="py-1.5 px-2.5 hover-bg-main text-sm cursor-pointer flex items-center">
            <el-avatar size="small" :src="item.img1v1Url"/>
            <span class="text-red-400 ml-2 text-sm">{{ item.name }}</span>
        </div>
        <div v-if="order === 'albums'" v-for="item in suggestData.albums"
        class="hover-bg-main  py-1.5 px-2.5 cursor-pointer truncate "
        >
            <span class="text-red-400 text-sm">{{ item.name }}</span>
            <span class="ml-1">-- {{ item.artist.name }}</span>
        </div>
        <div v-if="order === 'playlists'" v-for="item in suggestData.playlists" class="hover-bg-main py-1.5 px-2.5 cursor-pointer flex">
            <el-avatar :src="item.coverImgUrl" size="small"/>
            <span class="text-red-400 text-sm ml-2 flex-1 truncate flex-1 w-1">{{ item.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@/stores/search';
import { usePlayerStore } from '@/stores/player';
import { useRouter } from 'vue-router';

const {suggestData, showSearchView} = storeToRefs(useSearchStore())
const {play} = usePlayerStore()
const router = useRouter()
const routerPush = (name: string, id: number) => {
    router.push({name: name, query: {id: id}}).then(() => {
        showSearchView.value = false
    })
};
const getTilte = (name: string) => {
    switch(name) {
        case 'songs':
            return '单曲';
        case 'albums':
            return '专辑';
        case 'artists':
            return '歌手';
        case 'playlists':
            return '歌单';
        default:
            return name;
    }
}
</script>

<style lang="scss" scoped>
</style>