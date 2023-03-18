
import { defineStore,storeToRefs } from 'pinia';
import { ref } from 'vue';
import type { PersonalizedPrivateContent, Video, VideoGroup } from '@/models/video';
import type { PersonalizedMv } from '@/models/personalized';
import { usePersonalizedMv, usePersonalizedPrivateContentList, useVideoGroupList, useVideoTimelineRecommend } from "@/utils/api";
export const useVideoStore= defineStore('video', () => {

    const videoTimelineRecommend = ref<Video[]>([])
    const getVideoTimelineRecommend = async () => {
        if(videoTimelineRecommend.value.length) return;
        videoTimelineRecommend.value = await useVideoTimelineRecommend()

    };
/**获取独家放送 */
    const personalizedPrivateContent = ref<PersonalizedPrivateContent[]>([])
    const getPersonalizedPrivateContent = async () => {
        if (personalizedPrivateContent.value.length) return;
        personalizedPrivateContent.value = await usePersonalizedPrivateContentList(4)
    };
/**推荐 mv  */
    const personalizedMv = ref<PersonalizedMv[]>([])
    const getPersonalizedMv = async () => {
        if(personalizedMv.value.length) return
        personalizedMv.value = await usePersonalizedMv()
    };
 /**视频标签列表 */
    const videoGroup = ref<VideoGroup[]>([])
    const getVideoGroup = async () => {
        if(videoGroup.value.length) return;
        videoGroup.value =  await useVideoGroupList()
    };

    return {
        videoTimelineRecommend, getVideoTimelineRecommend,
        personalizedPrivateContent, getPersonalizedPrivateContent,
        personalizedMv, getPersonalizedMv,
        videoGroup, getVideoGroup
    }
});

