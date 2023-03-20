import { watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import  {Ranking,BoyOne,Home,AllApplication} from '@icon-park/vue-next'
interface IMusicMenu {
    label: string,
    name: string,
    icon: any,
}
export function useMusicMenu() {
    const menus: IMusicMenu[] = [
        {
            label: '精选',
            name: 'picked',
            icon: Home,
        },
        
        {
            label: '排行',
            name: 'toplist',
            icon: Ranking,
        },
        {
            label: '歌手',
            name: 'artist',
            icon: BoyOne,
        },
        {
            label: '分类歌单',
            name: 'category',
            icon: AllApplication,
        },
        // {
        //     label: '数字专辑',
        //     name: 'zj',
        // },
        // {
        //     label: '有声电台',
        //     name: 'dt',
        // },
    ];
    const route = useRoute()
    const router = useRouter()
    const currentMenu = ref(route.name) 
    watch(() => route.name, m => {
        currentMenu.value = m
    })
    
    /**点击跳转 */
    // const onTabClick = async(tab: IMusicMenu) => {
    //     await router.push({name:tab.name, replace: true})
    // };
    const onTabClick = ({props}: { props: IMusicMenu }) => {
        router.push({name: props.name, replace: true,})
    }
    return {
        onTabClick, currentMenu, menus
    }
}
