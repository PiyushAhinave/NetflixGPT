import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        //gptMovies:null,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addMovieResult:(state,action)=>{
            //state.gptMovies=action.payload;
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
        
    },
});

export const {toggleGptSearchView,addMovieResult}= gptSlice.actions;
export default gptSlice.reducer;