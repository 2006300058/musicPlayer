
<template>
    <el-popover v-model:visable="showSearchView" width="250px" popper-style="max-width:auto; padding:0">
        <template #reference>
            <ElInput
                placeholder="可搜索音乐，歌手，歌单"
                maxlength="30"
                :prefix-icon="Search"
                clearable
                @input="searchInput"
                v-model="searchKeyWord"
                @focus="showSearchView=true"
                @blur="showSearchView=false"
            />
        </template>
        <div class="h-100">
            <el-scrollbar max-height="400px">
                <div class="pb-2.5">
                  <div v-if="showHot">
                    <div  class="pt-2 pb-2 px-2.5 border-b-1 border-gray-400">热门搜索</div>
                    <div v-for="(item, index) in searchHot" :key="item.searchWord" class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-sm border-b-0.5 border-gray-400">
                        <div>
                        <span class="mr-1.5">{{ index+1 }}.</span>
                        <span>{{ item.searchWord }}</span>
                        </div>
                        <div class="text-red-400 text-sm">
                            {{ useNumberFormat(item.score) }}热度
                        </div>
                    </div>
                  </div>
                  <SearchSuggest v-else/>  
                </div>
                
            </el-scrollbar>
        </div>
    </el-popover>
</template>

<script setup lang="ts">
import { debounce } from 'lodash';
import  { Search } from '@icon-park/vue-next';
import {storeToRefs} from "pinia";
import {useSearchStore} from "@/stores/search";
import {onMounted, ref} from "vue";
import type { SearchHotDetail } from '@/models/search';
import SearchSuggest from './SearchSuggest.vue';
import { useSearchHotDetail } from '@/utils/api';
import { useNumberFormat } from '@/utils/number';

const {showSearchView, searchKeyWord, showHot} = storeToRefs(useSearchStore());

const {suggest} = useSearchStore();

const hotClick = (text:string) => {
    searchKeyWord.value = text
    suggest()
    showSearchView.value = true
};

const searchInput = debounce((value: string | number) => suggest(), 1000, {'maxWait': 2000});
/**热门搜索列表 */
const searchHot = ref<SearchHotDetail[]>([])

onMounted( async() => {
    searchHot.value = await useSearchHotDetail()
})
</script>

<style lang="scss" scoped>
</style>