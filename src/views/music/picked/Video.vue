<template>
    <div class="my-5">
        <Title title="独家放送"/>
        <div class="grid gap-5 grid-flow-row grid-cols-3 lg:grid-cols-4">
            <div v-for="(item, index) in personalizedPrivateContent.slice(0,4)" :key="item.id" @click="router.push({name: 'mvDetail' , query:{id: item.id}})"
            >
                <CoverPlay v-bind:pic-url="item.sPicUrl" video :name="item.name"
                 />
                 <div class="truncate text-main mt-2 text-sm">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue';
import { onMounted, toRefs } from 'vue';
import CoverPlay from '@/components/common/CoverPlay.vue';
import { useRouter } from 'vue-router';
import {Pages} from '@/router/pages'
import { useVideoStore } from '@/stores/video';

const {personalizedPrivateContent} = toRefs(useVideoStore())
const {  getPersonalizedPrivateContent} = useVideoStore()
const router = useRouter()
onMounted(async() => {
    await getPersonalizedPrivateContent()
})
</script>

<style lang="scss" scoped>
</style>