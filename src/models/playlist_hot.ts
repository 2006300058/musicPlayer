/**
 *  调用此接口,可获取歌单分类,包含 category 信息
 * 调用例子 : /playlist/hot
 */
export interface PlayListHot {
    playlistTag: PlaylistTag,
    activity: boolean,
    hot: boolean,
    usedCount: number,
    createTime: number,
    position: number,
    category: number,
    name: string,
    id: number,
    type: number,
}

/**
 * PlayListHot生的
 */
export interface PlaylistTag {
    id: number;
    name: string;
    category: number;
    usedCount: number;
    type: number;
    position: number;
    createTime: number;
    highQuality: number;
    highQualityPos: number;
    officialPos: number;
}