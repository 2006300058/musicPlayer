<template>
    <div class="pb-5">
        <div class=" py-2  flex flex-rows">
            <div class="p-1 font-bold flex-shrink-0">{{ options[0].name }} :</div>
            <el-space wrap :spacer="spacer" :size="10">
                <div v-for="(item, index) in options[0].list" key="item.key"
                class=" px-5 text-main hover-text" @click="optionChange(options[0].key,item.key)" :class="{active:(item.key===pageData.area)}">
                    {{ item.name }}
                </div>
            </el-space>
            
        </div>

        <div class="flex flex-rows py-2">
            <div class="p-1 font-bold flex-shrink-0">{{ options[1].name }} :</div>
            <el-space wrap :spacer="spacer" :size="10">
                <div v-for="(item, index) in options[1].list" key="item.key"
                class=" px-5  text-main hover-text" @click="optionChange(options[1].key,item.key)" :class="{active:(item.key===pageData.type)}">
                    {{ item.name }}
                </div>
            </el-space>
        </div>
        
        <div class="flex  py-2 ">
            <div class="p-1 font-bold flex-shrink-0">{{ options[2].name }} :</div>
            <el-space wrap :spacer="spacer" :size="10">
                <div v-for="(item, index) in options[2].list" :key="item.key"
                class=" px-4 pt-1 text-main hover-text" @click="optionChange(options[2].key,item.key)" :class="{active:(item.key===pageData.initial)}">
                    {{ item.name }}
                </div>
            </el-space>
        </div>
    </div>
    <div class="grid gap-5 grid-flow-row grid-cols-6 2xl:grid-cols-12">
            <div v-for="(item, index) in artists" class="flex flex-col hover:-translate-y-1 transition-all"
            :key="item.id">
                <img :src="item.img1v1Url+'?param=120y120'" class="rounded-full cursor-pointer object-cover w-full   hover:opacity-70 "/>
                <div class="text-center pt-1.5">{{ item.name }}</div>
            </div>
    </div>
    <div class="text-center py-8">
        <el-button  @click="loadMore" :loading="pageData.loading" >加载更多</el-button>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, reactive, h} from "vue";
import type {Artist} from "@/models/artist";
import {ElDivider} from 'element-plus'
import {useRouter} from "vue-router";
import {userArtistList} from "@/utils/api";
/**创建分割线节点 */
const spacer = h(ElDivider, {direction: 'vertical'})
const router = useRouter()
const artists = ref<Artist[]>([])
const pageData = reactive({
    type: -1,
    area: -1,
    initial: '-1',
    page: 1,
    limit: 60,
    init: false,
    loading: false
})
const getData = async () => {
    pageData.loading = true
    try {
        const data = await userArtistList(pageData)
        if(pageData.page === 1) {
            artists.value = data
        }
        else {
            artists.value.push(...data)
        }
        pageData.init = true
        pageData.loading = false
    } catch(e) {
        pageData.page--
    }
}
/**顾名思义 */
const loadMore = () => {
    pageData.page++
    getData()
}
onMounted(async() => await getData() )
/**选项查找 */
const optionChange = (keyName: string, keyValue: number | string) => {
    pageData.page = 1
    if(keyName === 'type') pageData.type = keyValue as number
    if(keyName === 'area') pageData.area = keyValue as number
    if(keyName === 'initial') pageData.initial = keyValue as string
    console.log(pageData.type,pageData.area,pageData.initial)
    getData()
}
interface opiton {
    name: string,
    key: string,
    list: {
        key: string | number,
        name: string
    }[]
}
const options : opiton[] = [
    {
        name: '语种',
        key: 'area',
        list: [
            {key: -1, name: '全部'},
            {key: 7, name: '华语'},
            {key: 96, name: '欧美'},
            {key: 8, name: '日本'},
            {key: 16, name: '韩国'},
            {key: 0, name: '其他'},
        ]
    },
    {
        name: '分类',
        key :'type',
        list: [
            {key: -1, name: '全部'},
            {key: 1, name: '男歌手'},
            {key: 2, name: '女歌手'},
            {key: 3, name: '乐队组合'},
        ]
    },
    {
        name: '筛选',
        key: 'initial',
        list: [
            {key: "-1", name: '热门'},
            {key: 'a', name: 'A'},
            {key: 'b', name: 'B'},
            {key: 'c', name: 'C'},
            {key: 'd', name: 'D'},
            {key: 'e', name: 'E'},
            {key: 'f', name: 'F'},
            {key: 'g', name: 'G'},
            {key: 'h', name: 'H'},
            {key: 'i', name: 'I'},
            {key: 'j', name: 'J'},
            {key: 'k', name: 'K'},
            {key: 'l', name: 'L'},
            {key: 'm', name: 'M'},
            {key: 'n', name: 'N'},
            {key: 'o', name: 'O'},
            {key: 'p', name: 'P'},
            {key: 'q', name: 'Q'},
            {key: 'r', name: 'R'},
            {key: 's', name: 'S'},
            {key: 't', name: 'T'},
            {key: 'u', name: 'U'},
            {key: 'v', name: 'V'},
            {key: 'w', name: 'W'},
            {key: 'x', name: 'X'},
            {key: 'y', name: 'Y'},
            {key: 'z', name: 'Z'},
            {key: '0', name: '#'}, 
        ]
    }
]
</script>

<style lang="scss" scoped>
.active {
    @apply bg-red-500 text-white rounded
}
</style>