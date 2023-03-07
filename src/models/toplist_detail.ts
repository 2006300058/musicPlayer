//调用此接口,可获取所有榜单内容摘要
//**接口地址 :** `/toplist/detail`
export interface TopListDetail {
    subscribers: any[];
	subscribed?: any;
	creator?: any;
	artists?: any;
    tracks: TopListDetailTracks[];
    updateFrequency: string,
    backgroundCoverId: number,
    backgroundCoverUrl?: any,
    titleImage: number,
    titleImageUrl?: any,
    englishTitle?: any,
    opRecommend: boolean,
    recommendInfo?: any,
    socialPlaylistCover?: any,
    adType: number,
    userId: number,
    subscribedCount: number,
    cloudTrackCount: number,
    createTime: number,
    highQuality: boolean,
    specialType: number,
    newImported: boolean,
    anonimous: boolean,
    coverImgId: number,
    updateTime: number,
    trackCount: number,
    coverImgUrl: string,
    commentThreadId: string,
    totalDuration: number,
    trackUpdateTime: number,
    trackNumberUpdateTime:  number,
    privacy:  number,
    playCount:  number,
    description: string,
    ordered: true,
    tags: any[],
    status:  number,
    name: string,
    id:  number,
    coverImgId_str: string,
    ToplistType: string
}

export interface TopListDetailTracks {
    first: string;
	second: string;
}

