import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null;
  return (
    <div className="m-4 font-bold bg-black bg-opacity-70 mt-24">
      {
      movieNames.map((movieName, index) => {
        return (
        <MovieList
          key={movieName}
          movies={movieResults[index]}
          title={movieName}
        />
        )
      })}
    </div>
  );
};

export default GptMovieSuggestions;
