//音乐仓库
import {defineStore} from 'pinia';
import { ref } from 'vue';
import type { Personalized, PersonlizedNewSong } from '@/models/personalized';
import  type { TopListDetail } from '@/models/toplist_detail';
import { usePersonalized, usePersonalizedNewSong, useTopListDetail } from '@/utils/api';
export const useMusicStore = defineStore('music', () => {
    /**歌曲排行 */
    const toplistDetailData = ref<TopListDetail[]>([])
    const  getTopListDetailData = async () => {
        if(toplistDetailData.value.length) return;
        toplistDetailData.value = await useTopListDetail();
    }
    /**个人数据 */
    const personalized = ref<Personalized[]>([])
    const getPersonalized = async () => {
        if(personalized.value.length) return;
        personalized.value = await usePersonalized()
    }
    /**个人歌曲 */
    const personalizedNewSong = ref<PersonlizedNewSong[]>([])
    const getPersonalizedNewSong = async () => {
        if(personalizedNewSong.value.length) return;
        personalizedNewSong.value = await usePersonalizedNewSong()
    }

    return {
        toplistDetailData, getTopListDetailData,
        personalized, getPersonalized,
        personalizedNewSong,getPersonalizedNewSong
    }

})