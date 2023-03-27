<template>
    <el-drawer  :with-header="false"  size= "360px" custom-class="playlist" v-model="showPlayList" >
        <div class="flex flex-col h-screen">
            <div class="p-2.5 flex-shrink-0">
                <div class="text-xl font-bold mb-2">播放列表</div>
                <div class="text-lg mt-1 flex justify-between items-center">
                    <div>共 {{ playListCount }} 首歌曲</div>
                        <div class="text-dc flex items-center hover-text" @click="clearPlayList">
                     <IconPark :icon="Delete" size="18"/>
                        <span class="ml-0.5 text-lg">清空</span>
                    </div>
                </div>
            </div>
            <div class="flex-1 overflow-hidden">
                <el-scrollbar> 
                    <PlayListSongItem v-for="(item, index) in playList" :song="item" :playId="item.id" @dblclick="play(item.id)"/>
                </el-scrollbar>
            </div>
        </div>
       
           
        
        
    </el-drawer>
</template>

<script setup lang="ts">
import {onMounted, ref, reactive, toRefs} from 'vue'
import IconPark from "@/components/common/IconPark.vue";
import {Delete} from "@icon-park/vue-next";
import PlayListSongItem from './PlayListSongItem.vue';
import {usePlayerStore} from '@/stores/player'
import { storeToRefs } from 'pinia';

const {playList,showPlayList,playListCount} = storeToRefs
(usePlayerStore())
const {play,clearPlayList} = usePlayerStore()




</script>

<style lang="scss" scoped>
.playlist {
    .el-drawer__body {
    padding: 0;
  }
}



</style>