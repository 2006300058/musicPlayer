<template>
    <div>
        <el-slider v-model="currentTime" :show-tooltip="false" :min="0"    :max="duration" @input="onSliderInput" @change="onSliderChange"
        
        />
    </div>

</template>

<script setup lang="ts">
import {storeToRefs, defineStore} from 'pinia'
import { toRefs, onMounted, ref, reactive } from 'vue';
import {usePlayerStore} from '@/stores/player'


const { currentTime, audio, duration, onSliderChange, onSliderInput} = toRefs(usePlayerStore())



</script>

<style lang="scss" scoped>

</style>