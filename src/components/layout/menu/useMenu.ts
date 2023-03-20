import { ref, watch } from 'vue';
import { Planet, Music,VideoOne, Fm, Like, Computer, DownloadThree, PlayTwo } from '@icon-park/vue-next';
import { useRoute, useRouter } from 'vue-router';
interface IMenu  {
    name: string,
    icon: any;
    key: string;
    theme: 'outline' | 'filled' | 'two-tone' | 'multi-color'
}
interface IMenus {
    menus: IMenu[],
    name: string
}

export function useMenu() {
    /**仓库信息 */
    const menus: IMenus[] = [
       {
            name: "在线音乐",
            menus: [
                {
                    name: "推荐",
                    key: "discover",
                    icon: Planet,
                    theme: 'outline',
                },
                {
                    name: "音乐馆",
                    key: "music",
                    icon: Music,
                    theme: 'outline',
                },
                {
                    name: "视频",
                    key: "video",
                    icon: VideoOne,
                    theme: 'outline',
                },
                {
                    name: "电台",
                    key: "dj",
                    icon: Fm,
                    theme: 'outline',
                }
            ]
       },
       {
        name: "我的音乐",
            menus: [
                {
                    name: "我喜欢",
                    key: "love",
                    icon: Like,
                    theme: 'outline',
                },
                {
                    name: "本地歌曲",
                    key: "local",
                    icon: Computer,
                    theme: 'outline',
                },
                {
                    name: "下载歌曲",
                    key: "download",
                    icon: DownloadThree,
                    theme: 'outline',
                },
                {
                    name: "最近播放",
                    key: "recently",
                    icon: PlayTwo,
                    theme: 'outline'
                },
            ]
        }
    ] ;
    const route = useRoute()
    const router = useRouter()
    /**当前路由信息 */
    const currentKey = ref(route.meta.menu)
    
    watch(() => route.meta.menu, (menu) => {
        currentKey.value = menu
    });
    /**点击跳转 */
    const click = async(menu: IMenu) => {
        await router.push({name: menu.key, replace: true})
    };

    return {
        menus, click, currentKey
    }
}
