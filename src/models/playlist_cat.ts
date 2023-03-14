/**
 * 说明 : 调用此接口,可获取歌单分类,包含 category 信息
 * 调用例子 : /playlist/catlist
 */
export interface PlayListCat {
    name: string;
    resourceCount: number;
    imgId: number;
    imgUrl?: any;
    type: number;
    category: number;
    resourceType: number;
    hot: boolean;
    activity: boolean;
}