import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //   const changeLanguage = useSelector((store) => store.config.lang);

  const handleLanguageChange = (e) => {
    
    // dispatch(changeLanguage)
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayNAme: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      //unsubscribe when component unmount
      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="absolute z-10 px-8 py-1 md:py-2  bg-gradient-to-b from-black w-full flex  flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      />

      {user && (
        <div className="flex ">
          {showGptSearch && <select
            
            onChange={handleLanguageChange}
            className="bg-slate-400 font-bold hover:text-white hover:bg-black text-black rounded-lg px-3 mr-3 my-4"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}

          <button
            onClick={handleGptSearchClick}
            className="bg-slate-400  text-black font-bold hover:text-white hover:bg-black rounded-lg px-1 md:px-3 mr-1 md:mr-3 my-5 md:my-4"
          >
            {showGptSearch ? "Homepage" : "Gpt Search"}
          </button>
          <img
            className=" md:display w-0 md:w-10 h-0 md:h-10 my-5 md:my-4"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="user-logo"
          />
          <button
            onClick={handleSignOut}
            className="bg-slate-400 font-bold hover:text-white hover:bg-black text-black rounded-lg  px-4 md:px-3 mx-1 md:mx-3 my-3 md:my-4"
          >
            {" "}
            Sign out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
