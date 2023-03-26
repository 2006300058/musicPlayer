<template>
    <div class="mt-5">

    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, toRefs,  reactive, computed} from 'vue'
import {useArtistAlbum} from '@/utils/api'
import type { Album } from '@/models/album';
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()
const props = defineProps<{id: number}>()
const list = ref<Album[]>([])

const pageData = reactive({
    limit: 40,
    page: 1,
    loading: false,
    noMore: false
})
const offset = computed(() => {
    if(pageData.page === 1 ) return 0 
    return list.value.length + pageData.limit
})
const getData = async() => {
    try{
        pageData.loading = true
        const {hotAlbums} = await useArtistAlbum(props.id, pageData.limit, offset.value)
        console.log(offset.value)
        if(pageData.page === 1) {
            list.value = hotAlbums
        } else {
            list.value.push(...hotAlbums)
        }
        if(hotAlbums.length < pageData.limit) pageData.noMore = true
    }catch(e){
        pageData.page --
    }
    pageData.loading = false
}
const loadMore = () => {
    pageData.page++
    getData()
}

onMounted(async () => {
    await getData()
})

</script>

<style lang="scss" scoped>

</style>