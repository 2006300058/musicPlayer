<template>
    <div class="mt-2">
        <div class="mt-5">
            <el-popover width="650px"  placement="bottom-start">
                <template #reference>
                    <button class="button-outline px-4 mt-3 ml-4 ">
                        <div class="text-sm pr-1">全部视频</div>
                        <IconPark :icon="Right"/>
                    </button>
                </template>
                <div>
                    <div class="text-xl py-2 hover:text-red-500 hover:cursor-pointer" :class="{active: pageData.id === 0}" @click="idChange(0)">
                        全部视频
                    </div>
                    <div>
                        <el-scrollbar height="300px">
                            <div class="grid gap-4 grid-flex-row grid-cols-6 mt-2">
                                <span v-for="(item, index) in videoGroup" class="text-main text-sm px-1 py-1 hover:text-red-500 hover:cursor-pointer"
                                @click="idChange(item.id)"
                                :class="{active:item.id===pageData.id}"
                                >
                                    {{ item.name }}
                                </span>
                            </div>
                        </el-scrollbar>
                    </div>
                   
                </div>
            </el-popover>
        </div>
        <!-- 图片 -->
        <div class="grid gap-5 grid-flex-row grid-cols-3 ml-3 mt-2">
            <div v-for="(item, index) in videoList" class="pt-3 pr-2">
                <CoverPlay :pic-url="item.data.coverUrl" video/> 
                <div class="text-sm mt-2">{{ item.data.title }}</div>
            </div>
             
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

const {videoGroup} = toRefs(useVideoStore())
const {getVideoGroup} = useVideoStore()
const videoList = ref<Video[]>([])
const pageData = reactive({
    page: 1,
    id: 0
})
const getData = async () => {
    videoList.value = await useVideoGroup(pageData.id, pageData.page - 1)
}
const idChange =(id: number) => {
    console.log(id)
    pageData.id = id
    pageData.page = 1
    getData()
}

onMounted(() => {
    getVideoGroup()
    getData()
})
</script>

<style lang="scss" scoped>
.active {
    @apply text-red-500
}
</style>