/**说明 : 调用此接口,可获取热门搜索列表
//调用例子 : /search/hot/detail
*/
export interface SearchHotDetail {
    searchWord: string;
	score: number;
	content: string;
	source: number;
	iconType: number;
	iconUrl?: string;
	url: string;
	alg: string;
}

/**
 * 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * 调用例子 : /search/suggest?keywords= 海阔天空 /search/suggest?keywords= 海阔天空&type=mobile
 */
export interface SearchSuggest {
    albums: SearchSuggestAlbums[],
    artists: SearchSuggestArtists[],
    songs: SearchSuggestSongs[],
    order: string[]
}

export interface SearchSuggestAlbums {
    id: number;
	name: string;
	artist: SearchSuggestAlbumsArtist;
	publishTime: number;
	size: number;
	copyrightId: number;
	status: number;
	picId: number;
	mark: number;
}

export interface SearchSuggestArtists {
    id: number;
	name: string;
	picUrl: string;
	alias: string[];
	albumSize: number;
	picId: number;
    fansGroup?: any,
	img1v1Url: string;
	img1v1: number;
	accountId: number;
	trans: string;
}

export interface SearchSuggestSongs {
    id: number;
	name: string;
	artists: SearchSuggestSongsArtists[];
	album: SearchSuggestSongsAlbum;
	duration: number;
	copyrightId: number;
	status: number;
	alias: any[];
	rtype: number;
	ftype: number;
	mvid: number;
	fee: number;
	rUrl?: any;
	mark: number;
}

export interface SearchSuggestAlbumsArtist {
    id: number;
	name: string;
	picUrl?: any;
	alias: any[];
	albumSize: number;
	picId: number;
    fansGroup?: any;
	img1v1Url: string;
	img1v1: number;
    transNames?: any[];
	trans?: any;
}

export interface SearchSuggestSongsArtists {
    id: number;
	name: string;
	picUrl: string;
	alias: string[];
	albumSize: number;
	picId: number;
    fansGroup?: any,
	img1v1Url: string;
	img1v1: number;
	trans?: any;
}

export interface SearchSuggestSongsAlbum {
    id: number;
	name: string;
	artist: SearchSuggestSongsAlbumArtist;
	publishTime: number;
	size: number;
	copyrightId: number;
	status: number;
	picId: number;
	mark: number;
}

export interface SearchSuggestSongsAlbumArtist {
    id: number;
	name: string;
	picUrl?: any;
	alias: any[];
	albumSize: number;
	picId: number;
	img1v1Url: string;
	img1v1: number;
	trans?: any;
}