"use server"

import {ISingleAnime} from "@/utils/types";

export const fetchAnime = async (page: number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`)
    return await res.json()
}

export const fetchSingleAnime = async (id: string) => {
    const res = await fetch(`https://shikimori.one/api/animes/${id}`)
    return await res.json() as ISingleAnime
}
