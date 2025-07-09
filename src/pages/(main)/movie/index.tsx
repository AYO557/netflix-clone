import { ArrowLeft } from "lucide-react";
import Aside from "../../../components/composites/aside";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { MovieType } from "../home/libs/types";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Movie({ name }: { name: string }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState<null | MovieType>(null);

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get(
          `http://localhost:8000/new-and-trending/${id}`
        );

        console.log(response.data);

        setMovie(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch trending movies");
      }
    }

    fetchMovie();
  }, []);

  return (
    <div className="h-screen bg-black text-white  grid grid-cols-11">
      <main className="col-span-8 h-screen p-10 flex flex-col gap-10">
        <header className="flex justify-between items-center">
          <div
            className="flex gap-2 items-center p-3 bg-grey rounded-lg cursor-pointer hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </div>
        </header>

        <article className="h-[700px] w-[95%] max-w-[1300px] bg-grey rounded-xl">
          {movie && <MovieBox movie={movie} />}
        </article>
        <Toaster position="top-right" />
      </main>

      <Aside name={name} />
    </div>
  );
}

function MovieBox({ movie }: { movie: MovieType }) {
  return (
    <iframe
      src={movie.trailer}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full rounded-xl"
    ></iframe>
  );
}

export default Movie;
