"use client"
import React, {useEffect, useState} from 'react';
import ReactPlayer from "react-player/youtube";

interface IProps {
    url: string
}

const YoutubePlay = ({url}: IProps) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [])

    return (
        <>
            {loading &&
                <ReactPlayer
                    url={url}
                    width="40rem"
                    height="20rem"
                />}
        </>
    );
}

export default YoutubePlay;