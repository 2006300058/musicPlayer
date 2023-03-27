<template>
    <div class="flex ">
        <img :src="song.al?.picUrl || Logo" class="w-11 h-11 rounded" alt="点我！"/>
        <div>
            <div class="flex truncate">
                <div class="ml-2" v-if="songUrl.freeTrialInfo?.end>0">试听</div>
                <span class="ml-2 text-xs">{{ song.name || '网易云音乐 ' }} - </span>
                <span class="ml-2 text-xs">{{ song.ar?.first().name|| ' 我是一个一个' }}</span>
                <IconPark v-if="song.mv>0" :icon="PlayTwo" size="18" class="ml-2 text-orange-400 cursor-pointer" @click="router.push({name:'mvDetail', query:{id:song.mv}})"/>
            </div>
            <div class=" flex  pt-2 gap-x-3 text-main">
                <IconPark :icon="Like" class="ml-2 pr-2 hover-text" size="18" :stroke-width="3" />
                <IconPark :icon="DownTwo" class="ml-2 pr-5 hover-text" size="18" :stroke-width="3" />
                <el-badge :max="999" :value="1000" class="badge">
                    <IconPark :icon="Comment" class=" hover-text " size="18" :stroke-width="3" />
                </el-badge>
                
            </div>
        </div>
    
    </div>
</template>

<script setup lang="ts">
import {Like, DownTwo, MoreTwo, Comment, PlayTwo} from '@icon-park/vue-next'
import {usePlayerStore} from "@/stores/player";
import {Logo} from '@/assets/img';
import IconPark from "@/components/common/IconPark.vue";
import {toRefs} from "vue";
import { useRouter } from 'vue-router';

const {song, songUrl} = toRefs(usePlayerStore())
const router = useRouter()

</script>

<style lang="scss" scoped>
     
        .badge {
            .el-badge__content {
                @apply scale-90 left-1  bg-stone-100 text-slate-500 bg-opacity-80 right-auto;
                @apply dark:bg-stone-900;
            }
        }
    
</style>