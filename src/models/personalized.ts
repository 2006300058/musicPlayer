
/**
 * 说明 : 调用此接口 , 可获取推荐歌单
*可选参数 :** `limit`: 取出数量 , 默认为 30 (不支持 offset)
**接口地址 :** `/personalized`
*调用例子 :** `/personalized?limit=1`
 */
export interface Personalized {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: string;
}

/**
 * 说明 : 调用此接口 , 可获取推荐新音乐
*接口地址 :** `/personalized/newsong`
*调用例子 :** `/personalized/newsong`
 */
export interface PersonlizedNewSong {
    id: number;
    type: number;
    name: string;
    picUrl: string;
    canDislike: boolean;
    song: PNSSong;
    alg: string;
}
/**
 *  PersonlizedNewSong生的
 */
export interface PNSSong {
    name: string;
    id: number;
    position: number;
    alias: any[];
    status: number;
    fee: number;
    copyrightId: number;
    disc: string;
    no: number;
    artists: PNSSongArtists[];
    album: PNSSongAlbum;
    starred: boolean,
    popularity: number,
    score: number,
    starredNum: number,
    duration: number,
    playedNum: number,
    dayPlays: number,
    hearTime: number,
    sqMusic: any,
    hrMusic: any,
    ringtone: string,
    crbt: any,
    audition: any,
    copyFrom: string,
    commentThreadId: string,
    rtUrl: any,
    ftype: number,
    rtUrls: any[],
    copyright: number,
    transName: any,
    sign: any,
    mark: number,
    originCoverType: number,
    originSongSimpleData: any,
    single: number,
    noCopyrightRcmd: any,
    rtype: number,
    rurl: any,
    mvid: number,
    bMusic: PNSSongBMusic,
    mp3Url: any,
    mMusic: PNSSongMMusic,
    lMusic: PNSSongLMusic,
    hMusic: PNSSongHMusic,
    exclusive: boolean,
    privilege: PNSSongPrivilege
}
/**
 * PNSSong生的
 */
export interface PNSSongArtists {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}
/**
 * PNSSong生的
 */
export interface PNSSongAlbum {
    name: string;
    id: number;
    type: string;
    size: number;
    picId: number;
    blurPicUrl: string;
    companyId: number;
    pic: number;
    picUrl: string;
    publishTime: number;
    description: string;
    tags: string;
    company: string;
    briefDesc: string;
    artist: PNSSongAlbumArtist;
    songs: any[];
    alias: any[];
    status: number;
    copyrightId: number;
    commentThreadId: string;
    artists: PNSSongAlbumArtists[];
    subType: string;
    onSale: boolean;
    mark: number;
    picId_str: string;
}
/**
 * PNSSong生的PNSSongAlbum生的
 */
export interface PNSSongAlbumArtist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}
/**
 * PNSSong生的PNSSongAlbum生的
 */
export interface PNSSongAlbumArtists {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}
/**
 * PNSSong生的
 */
export interface PNSSongBMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}
/**
 * PNSSong生的
 */
export interface PNSSongMMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}
/**
 * PNSSong生的
 */
export interface PNSSongLMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}
/**
 * PNSSong生的
 */
export interface PNSSongHMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}
/**
 * PNSSong生的
 */
export interface PNSSongPrivilege {
    id: number;
    fee: number;
    payed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    toast: boolean;
    flag: number;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    freeTrialPrivilege: PNSSongPrivilegeFreeTrialPrivilege;
    chargeInfoList: PNSSongPrivilegeChargeInfoList[];
}
/**
 * PNSSong生的PNSSongPrivilege生的
 */
export interface PNSSongPrivilegeFreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
   
}
/**
 * PNSSong生的PNSSongPrivilege省的
 */
export interface PNSSongPrivilegeChargeInfoList {
    rate: number;
    chargeType: number;

}

export interface PersonalizedMv {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime?: any;
    duration: number;
    playCount: number;
    subed: boolean;
    artists: {
        id: number;
        name: string;
    }[];
    artistName: string;
    artistId: number;
    alg: string;
}

export interface DjProgram {
	id: number;
	type: number;
	name: string;
	copywriter: string;
	picUrl: string;
	canDislike: boolean;
	trackNumberUpdateTime?: any;
}

