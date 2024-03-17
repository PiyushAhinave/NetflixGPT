import { useDispatch } from "react-redux";
import API_options from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=becfe606a34093409f75d35eccf3990b",
      API_options
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
