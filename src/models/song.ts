//获取歌曲详情
export interface Song {
    name: string,
    id: number,
    pst: number,
    t: number,
    alias: string[],
    pop: number,
    st: number,
    rt?: any,
    fee: number,
    v: number,
    crbt?: any,
    cf: string,
    dt: number,
    hr?: any,
    a?: any,
    cd: string,
    no: number, 
    rtUrl?: any[],
    ftype: number,
    rtUrls: string[],
    djId: number,
    copyright: number,
    s_id: number,
    mark: number,
    originCoverType: number,
    originSongSimpleData?: any,
    tagPicList?: any,
    resourceState: boolean,
    version: number,
    songJumpInfo?: any,
    entertainmentTags?: any,
    awardTags?: any,
    single: number,
    noCopyrightRcmd?: any,
    rtype: number,
    rurl?: any,
    mst: number,
    cp: number,
    mv: number,
    publishTime: number
}

export interface songAr {
    id: number
    name: string
    tns: any[]
    alias: any[]
}

export interface songAl {
    id: number
    name: string
    picUrl: string
    tns: any[]
    pic_str: string
    pic: number
}

export interface songH {
    br: number,
    fid: number
    size: number
    vd: number
    sr: number
}

export interface songM {
    br: number,
    fid: number
    size: number
    vd: number
    sr: number
}

export interface songL {
    br: number,
    fid: number
    size: number
    vd: number
    sr: number
}

export interface songSQ {
    br: number,
    fid: number
    size: number
    vd: number
    sr: number
}