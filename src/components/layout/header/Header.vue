<template>
    <div class="h-14 flex items-center justify-between border-b-1 shadow-lg border-gray-400">
        <div class="flex mx-5 items-center">
            <IconPark :icon="Left" :size="iconSize" :stroke-width="2"
            @click="router.back() " class="icon-button"
            >
            </IconPark>
            <IconPark :icon="Right" :size="iconSize" :stroke-width="2"
            @click="router.forward()" class="icon-button"
            ></IconPark>
        </div>
        <div>
            <SearchPop></SearchPop>
        </div>
        <div class="flex mx-5 items-center">
            <UserInfo></UserInfo>
            <IconPark :icon="Mail" :size="iconSize" :stroke-width="2"
            class="icon-button "/>
            <IconPark :icon="Platte" :size="iconSize" :stroke-width="2"
            class="icon-button "/>
            <IconPark :icon="HamburgerButton" :size="iconSize" :stroke-width="2" class="icon-button-last"/>
        </div>
    </div>
</template>

<script setup lang="ts">
//头部栏
import {HamburgerButton, Left, Mail, Platte, Right, Search} from '@icon-park/vue-next'
import  SearchPop from './SearchPop.vue';
import  UserInfo from './UserInfo.vue';
import IconPark from '@/components/common/IconPark.vue';
import { storeToRefs } from 'pinia';
import {useSearchStore} from "@/stores/search";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const iconSize = 25;
const router = useRouter();
const mode = ref(false);
const changeThemeMode = () => {
    window.document.documentElement.setAttribute('data-theme', mode.value ? 'dark':'light')
    mode.value = !mode.value
};
</script>

<style lang="scss" scoped>
.icon-button {
    @apply p-2 pr-5 cursor-pointer  transition-all duration-300 ;
    @apply hover:text-red-500 hover:scale-110 ;
}
.icon-button-last {
    @apply p-2 pr-1 cursor-pointer transition-all duration-300;
    @apply hover:text-red-500 hover:scale-110 ;
}
</style>