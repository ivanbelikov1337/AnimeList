import LoadMore from "../components/LoadMore";
import {fetchAnime} from "@/app/actions";
import AnimeList from "@/components/AnimeList";


async function Home() {
    const data = await fetchAnime(1)
    return (
        <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <h2 className="text-3xl text-white text-center font-bold">Explore Anime</h2>
            <AnimeList data={data}/>
            <LoadMore/>
        </main>
    );
}

export default Home;
