import { useDispatch } from "react-redux";
import API_options from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key="+process.env.REACT_APP_TMDB_KEY,
      API_options
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
    
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;