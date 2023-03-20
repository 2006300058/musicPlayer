<template>
    <!-- <ElScrollbar>
        <div v-for="menuItem in menus" class="mt-6 ">
            <div class="my-5 ml-5 text-lg text-red-500">
                {{ menuItem.name }}
            </div>
            <div v-for="(item, index) in menuItem.menus" class="flex flex-row hover-bg-main py-1.5 pl-2" @click="click(item)" :class="{'active': currentKey === item.key}">
                 <IconPark :icon="item.icon" :size="20" :theme="item.theme"/>
                <span class="ml-1">{{ item.name }}</span>
            </div>
        </div>
    </ElScrollbar> -->
  <ElScrollbar>
    <div class="my-5 ml-5 text-lg text-red-500">{{ menus[0].name }}</div>
    <div v-for="(item, index) in menus[0].menus" class="flex flex-row hover-bg-main py-1.5 pl-2" @click="click(item)" :class="{'active': currentKey === item.key}">
        <IconPark :icon="item.icon" :size="20" :theme="item.theme"/>
        <span class="ml-1">{{ item.name }}</span>
    </div>
    <div class="my-5 ml-5 text-lg text-red-500">{{ menus[1].name }}</div>
    <div v-for="(item, index) in menus[1].menus"  class="flex flex-row hover-bg-main py-1.5 pl-2" @click="click(item)" :class="{'active': currentKey === item.key}">
        <IconPark :icon="item.icon" :size="20" :theme="item.theme"/>
        <span class="ml-1">{{ item.name }}</span>
    </div>
  </ElScrollbar>
</template>
<script setup lang="ts">
import {useMenu} from './useMenu'
import IconPark from '@/components/common/IconPark.vue';

const {menus, currentKey, click} = useMenu()

</script>

<style lang="scss" scoped>
.active {
    @apply bg-gradient-to-l from-teal-500 to-red-600 text-slate-50 cursor-pointer;
}
</style>