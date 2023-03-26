<template>
    <div v-if="artistDetail">
        <Info :artist-detail="artistDetail"/>
        <div class="mt-7 ml-5">
            <el-tabs >
                <el-tab-pane>
                    <template #label>
                        <span class="flex justify-center mr-3">
                            <IconPark v-bind:icon="Focus" size="18"/>
                            <span class="text-sm pl-1">精选</span>
                        </span>
                    </template>
                </el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <span class="flex justify-center mr-3 ">
                            <IconPark v-bind:icon="Music" size="18"/>
                            <span class="text-sm pl-1">歌曲</span>
                        </span>
                    </template>
                    <Songs :id="id"/>
                </el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <span class="flex justify-center mr-3 ">
                            <IconPark v-bind:icon="Camera" size="18"/>
                            <span class="text-sm pl-1">专辑</span>
                        </span>
                    </template>
                    <Album :id="id"/>
                </el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <span class="flex justify-center mr-3 ">
                            <IconPark v-bind:icon="VideoTwo" size="18"/>
                            <span class="text-sm pl-1">视频</span>
                        </span>
                    </template>
                    <Video/>
                </el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <span class="flex justify-center mr-3 ">
                            <IconPark v-bind:icon="MenuUnfoldOne" size="18"/>
                            <span class="text-sm pl-1">详情</span>
                        </span>
                    </template>
                    <Desc/>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="mt-5">
            <RouterView/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Album from './Album.vue';
import Desc from './Desc.vue';
import Info from './Info.vue';
import Songs from './Songs.vue';
import Video from './Video.vue';
import { onMounted, ref } from 'vue';
import { userArtistDetail } from '@/utils/api';
import {useRoute, useRouter} from 'vue-router';
import type { ArtistDetail } from '@/models/artist_detail';
import { Focus,Music,Camera,VideoTwo,MenuUnfoldOne } from '@icon-park/vue-next';
import  IconPark from '@/components/common/IconPark.vue';

const route = useRoute()
const router = useRouter()
const id = Number(route.query.id)
const artistDetail = ref<ArtistDetail>()
const tab = ref('music')


onMounted(async() => {
  artistDetail.value =  await userArtistDetail(id)
})
</script>

<style lang="scss" scoped>
.el-tabs__nav-wrap::after {
    height: 0;
}
.el-tabs__header {
    @apply m-0
}
</style>