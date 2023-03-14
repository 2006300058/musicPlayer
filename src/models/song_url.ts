//获取音乐 url，调用例子 : /song/url?id=33894312
export interface SongUrl {
    id: number,
    url: string,
    br: number,
    size: number,
    md5: string,
    code: number,
    expi: number,
    type: string,
    gain: number,
    peak: number,
    fee: number,
    uf?: any,
    payed: number,
    flag: number,
    canExtend: boolean,
    freeTrialInfo?: any,
    level: string,
    encodeType: string,
    freeTrialPrivilege: SongUrlFreeTrialPrivilege,
    freeTimeTrialPrivilege: SongUrlFreeTimeTrialPrivilege,
    urlSource: number,
    rightSource: number,
    podcastCtrp?: any,
    effectTypes?: any,
    time: number,
}

export interface SongUrlFreeTrialPrivilege {
    resConsumable: boolean,
    userConsumable: boolean,
    listenType?: any,
    cannotListenReason?: any
}

export interface SongUrlFreeTimeTrialPrivilege {
    resConsumable: boolean,
    userConsumable: boolean,
    type: number,
    remainTime: number
}