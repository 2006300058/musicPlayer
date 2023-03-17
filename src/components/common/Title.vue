<template>
    <div class="text-xl py-3 mt-2 flex items=center">
        <div>{{ title }}</div>
        <IconPark :icon="Right" size="25" :stroke-width="2"/>
    </div>
</template>

<script setup lang="ts">
//各种标题，发现页的标题
import  IconPark from './IconPark.vue';
import {Right} from '@icon-park/vue-next'

defineProps<{
    title: string
}>()
</script>

<style lang="scss"></style>