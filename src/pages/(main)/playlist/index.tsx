import { useContext } from "react";
import { PlaylistContext } from "../../../contexts/playlist";

function Playlists() {
  // const playlistMovies = [
  //   {
  //     id: 1,
  //     title: "Movie 1",
  //     description: "Description 1",
  //     thumbnail:
  //       "https://i.pinimg.com/736x/77/91/99/77919977ed95a41da4c027fbfbdd6a07.jpg",
  //   },
  // ];
  const { playLists: playlistMovies } = useContext(PlaylistContext);

  return (
    <main>
      <h1 className="text-3xl font-bold py-5">PlayList</h1>

      <section className="grid grid-cols-3 gap-5">
        {playlistMovies.map((playlistMovie, index) => {
          return (
            <article key={index} className="flex flex-col gap-1">
              <div className="h-[350px] bg-grey rounded-lg border-2 border-red-500 cursor-pointer group hover:border-red-300 transition-all duration-200">
                <img
                  src={playlistMovie.thumbnail}
                  alt={playlistMovie.title}
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-70"
                />
              </div>
              <p className="text-center text-sm text-gray-300 pr-2 cursor-pointer hover:underline hover:text-red-300">
                Remove Movie
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Playlists;
