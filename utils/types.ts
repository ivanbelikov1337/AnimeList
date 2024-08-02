export interface ISingleAnime {
    id: number
    name: string
    image: Image
    url: string
    kind: string
    score: string
    status: string
    episodes: number
    aired_on: string
    released_on: string
    rating: string
    japanese: string[]
    duration: number
    description: string
    description_html: string
    anons: boolean
    ongoing: boolean
    thread_id: number
    topic_id: number
    myanimelist_id: number
    rates_scores_stats: RatesScoresStat[]
    rates_statuses_stats: RatesStatusesStat[]
    licensors: string[]
    genres: Genre[]
    studios: Studio[]
    videos: Video[]
    screenshots: Screenshot[]
    user_rate: any
}

export interface Image {
    original: string
    preview: string
    x96: string
    x48: string
}

export interface RatesScoresStat {
    name: number
    value: number
}

export interface RatesStatusesStat {
    name: string
    value: number
}

export interface Genre {
    id: number
    name: string
    russian: string
    kind: string
    entry_type: string
}

export interface Studio {
    id: number
    name: string
    filtered_name: string
    real: boolean
    image: string
}

export interface Video {
    id: number
    url: string
    player_url: string
    name: string
    kind: string
    hosting: string
    image_url?: string
}

export interface Screenshot {
    original: string
    preview: string
}

export interface AnimeProp {
    id: string;
    name: string;
    image: {
        original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
}
