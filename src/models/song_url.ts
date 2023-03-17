/**获取音乐 url，调用例子 : /song/url?id=33894312
 */
export interface SongUrl {
    id: number;
    url: string;
    br: number;
    size: number;
    md5: string;
    code: number;
    expi: number;
    type: string;
    gain: number;
    fee: number;
    payed: number;
    flag: number;
    canExtend: boolean;
    freeTrialPrivilege: RootObjectFreeTrialPrivilege;
    freeTimeTrialPrivilege: RootObjectFreeTimeTrialPrivilege;
    urlSource: number;
    freeTrialInfo:{
        start:number
        end:number
    }
}

export interface RootObjectFreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
}

export interface RootObjectFreeTimeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    type: number;
    remainTime: number;
}
