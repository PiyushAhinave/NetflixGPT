import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store?.movies?.popularMovies);
  const topRated = useSelector((store)=>store?.movies?.topRated);
  const upcomingMovies = useSelector((store)=>store?.movies?.upcomingMovies)
  console.log(movies);
  console.log(popularMovies);
  console.log(topRated)



  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20 ">
        <MovieList movies={movies} title={"Now Playing"}/>
        <MovieList movies={popularMovies} title={"Popular Movies"}/>
        <MovieList movies={topRated} title={"Top Rated Movies"}/>
        <MovieList movies={upcomingMovies} title={"Upcoming Movies"}/>
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
