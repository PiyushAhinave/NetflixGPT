import React from 'react'

const MovieCard = ({poster_path}) => {

  if(!poster_path)return null;
  return (
    <div className='w-48 pr-4'>
        <img  
        alt="abcd"
        src={'https://image.tmdb.org/t/p/w500/'+poster_path}
        />
    </div>
  )
}

export default MovieCard