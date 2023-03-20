<template>
    <div class="px-3">
        <h1 class="text-3xl font-bold pt-8 pb-4 ml-3">音乐馆</h1>
        <el-affix  :offset="160">
            <el-tabs >
                <el-tab-pane v-for="(item, index) in menus" >
                    <template #label>
                        <div class="flex flex-row px-1 py-1.5 p-5 justify-betwend">
                            <IconPark :icon="item.icon" size="20"/>
                            <span class="ml-1 text-sm">{{ item.label }}</span>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </el-affix>
        <RouterView/>
    </div>
</template>

<script setup lang="ts">
import { useMusicMenu } from './MusicController';

import  IconPark from '@/components/common/IconPark.vue';
const {menus, currentMenu, onTabClick} = useMusicMenu()

</script>

<style lang="scss" >

</style>