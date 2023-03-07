

//全局扩展
import { first, last, sampleSize, sample, chunk, trimEnd} from 'lodash'
import dayjs from 'dayjs'
import { useNumberFormat } from './number'
declare global {
    interface Array<T> {
        first<T>(this: T[]): T  //获取第一个
        last<T>(this: T[]): T   //获取最后个
        sample<T>(this: T[]): T //获取随机一个
        /** 
        @param size
        */
        sampleSize<T>(this: T[], size: number): T[]  //获取size个随机
        
        /**
         * 将数组（array）拆分成多个 size 长度的区块
         * @param size
         */
        chunk<T>(this: T[], size: number): T[][]

    }

    interface String {
        toInt(this: string): number
        trimEnd(this: string, chars?: string): string

    }

    interface Number {
        toDate(this: number, format?: string): string
        NumberFormat(this: number): string | number
    }
}
//重写和添加
Array.prototype.first = function<T>(this: T[]): T {
    return first<T>(this) as T
}

Array.prototype.last = function<T>(this: T[]): T {
    return last<T>(this) as T
}

Array.prototype.sample = function<T>(this: T[]): T {
    return sample<T>(this) as T
}

Array.prototype.sampleSize = function<T>(this: T[]): T[]{
    return sampleSize<T>(this) as T[]
}

Array.prototype.chunk = function<T>(this: T[]): T[][]{
    return chunk<T>(this) as T[][]
}

String.prototype.toInt = function(this: string): number {
    return parseInt(this) as number
}

String.prototype.trimEnd = function(this: string, chars: string = ' '): string {
    return trimEnd(this, chars) as string
}

Number.prototype.toDate = function(this: number, format: string = 'YYYY-MM-DD'): string {
    return dayjs(this).format(format)
}

Number.prototype.NumberFormat = function(this: number): string | number {
    return useNumberFormat(this)
}