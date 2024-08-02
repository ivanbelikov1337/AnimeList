"use client"

import React, {useEffect, useState} from 'react';
import AnimeCard from "@/components/AnimeCard";
import {AnimeProp} from "@/utils/types";

interface IProps {
    data: AnimeProp[]

}

const AnimeList = ({data}: IProps) => {
    const [animeItems, setAnimeItems] = useState<AnimeProp[]>([])

    const sortedAnimeOnRate = (animeItems: AnimeProp[]) => {
        setAnimeItems(animeItems.toSorted((a, b) => +b.score - +a.score))
    }

    useEffect(() => {
        setAnimeItems(data)
    }, [])


    return (
        <>
            <section className="flex gap-5">
                <h3>Sort by:</h3>
                <button onClick={() => sortedAnimeOnRate(animeItems)}>Popular</button>
            </section>
            <section className="grid lg:grid-cols-5  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {animeItems.map((item: AnimeProp, index: number) => (
                    <AnimeCard key={item.id} anime={item} index={index}/>
                ))}
            </section>
        </>
    );
}

export default AnimeList;