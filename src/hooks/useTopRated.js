import { useDispatch } from "react-redux";
import API_options from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=becfe606a34093409f75d35eccf3990b",
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