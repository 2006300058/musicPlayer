<template>
    <div class="pl-5 pr-5 music">
        <h1 class="text-3xl font-bold pt-8 pb-4">音乐馆</h1>
        <el-affix target=".music" :offset="56">
            <div class="bg-view">
                <el-tabs v-model="currentMenu" @tab-click="onTabClick">
                    <el-tab-pane v-for="menu in menus" :key="menu.name"  :name="menu.name" class="text-main">
                        <template #label>
                            <span  class="flex flex-row px-1 py-1.5 p-5 justify-betwend">
                                <IconPark :icon="menu.icon" size="20"/>
                                <span class="text-sm  ml-1">{{ menu.label }}</span>
                            </span>                         
                        </template>                   
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-affix>
        <div class="mt-5">
            <RouterView/>
        </div>

  </div>
    
</template>

<script setup lang="ts">
import { useMusicMenu } from './MusicController';

import  IconPark from '@/components/common/IconPark.vue';
const {menus, currentMenu, onTabClick} = useMusicMenu()

</script>

<style lang="scss" >
.music {
  .el-tabs__nav-wrap::after {
    height: 0;
  }
  .el-tabs__header{
    @apply m-0;
  }
}
</style>