import { useContext, useEffect, useState } from "react";
import type { MovieType } from "./libs/types";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BellPlus, EllipsisVertical, List, Play } from "lucide-react";
import { Link } from "react-router";
import { PlaylistContext } from "../../../contexts/playlist";

function HomePage({ name }: { name: string }) {
  const [trendingMovies, setTrendingMovies] = useState<null | MovieType[]>(
    null
  );
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // dispatch({type: "ADD_MOVIE", payload: {id: "1"} })
  //! state: is our data used in our JSX
  //! dispatch: is a function that we use to update the state (analogy: Like our sword)
  //! reducer: is a function that takes the current state and an action and returns the new state, it is representation of how our dispatch will function (analogy: like our blacksmith)
  //! initialArg: is the initial value of the state

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

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setIsDropDownOpen(false);
    });
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
              <div className="absolute top-0 left-0 rounded-2xl bg-[rgba(255,0,0,0.4)] flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full w-full">
                <div className="size-14 flex justify-center items-center rounded-full bg-red-600">
                  <Play className="h-8 w-8 text-white" />
                </div>

                <div
                  className="relative py-4 px-1 flex justify-center items-center hover:bg-[rgba(128,128,128,0.7)] rounded-2xl transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDropDownOpen(!isDropDownOpen);
                  }}
                >
                  <EllipsisVertical />

                  {isDropDownOpen && <MovieDropDown />}
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

function MovieDropDown() {
  const { dispatch } = useContext(PlaylistContext);
  return (
    <menu
      className="absolute bg-[rgba(128,128,128,0.7)] left-full top-4 ml-2 rounded-lg z-50"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <li
        className="p-3 font-medium cursor-pointer text-white hover:text-red-500 transition-all duration-200"
        onClick={() => {
          console.log("running");
          dispatch({
            type: "ADD_MOVIE",
            payload: {
              id: "1",
              title: "Movie 1",
              description: "Movie 1 description",
              genre: "Action",
              rating: 5,
              trailer:
                "https://i.pinimg.com/736x/77/91/99/77919977ed95a41da4c027fbfbdd6a07.jpg",
              thumbnail:
                "https://i.pinimg.com/736x/77/91/99/77919977ed95a41da4c027fbfbdd6a07.jpg",
              src: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
          });
        }}
      >
        <List />
      </li>
      <li className="p-3 font-medium cursor-pointer text-white hover:text-red-500 transition-all duration-200">
        <BellPlus />
      </li>
    </menu>
  );
}

// https://www.w3schools.com/html/mov_bbb.mp4

export default HomePage;
