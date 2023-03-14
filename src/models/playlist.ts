
/**
 * 获取歌单详情
说明 : 歌单能看到歌单名字 , 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐，但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情.
调用例子 : /playlist/detail?id=24381616
 */
export interface PlaylistDetail {
    id: number;
    name: string;
    coverImgId: number;
    coverImgUrl: string;
    coverImgId_str: string;
    adType: number;
    userId: number;
    createTime: number;
    status: number;
    opRecommend: boolean;
    highQuality: boolean;
    newImported: boolean;
    updateTime: number;
    trackCount: number;
    specialType: number;
    privacy: number;
    trackUpdateTime: number;
    commentThreadId: string;
    playCount: number;
    trackNumberUpdateTime: number;
    subscribedCount: number;
    cloudTrackCount: number;
    ordered: boolean;
    description: string;
    tags: string[];
    updateFrequency?: any;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    englishTitle?: any;
    officialPlaylistType?: any;
    subscribers: PlayListDetailSubscribers[];
    subscribed: boolean;
    creator: PlayListDetailCreator;
    tracks: PlayListDetailTracks[];
    videoIds?: any;
    videos?: any;
    trackIds: PlayListDetailTrackIds[];
    shareCount: number;
    commentCount: number;
    remixVideo?: any;
    sharedUsers?: any;
    historySharedUsers?: any;
}

export interface PlayListDetailSubscribers {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail?: any;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    anchor: boolean;
    avatarImgId_str: string;
}

export interface PlayListDetailCreator {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail: PlayListDetailCreatorAvatarDetail;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    anchor: boolean;
    avatarImgId_str: string;
}

export interface PlayListDetailCreatorAvatarDetail {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
}

export interface PlayListDetailTracks {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: PlayListDetailTracksAr;
    alia: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    al: PlayListDetailTracksAl;
    dt: number;
    h: PlayListDetailTracksH;
    m: PlayListDetailTracksM;
    l: PlayListDetailTracksL;

}

export interface PlayListDetailTracksAr {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
}

export interface PlayListDetailTracksAl {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
}

export interface PlayListDetailTracksH {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
}

export interface PlayListDetailTracksM {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
}

export interface PlayListDetailTracksL {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
}

export interface PlayListDetailTracksSq {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
}

export interface PlayListDetailTrackHr {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
}

export interface PlayListDetailTrackIds {
    id: number;
    v: number;
    t: number;
    at: number;
    alg?: any;
    uid: number;
    rcmdReason: string;
    sc?: any;
    f?: any;
    sr?: any;
}
/**
 * 为什么文档没有,我不到啊,高质量歌单
 */
export interface PlaylistHighqualityTag {
    id: number;
	name: string;
	type: number;
	category: number;
	hot: boolean;
}


