<template>
    <div class="flex items-center justify-center gap-x-5">
        <IconPark :icon="loopType===0?PlayOnce:loopType===1?LoopOnce:ShuffleOne" size="22" :stroke-width="4" class="hover-text"  @click="toggleLoop" :title="loopType===0?'单曲播放':loopType===1?'列表循环播放':'随机播放' "
        />

        <IconPark :icon="GoStart" size="28" theme="filled" class="hover-text" @click="prev"/>

        <IconPark :icon="isPlaying?PauseOne:Play" size="45" theme="filled" class="hover-text text-red-400"
              @click="togglePlay"/>

        <IconPark :icon="GoEnd" size="28" class="hover-text" @click="next"/>
        <el-popover placement="top" width="10px">
            <template #reference>
                <IconPark :icon="VolumeSmall" class="hover-text" size="20" v-bind:stroke-width="3"/>
            </template>
            <PlayerVolumeSilder/>
        </el-popover>
    </div>
</template>

<script setup lang="ts">
import {Play, PauseOne, LoopOnce, ShuffleOne, PlayOnce, GoEnd, GoStart, VolumeSmall} from "@icon-park/vue-next";
import {toRefs} from "vue";
import IconPark from "@/components/common/IconPark.vue";
import PlayerVolumeSilder from "./PlayerVolumeSilder.vue";
import {usePlayerStore} from "@/stores/player";

const {toggleLoop, loopType, next, prev, togglePlay, isPause, isPlaying}  = toRefs(usePlayerStore())
</script>

<style lang="scss" scoped>
</style>