"use server"
import {fetchSingleAnime} from "../actions";
import Image from "next/image";
import {BsSuitHeart} from "react-icons/bs";
import YoutubePlay from "@/components/YoutubePlay";

interface IProps {
    params: {
        id: string
    }
}

async function singleAnime({params}: IProps) {
    const data = await fetchSingleAnime(params.id)

    return (
        <section className="p-7">
            <div className="grid grid-cols-5">
                <p className="flex items-center border-gray-900  justify-center border-r-[0.13rem] h-[4rem]">
                    {data.kind === "tv" && "TV serial"}
                </p>
                <p className="flex items-center border-gray-900  justify-center border-r-[0.13rem] h-[4rem]">
                    {data.score}
                </p>
                <p className="flex items-center border-gray-900  justify-center border-r-[0.13rem] h-[4rem]">
                    {data.aired_on}
                </p>
                <p className="flex items-center border-gray-900 capitalize  justify-center border-r-[0.13rem] h-[4rem]">
                    {data.status}
                </p>
                <p className="flex items-center border-gray-900  justify-center  h-[4rem]">Episodes: {data.episodes}</p>
            </div>
            <div className="flex gap-6 mt-10">
                <div>
                    <Image
                        src={`https://shikimori.one${data.image.original}`}
                        alt={data.name}
                        width={200}
                        height={250}
                        className="rounded-xl"
                    />
                    <div className="flex items-center pt-6">
                        <button
                            className="flex align-middle items-center justify-center w-[80%] rounded h-7  mr-auto bg-blue-500 ">
                            Add to List
                        </button>
                        <BsSuitHeart size={25}/>
                    </div>
                </div>
                <div className="w-[70%]">
                    <h1 className="text-[1.4rem] ">{data.name}</h1>
                    <p className="text-bas overflow-auto pt-2">{data.description}</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="w-[12.5rem] flex">
                   <ul className="list-none">
                       {data.genres.map(el => (
                           <li className="inline-block m-[2px] rounded-2xl pr-2 pl-2 text-[0.8rem] leading-6 bg-gray-600" key={el.id}>
                               {el.name}
                           </li>
                       ))}
                   </ul>
                </div>

            </div>
            <div className="mt-10 flex justify-center">
                { data.videos[0]?.player_url ? <YoutubePlay url={data.videos[0].player_url}/> : null}
            </div>
        </section>
    )
}

export default singleAnime