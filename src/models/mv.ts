/**
 * 调用此接口 , 传入 mv id,可获取 mv 播放地址
 * 可选参数 :** `id`: mv id
*接口地址 :** `/mv/url`
*调用例子 :`/mv/url?id=5436712`
 */
export interface MvUrl {
    id: number;
	url: string;
	r: number;
	size: number;
	md5: string;
	code: number;
	expi: number;
	fee: number;
	mvFee: number;
	st: number;
	promotionVo?: any;
	msg: string;
}