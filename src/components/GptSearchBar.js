import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { addMovieResult } from '../utils/gptSlice'
import API_options from '../utils/constants'



const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const langKey = useSelector((store)=>store.config.lang);

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1&api_key="+process.env.REACT_APP_TMDB_KEY,API_options)
  const json=await data.json();

  

  return json.results;

  
  };
  

  const handleGptSearchClick= async ()=>{
   
    const gptQuery="Act as a movie recommendation system & suggest movie names only for the query :"+searchText.current.value+" give name of only five movies without description and other information just give names comma seaparated like example result given ahead. Example Result = Andaj Apna Apna , Sholay , Bahubali , Yoddha ,Singham";
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery  }],
        model: 'gpt-3.5-turbo',
      
      });
     

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
     
      
      const tmdbResults = await Promise.all(promiseArray);

      
    
    dispatch(addMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    
  
  }

  return (
    <div className='pt-[12%] flex justify-center'>
    <form className="w-1/2 bg-black bg-opacity-50 grid grid-cols-12 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
      <input 
      ref={searchText}
      className="py-2 pl-2 m-2 col-span-9 text-black rounded-l-sm font-bold" type='text' placeholder={lang[langKey].gptSearchHolder}/>
      <button className='col-span-3 m-2 px-4 py-2 font-bold bg-red-900 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
  }

export default GptSearchBar