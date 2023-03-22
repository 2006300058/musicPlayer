<template>
    <div class="mt-2">
        <div class="mt-5">
            <el-popover width="300px"  placement="bottom-start">
                <template #reference>
                    <button class="button-outline px-4 mt-3 ml-4 ">
                        <div class="text-sm pr-1">全部歌单</div>
                        <IconPark :icon="Right"/>
                    </button>
                </template>
                <div>
                    <div class="text-xl ">
                        全部视频
                    </div>
                    <div>
                        <el-scrollbar>
                            <div>
                            </div>
                        </el-scrollbar>
                    </div>
                   
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script setup lang="ts">
import  IconPark from '@/components/common/IconPark.vue';
import { Right } from '@icon-park/vue-next';
import CoverPlay from '@/components/common/CoverPlay.vue';
import type {Video} from "@/models/video";
import {useVideoGroup} from "@/utils/api";
import {useVideoStore} from '@/stores/video';
import {onMounted, reactive, ref, toRefs} from 'vue';
</script>

<style lang="scss" scoped>
</style>