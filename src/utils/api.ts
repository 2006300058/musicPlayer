
import type{ ArtistDescIntroduction } from './../models/artist_detail';
import { first } from 'lodash';

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
     }>("login/cellphone", {phone: phone, password: password, timestamp: new Date().getTime()})
}
/**邮箱登录 */
export async function useLoginEmail(email: string, password: string) {
    return await http.get<{
        code: number,
        cookie: string,
        token: string,
    }>('login/', {email: email, password: password, timestamp: new Date().getTime()})
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
    
    //return data.first()
    return data[0]
    
}

export async function useDetail(id: number) {
    const {songs} = await http.get<{songs: Song[]}>('/song/detail', {ids: id})
   // return songs.first()
   return songs[0]
    
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

/** 高质量歌单*/
export async function usePlaylistHighqualityTags() {
    const {tags} = await http.get<{tags: PlaylistHighqualityTag[]}>('playlist/highquality/tags')
    return tags
}
/** 调用此接口 , 可获取精品歌单
可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
limit: 取出歌单数量 , 默认为 20
before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据*/
export async function usePlaylistHighquality(params?: {limit?: number, before?:number, cat: string}) {
    return await http.get<{playlists: PlaylistDetail[], total: number, more: boolean, lasttime: number}>('top/playlist/highquality', params)
}
/**获取视频标签列表 
说明 : 调用此接口 , 可获取视频标签列表  

**接口地址 :** `/video/group/list`

**调用例子 :** `/video/group/list` */
export async function useVideoGroup(id?: number, offset?: number) {
    const {datas} = await http.get<{ datas: Video[] }>(id? 'video/group' : 'video/timeline/all', {
        id: id,
        offset: offset
    })
    return datas
}
/**获取歌单详情必选参数 : id : 歌单 id

可选参数 : s : 歌单最近的 s 个收藏者
接口地址 : /playlist/detail
调用例子 : /playlist/detail?id=24381616 */
export async function usePlayListDetail(id: number, s: number = 8) {
    const {playlist} = await http.get<{ playlist: PlaylistDetail }>('/playlist/detail', {id: id, s: s})
    console.log(playlist.description)
    return playlist
}

export async function usePlayListTrackAll(id: number) {

    const {songs} = await http.get<{ songs: Song[] }>('playlist/track/all', {id: id})
    return songs
}
/**文档没有，可能是歌手细节 */
export async function userArtistDetail(id: number) {
    const {data} = await http.get<{data: ArtistDetail}>('artist/detail', {id: id})
    return data
}
/**应该是获取歌手的歌曲 */
export async function useArtistSongs(id: number, order: string = 'time', limit: number = 10, offset: number = 0) {
    return await http.get<{songs: Song[]}>('artist/songs', {id: id,order: order, limit: limit, offset: offset})
}
/**获取歌手专辑
说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容
**必选参数 :** `id`: 歌手 id
**可选参数 :** `limit`: 取出数量 , 默认为 50
`offset`: 偏移数量 , 用于分页 , 如 :( 页数 -1)\*50, 其中 50 为 limit 的值 , 默认
为 0
**接口地址 :** `/artist/album`
**调用例子 :** `/artist/album?id=6452&limit=30` ( 周杰伦 )
 */
export async function useArtistAlbum(id: number, limit: number = 10, offset: number = 0) {
    return await http.get<{hotAlbums: Album[]}>('artist/album', {id: id, limit: limit, offset: offset})
}
/**### 获取歌手描述

说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述

**必选参数 :** `id`: 歌手 id

**接口地址 :** `/artist/desc`

**调用例子 :** `/artist/desc?id=6452` ( 周杰伦 ) */
export async function useArtistDesc(id: number) {
    const desc = await http.get< ArtistDesc>('artist/desc', {id: id})
    return desc
}
/**### 获取歌手 mv

说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调
用`/mv`传入此接口获得的 mvid 来拿到 , 如 :
`/artist/mv?id=6452`,`/mv?mvid=5461064`

**必选参数 :** `id`: 歌手 id, 可由搜索接口获得

**接口地址 :** `/artist/mv`

**调用例子 :** `/artist/mv?id=6452` */
export async function useArtistMv(id: number) {
    const {mvs} = await http.get<{mvs: Mv[]}>('artist/mv', {id: id})
    return mvs
}
/**### 获取专辑内容

说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容

**必选参数 :** `id`: 专辑 id

**接口地址 :** `/album`

**调用例子 :** `/album?id=32311` */
export async function useAlbum(id: number) {
    const {songs, album} = await http.get<{songs: Song[], album: Album}>('album', {id: id})
    return {songs, album}
}
/**### mv 地址 

说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址

**可选参数 :** `id`: mv id

**接口地址 :** `/mv/url`

**调用例子 :**`/mv/url?id=5436712` */
export async function useMvUrl(id: number) {
    const {data} = await http.get<{data: MvUrl}>('/mv/url', {id: id})
    return data
}

