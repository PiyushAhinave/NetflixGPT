import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies,title }) => {
  if (movies == null)return;
  return (
    <div className=''>
      <h1 className="text-white text-xl py-4">{title}</h1>
      <div className='flex scrollbar-hide overflow-x-scroll'>
      <div className='flex'>
        {movies &&
          movies.map(movie => 
          <MovieCard key={movie.id} poster_path={movie.poster_path}
           />)
        }
        </div>
      </div>
    </div>
  )
}

export default MovieList