import { useEffect, useState } from "react";
import type { MovieType } from "./libs/types";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Play } from "lucide-react";
import { Link } from "react-router";

function HomePage({ name }: { name: string }) {
  const [trendingMovies, setTrendingMovies] = useState<null | MovieType[]>(
    null
  );

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await axios.get(
          "http://localhost:8000/new-and-trending"
        );

        console.log(response);

        setTrendingMovies(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch trending movies");
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <style>
        {`
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }
        `}
      </style>

      <h1 className="text-3xl font-bold py-5">
        Welcome back <span className="text-red-500">{name}</span>
      </h1>

      <section className="flex flex-col gap-2 pb-2">
        <h2 className="text-2xl font-bold">New & Trending</h2>

        <div className="flex items-center overflow-x-auto gap-4 py-2 hide-scrollbar">
          {trendingMovies?.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="relative w-[500px] h-[200px] bg-grey rounded-2xl shrink-0 border-2 border-grey cursor-pointer hover:scale-[1.03] transition-all duration-300 group"
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-0 left-0 rounded-2xl bg-[rgba(255,0,0,0.4)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full w-full">
                <div className="h-14 w-14 flex justify-center items-center rounded-full bg-red-600">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2 pb-2">
        <h2 className="text-2xl font-bold">Continue Watching</h2>

        <div className="flex items-center overflow-x-auto gap-4 py-2 hide-scrollbar">
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
        </div>
      </section>

      <section className="flex flex-col gap-2 pb-2">
        <h2 className="text-2xl font-bold">My List</h2>

        <div className="flex items-center overflow-x-auto gap-4 py-2 hide-scrollbar">
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
        </div>
      </section>
      <Toaster position="top-right" />
    </>
  );
}

// https://www.w3schools.com/html/mov_bbb.mp4

export default HomePage;
