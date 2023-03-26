<template>
    <div class="mt-5 mb-4 ml-3 flex">
        <img :src="artistDetail.artist.cover" class=" w-44 h-44 rounded-full flex-shrink-0 object-cover"/>
        <div class="flex flex-col">
            <div class="text-2xl font-bold pl-5">{{ artistDetail.artist.name }}</div>
            <div class="pl-5 pt-2">
                <MoreText :text="artistDetail.artist.briefDesc" :end="50"/>
            </div>
            <div class="flex pt-3 pl-5">
                <div class="mr-4">单曲数：{{artistDetail.artist.musicSize}}  </div>
                <div class="mr-4">专辑数：{{artistDetail.artist.albumSize}}  </div>
                <div class="mr-4">MV数：{{artistDetail.artist.mvSize}}  </div>
            </div>
            <div class="flex gap-x-4 mt-5  justify-self-stretch">
                <button class="button w-32 items-center justify-center" >
                    <IconPark :icon="Plus" :size="20"/>
                    <span class="ml-2 text-sm mr-2 ">关注</span>
                </button>
                <button class="button-outline  w-32">
                    <IconPark :icon="Fm" :size="20"/>
                    <span class="ml-2 text-sm mr-2 ">歌手电台</span>
                </button>
                <button class='button-outline w-8'>
                    <IconPark :icon="More" :size="20"/>
                </button>
            </div>
        </div>     
    </div>
</template>

<script setup lang="ts">
import type { ArtistDetail } from '@/models/artist_detail';
import MoreText from '@/components/common/MoreText.vue';
import { More,Fm,Plus } from '@icon-park/vue-next';
import  IconPark from '@/components/common/IconPark.vue';
defineProps<{
    artistDetail: ArtistDetail
}>()
</script>

<style lang="scss" scoped>

</style>