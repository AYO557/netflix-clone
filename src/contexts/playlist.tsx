import { createContext, useReducer } from "react";
import type { MovieType } from "../pages/(main)/home/libs/types";

const PlaylistContext = createContext({
  playLists: [] as MovieType[],
  dispatch: (action: { type: string; payload: MovieType }) => {
    console.log("tested");
  },
});

function PlaylistWrapper({ children }: { children: React.ReactNode }) {
  const initialArg: MovieType[] = [];

  const reducer = (
    prevMovieList: MovieType[], // latest value of the state
    action: { type: string; payload: MovieType }
  ): MovieType[] => {
    console.log(action.type);
    if (action.type === "ADD_MOVIE") {
      console.log(action.payload);
      return [...prevMovieList, action.payload];
    }

    if (action.type === "REMOVE_MOVIE") {
      return prevMovieList.filter((movie) => movie.id !== action.payload.id);
    }

    if (action.type === "REMOVE_ALL_MOVIES") {
      return [];
    }

    return prevMovieList;
  };

  const [playLists, dispatch] = useReducer(reducer, initialArg);

  return (
    <PlaylistContext.Provider
      value={{
        playLists,
        dispatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistWrapper;
export { PlaylistContext };
