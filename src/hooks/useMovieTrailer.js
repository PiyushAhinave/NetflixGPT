import  { useEffect } from 'react'
import API_options from '../utils/constants'
import {  addTrailerVideos } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'

const useMovieTrailer = (movieId) => {
  
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
  
  
  
      const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?api_key=becfe606a34093409f75d35eccf3990b", API_options)
  
      const json = await data.json();

      console.log(json)
  
  
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
  
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideos(trailer));
  
    }
  
    useEffect(() => {
      getMovieVideos();
    }, []);
  
  
}

export default useMovieTrailer