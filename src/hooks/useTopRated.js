import { useDispatch } from "react-redux";
import API_options from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key="+process.env.REACT_APP_TMDB_KEY,
      API_options
    );
    const json = await data.json();

    dispatch(addTopRated(json.results));
   
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;