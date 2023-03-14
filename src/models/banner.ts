/**
 * 说明 : 调用此接口 , 可对 MV,电台,视频点赞
 * 调用例子 : `/banner`, `/banner?type=2`
 */
export interface Banner {
    pic:string;
    targetId:number;
    targetType:number;
    typeTitle:string;
    bannerId:number;
}