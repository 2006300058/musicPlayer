/// <reference types="node" />
import {defineStore, storeToRefs} from 'pinia'
import { onMounted, onUnmounted, toRefs, watch } from 'vue'
import type { Song } from '@/models/song'
import type { SongUrl } from '@/models/song_url'
import { useDetail, useSongUrl } from '@/utils/api'
const KEYS = {
    volume: 'PLAYER_VOLUME'
}
export const usePlayerStore = defineStore({
    id: "player",
    state: () => ({
        audio: new Audio(),
        loopType: 0, //循环模式 0 单曲循环 1 列表循环 2随机播放
        volume: localStorage.getItem(KEYS.volume)?.toInt() || 60,
        playList: [] as Song[],  //播放列表
        showPlayList: false,
        id: 0,
        url: '',
        songUrl: {} as SongUrl,
        song: {} as Song,
        isPlaying: false, //播放
        isPause: false,  //暂停
        sliderInput: false, //滑动进度条
        ended: false,  //结束
        muted: false, //静音
        currentTime: 0, //当前播放时间
        duration: 0,  //总播放时长
    }),
    getters: {
        playListCount(state):number {
            return state.playList.length
        },
        thisIndex: state => {
            return state.playList.findIndex(song => song.id === state.id)
        },
        nextSong(state): Song {
            const {thisIndex, playListCount} = this
            if(thisIndex === playListCount-1){
                return state.playList.first()
            }
            else {
                const nextIndex = thisIndex + 1
                return state.playList[nextIndex]
            }
        },
        preSong(state): Song {
            const {thisIndex, playListCount} = this
            if(thisIndex === 0) {
                return state.playList.last()
            }
            else {
                const preIndex = thisIndex - 1
                return state.playList[preIndex]
            }
        },

    },

    actions: {
        init() {
            this.audio.volume = this.volume / 100;          
        },

        pushPlayList(replace: boolean, ...list: Song[]) {
            if(replace) {
                this.playList = list;
                return
            }
            //找到没有的就添加进去
            list.forEach(song => {
                if(this.playList.filter(s => s.id == song.id).length <= 0) {
                    this.playList.push(song)
                }
            })
        },
        clearPlayList() {
            this.songUrl = {} as SongUrl
            this.url = ''
            this.id = 0;
            this.song = {} as Song
            this.isPlaying = false;
            this.isPause = false;
            this.sliderInput = false;
            this.ended = false;
            this.muted = false;
            this.currentTime = 0;
            this.playList = [] as Song[];
            this.showPlayList = false;
            this.audio.load();
            setTimeout(() => {
                this.duration = 0;
            }, 500)
        },
        async play(id: number) {
            if(id == this.id) return;
            this.isPlaying = false
            const data = await useSongUrl(id)
            console.log(data)
            this.audio.src = data.url;
            this.audio.play().then(res => {
                this.isPlaying = true
                this.songUrl = data
                this.url = data.url
                this.id = id
                this.songDetail()
            }).catch( res => {
                console.log(res)
            })
        },
        async songDetail() {
            this.song = await useDetail(this.id)
            this.pushPlayList(false, this.song)
        },
        //播放结束
        playEnd() {
            console.log('播放结束')
            switch (this.loopType) {
                case 0:
                    this.rePlay()
                    break;
                case 1:
                    this.next()
                    break;
                case 2:
                    this.randomPlay()
                    break;
            }
        },
        rePlay() {
            setTimeout(() => {
                this.currentTime = 0
                this.audio.play()
            }, 1500)
        },
        next() {
            if(this.loopType === 2){
                this.randomPlay()
            }
            else {
                this.play(this.nextSong.id)
            }
        },
        randomPlay() {
            this.play(this.playList.sample().id)
        },
        prev() {
            this.play(this.preSong.id)
        },
        togglePlay() {
            if(!this.song.id) return;
            this.isPlaying = !this.isPlaying
            if(!this.isPlaying) {
                this.audio.pause()
                this.isPause = true
            }
            else {
                this.audio.play()
                this.isPause = false
            }
        },
        setPlay() {
            if(!this.song.id) return;
            this.isPause = false,
            this.isPlaying = true,
            this.audio.play()
        },
        setPause() {
            if(!this.song.id) return;
            this.isPause = true,
            this.isPlaying = false,
            this.audio.pause()
        },
        toggleLoop() {
            if(this.loopType == 2)
                this.loopType = 0     
            else 
                this.loopType++           
        },
        toggleMuted(){
            this.muted = !this.muted
            this.audio.muted = this.muted
        },
        setVolume(n: number) {
            n = n > 100 ? 100 : n
            n = n < 0 ? 0 : n
            this.audio.volume = n
            this.volume = n
            localStorage.setItem('PLAYER-VOLUME', n.toString())
        },
        /**修改播放时间 */
        onSliderChange(val: number) {
            this.currentTime = val;
            this.sliderInput = false;
            this.audio.currentTime = val
        },
        /**播放时间拖动中 */
        onSliderInput(val: number) {
            this.sliderInput = true
        },
        /**定时器 */
        interval() {
            if (this.isPlaying && !this.sliderInput) {
                this.currentTime = parseInt(this.audio.currentTime.toString());
                this.duration = parseInt(this.audio.duration.toString())
                this.ended = this.audio.ended
            }
        }
    }
})

export const userPlayerInit = () => {
    let timer: NodeJS.Timer;
    const {init, interval, playEnd} = usePlayerStore()
    const {ended} = storeToRefs(usePlayerStore())

    watch(ended, ended => {
        if(!ended) return
        playEnd()
    })

    onMounted(() => {
        init()
        console.log('start ')
        timer = setInterval(interval, 1000)
    })

    onUnmounted(() => {
        console.log('clear')
        clearInterval(timer)
    })
}