import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies,title }) => {
  if (movies == null)return;
  return (
    <div className='overflow-x-scroll no-scrollbar px-4'>
      <h1 className="text-white text-xl md:text-4xl py-4">{title}</h1>
      <div className='flex  '>
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