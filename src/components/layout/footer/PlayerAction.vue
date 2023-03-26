<template>
    <div class="items-center justify-end flex gap-x-12">
        <div class="text-sm">
            {{ useFormatDuring(currentTime) }} / {{ useFormatDuring(duration) }}
        </div>
        <div class="flex items-center">
            <IconPark :icon="TextMessage" size="22" :stroke-width="3" class="hover-text mr-2" title="歌词"/>
            <div class="flex  items-center hover-text " @click="showPlayList=true">
                    <IconPark :icon="MusicList" size="22" :stroke-width="3" title="播放列表"/>
                    <span  class="text-lg ml-1">{{ playListCount }}</span>
            </div>
        </div>   
    </div>
</template>

<script setup lang="ts">
import IconPark from '@/components/common/IconPark.vue';
import { MusicList, TextMessage } from '@icon-park/vue-next';
import { usePlayerStore } from '@/stores/player';
import { useFormatDuring } from '@/utils/number';
import { storeToRefs } from 'pinia';

const {currentTime, duration, playListCount, showPlayList} = storeToRefs(usePlayerStore())
</script>

<style lang="scss" scoped>
</style>