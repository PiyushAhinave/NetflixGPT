import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null,
        popularMovies:null,
        topRated:null,
        upcomingMovies:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideos=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }
        
    }
});

export  const{addNowPlayingMovies, addTrailerVideos,addPopularMovies,addTopRated,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;