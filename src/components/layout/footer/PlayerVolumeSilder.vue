<template>
     <div class="flex flex-col  items-center">
        <div>
            <el-slider vertical height="120px" :show-tooltip="false" v-model="volume" :max="100" :min="0" size="small" :disable="muted" @input="setVolume"/>
        </div>
        <div class="text-sm mt-3">{{ volume }}</div>
        <div class="mt-2">
            <IconPark :icon="muted?VolumeMute:VolumeSmall" size="16" theme="filled" class="hover-text" @click="toggleMuted"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {VolumeMute, VolumeSmall} from "@icon-park/vue-next";
import {toRefs} from "vue";
import {usePlayerStore} from "@/stores/player";
import IconPark from "@/components/common/IconPark.vue";

const {volume, muted, toggleMuted, setVolume} = toRefs(usePlayerStore())
</script>

<style lang="scss" scoped>
.el-popover.el-popper {
  min-width: auto;
}
</style>