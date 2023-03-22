<template>
    <div class="grid gap-3 grid-flex-row grid-cols-7 xl:grid-cols-10 2xl:grid-cols-14" >
        <div class=" py-1 text-main hover-text bg-gray-200 text-center rounded" @click="catClick('全部')" :class="{active:('全部' === activeName)}">全部</div>
        <div v-for="(item, index) in tags" :key="item.id">
            <div class=" py-1 text-main hover-text bg-gray-200 text-center rounded" @click="catClick(item.name)" :class="{active: (item.name === activeName)}" >{{ item.name }}</div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import {ref,toRefs,onMounted } from 'vue'
import { usePlaylistHighqualityTags } from '@/utils/api';
import {useRouter} from 'vue-router'
import type { PlaylistHighqualityTag } from '@/models/playlist';

const emit = defineEmits<{
    (e: 'catChange', cat: string): void
}>()

let activeName  = ref<string>('')
const catClick = (cat: string) => {
    emit('catChange', cat)
    activeName.value = cat
    console.log(activeName.value)
    
}


const tags = ref<PlaylistHighqualityTag[]>()

onMounted(async () => {
    tags.value = await usePlaylistHighqualityTags()
})

</script>

<style lang="scss" scoped>
.active {
    @apply bg-red-500 text-white rounded
}
</style>