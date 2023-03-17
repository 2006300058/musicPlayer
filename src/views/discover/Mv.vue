
import type CoverPlayVue from '@/components/common/CoverPlay.vue';

<template>
    <Tilte title="推荐MV" class="mt-5"/>
    <div>
        <div>
            <CoverPlay>
            </CoverPlay>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, toRefs} from "vue";
import {useVideoStore} from "@/stores/video";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useRouter} from "vue-router";
import {Pages} from "@/router/pages";
</script>

<style lang="scss">
</style>