<template>
    <div class="my-5">
        <Title title="推荐电台"/>
        <div class="grid  gap-5 grid-flow-row grid-cols-3 lg: grid-cols-5">
            <div v-for="(item, index) in djProgram.slice(0,5)" :key="item.id" @click="router.push({name: 'video', query:{id: item.id} })" >
                <CoverPlay :pic-url="item.picUrl" :name="item.name"/>
                <div class="truncate pt-1 text-sm  text-center">{{ item.name }}</div>
            </div>
        </div>      
    </div>
</template>

<script setup lang="ts">
import { onMounted, toRefs } from 'vue';
import { usePersonalizedStore } from '@/stores/personalized';
import { useRouter } from 'vue-router';
import Title from '@/components/common/Title.vue';
import CoverPlay from '@/components/common/CoverPlay.vue';

const {getDjProgram} = usePersonalizedStore()
const {djProgram} = toRefs(usePersonalizedStore())
const router = useRouter()

onMounted(async() => {
   await getDjProgram()
})
</script>

<style lang="scss" scoped>

</style>