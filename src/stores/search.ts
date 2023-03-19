import type{ SearchSuggest } from '@/models/search';
import {defineStore, storeToRefs} from 'pinia'
import {useSearchSuggest} from '@/utils/api'
export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            /**要不要搜索 */
            showSearchView: false,
           
            searchKeyWord: '',
             /**搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息 */
            suggestData: {} as SearchSuggest,

        };
    },
    getters: {
        showHot: state => {
            return state.searchKeyWord == ''
        }
    },
    actions: {
        /** 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息 */
        async suggest() {
            this.suggestData = await useSearchSuggest(this.searchKeyWord)
        }
    }
})