import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

  const trailerVideos= useSelector(store=>store.movies?.trailerVideos);
 

  useMovieTrailer(movieId)
  
  return (
    <div className='w-[98vw]'>
      <iframe className='w-[98vw] aspect-video '

        src={"https://www.youtube.com/embed/"+trailerVideos?.key+"?autoplay=1&loop=1&mute=1"} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground;