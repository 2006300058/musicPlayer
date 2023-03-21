
import type { Banner } from "@/models/banner";
import type { DjProgram, Personalized, PersonalizedMv, PersonlizedNewSong } from "@/models/personalized";
import type { Album } from "@/models/album";
import type { ArtistDesc, ArtistDetail } from "@/models/artist_detail";
import type { Artist, Mv } from "@/models/artist";
import type { MvUrl } from "@/models/mv";
import type { PlayListCat } from "@/models/playlist_cat";
import type { PlayListHot } from "@/models/playlist_hot";
import type {PlaylistDetail, PlaylistHighqualityTag} from '@/models/playlist';
import type { SearchHotDetail, SearchSuggest } from "@/models/search";
import type { SongUrl } from "@/models/song_url";
import type { Song } from "@/models/song";
import type { TopListDetail } from "@/models/toplist_detail";
import type { UserProfile } from "@/models/user";
import type { PersonalizedPrivateContent, Video, VideoGroup } from "@/models/video";
import http from "./http";

export async function useLogin(phone: string, password: string) {
     return await http.get<{
        code: number,
        cookie: string,
        token: string
     }>("login/cellphone", {phone: phone, password: password})
}

export async function useLoginStatus() {
    return await http.get<{
        data: {
            code: number,
            profile: UserProfile
        }
    }>("login/status")
}
/**获取音乐 url，调用例子 : /song/url?id=33894312 */
export async function useSongUrl(id: number) {
    const {data} =  await http.get<{data: SongUrl[]}>('/song/url', {id: id})
    
    return data.first()
    
}

export async function useDetail(id: number) {
    const {songs} = await http.get<{songs: Song[]}>('/song/detail', {ids: id})
    return songs.first()
    
}
/**说明 : 调用此接口 , 可对 MV,电台,视频点赞 调用例子 : /banner, /banner?type=2 */
export async function useBanner() {
    const {banners} = await http.get<{banners: Banner[]}>('/banner', {type: 1})
    return banners
}
/**说明 : 调用此接口 , 可获取推荐歌单 可选参数 :** limit: 取出数量 , 默认为 30 (不支持 offset) 接口地址 :* /personalized 调用例子 :** /personalized?limit=1 */
export async function usePersonalized() {
    const {result} = await http.get<{result: Personalized[]}>('/personalized')
    return result
}
/**说明 : 调用此接口 , 可获取推荐新音乐 接口地址 :** /personalized/newsong 调用例子 :** /personalized/newsong */
export async function usePersonalizedNewSong() {
    const {result} = await http.get<{result: PersonlizedNewSong[]}>('/personalized/newsong')
    return result
}

export async function useTopListDetail() {
    const {list} = await http.get<{list: TopListDetail[]}>('/toplist/detail')
    return list
}
/**调用此接口 , 可获取推荐 mv  /personalized/mv*/
export async function usePersonalizedMv() {
    const {result} = await http.get<{result: PersonalizedMv[]}>('personalized/mv')
    return result
}

export async function usePersonalizedPrivateContentList(limit: number = 10, offset: number = 0) {
    const {result} = await http.get<{ result: PersonalizedPrivateContent[] }>('personalized/privatecontent/list', {
        limit: limit,
        offset: offset
    })
    return result
}
/**调用此接口 , 可获取视频标签列表 `/video/group/list`*/
export async function useVideoGroupList() {
    const {data} = await http.get<{data: VideoGroup[]}>('video/group/list')
    return data
}

export async function useVideoTimelineRecommend(offset: number = 0) {
    const {datas} = await http.get<{datas: Video[]}>('video/timeline/recommend',{
        offset: offset
    })
    return datas
}
/**调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息 调用例子 : /search/suggest?keywords= 海阔天空 /search/suggest?keywords= 海阔天空&type=mobile */
export async function useSearchSuggest(keywords: string) {
    const {result} = await http.get<{result: SearchSuggest}>('search/suggest',{keywords: keywords})
    return result
}
/**说明 : 调用此接口,可获取热门搜索列表 //调用例子 : /search/hot/detail */
export async function useSearchHotDetail() {
    const {data} = await http.get<{data: SearchHotDetail[] }>('/search/hot/detail')
    return data
}

export async function usePersonalizedDjProgram() {
    const {result} = await http.get<{result: DjProgram[]}>('/personalized/djprogram')
    return result
}

export async function userArtistList(pageData: { type: number, area: number, initial: string, page: number, limit: number}) {
    const res = await http.get<{artists: Artist[]}>('artist/list', {
        type: pageData.type,
        area: pageData.area,
        initial: pageData.initial,
        page: pageData.page,
        limit: pageData.limit,
        offset: (pageData.page -1) * pageData.limit
    })
    return res.artists
}





