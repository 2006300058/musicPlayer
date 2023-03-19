


<template>
    <el-popover >
        <template #reference>
            <ELInput
                placeholder="可搜索音乐，歌手，歌单"
                maxlength="30"
                :prefix-icon="Search"
                clearable
                @input=""
                v-model=""
                @focus=""
                @blur=""
            />
        </template>
        <div>
            <el-scrollbar>
                <div>
                    <div v-if=""></div>
                    <SearchSuggest v-else/>
                </div>
            </el-scrollbar>
        </div>
    </el-popover>
</template>

<script setup lang="ts">
import  { Search } from '@icon-park/vue-next';
import {storeToRefs} from "pinia";
import {useSearchStore} from "@/stores/search";
import {onMounted, ref} from "vue";
import type { SearchHotDetail } from '@/models/search';
</script>

<style lang="scss" scoped>
</style>