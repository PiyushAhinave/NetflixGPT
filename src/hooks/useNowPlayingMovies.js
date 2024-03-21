import { useDispatch } from "react-redux";
import API_options from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=becfe606a34093409f75d35eccf3990b",
      API_options
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
   
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
