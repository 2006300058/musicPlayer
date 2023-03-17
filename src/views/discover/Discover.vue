
<template>
    <div class="px-5">
        <!-- text-3xl: 设置字体大小为 3xl，即 3rem。
        font-bold: 设置字体粗细为粗体。
        pt-8: 设置上内边距为 8，即 2rem。
        pb-4: 设置下内边距为 4，即 1rem。 -->
        <h1 class="text-3xl font-bold pt-8 pb-4">推荐</h1>
        <!-- 推荐栏 -->
        <Banner :per-page="3"/>
        <!-- 专属歌单 -->
        <Personalized/>
        <!-- 推荐新音乐 -->
        <PersonalizedNewSong/>
        <!-- 推荐mv -->
        <Mv/>
    </div>
</template>

<script setup lang="ts">

import Personalized from './Personalized.vue';
import PersonalizedNewSong from './PersonalizedNewSong.vue';
import Banner from '@/components/common/Banner.vue';
import Title from '@/components/common/Title.vue';
import Mv from './Mv.vue';

</script>

<style lang="scss" scoped>

</style>