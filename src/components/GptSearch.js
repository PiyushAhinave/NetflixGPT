import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
const GptSearch = () => {
  return (
    <>
    <div className="  fixed md:w-full -z-10 -mt-5">
    <img
    className=" h-screen object-cover md:h-auto "
      src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="bg-img"
    />
  </div>
    <div className="">
     
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearch;
