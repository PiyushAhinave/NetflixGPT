import React from 'react'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 pr-4'>
        <img  
        alt="image"
        src={'https://image.tmdb.org/t/p/w500/'+poster_path}
        />
    </div>
  )
}

export default MovieCard