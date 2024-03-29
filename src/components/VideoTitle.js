import React from 'react';

const VideoTitle = ({title,overview}) => {

  return (
    
    <div className='w-screen aspect-video pt-[13%] px-12 absolute bg-gradient-to-r from-gray-900  text-white'>
        <div className='ml-10'>
        <h1 className='text-3xl font-bold mb-4 mt-4'>{title}</h1>
        <p className='w-1/4 py-4'>{overview} </p>
        </div >
        <div className='mb-4 mt-4 ml-10'>
            <button className='bg-white text-black hover:bg-opacity-50 py-2 px-2 mr-4 rounded-md'>Play Now</button>
            <button className='bg-[#666] text-white hover:bg-opacity-50 py-2 px-2 mr-4 rounded-md'> More info</button>
        </div>
    </div>
  )
}

export default VideoTitle