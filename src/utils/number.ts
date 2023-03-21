/**
 * 格式化数字
 * 
 * 
 */
export function useNumberFormat(number: number): string | number {
    if(number > Math.pow(10, 8) ) {
        return Number((number / Math.pow(10, 8)).toFixed(1))+ '亿'
    }
    if(number > Math.pow(10, 7) ) {
        return Number((number / Math.pow(10, 7)).toFixed(1))+ '千万'
    }
    if(number > Math.pow(10, 4) ) {
        return Number((number / Math.pow(10, 4)).toFixed(1))+ '万'
    }
    return number;

}

/**
 * 格式化时间
 */
export function useFormatDuring(during: number) {
    const m = Math.floor(during / 60)
    const s = Math.floor(during) % 60
    const min = m >= 10 ? m : `0${m}`
    const sec =  s >= 10 ? s : `0${s}`
    return min+ ':' +sec;
}