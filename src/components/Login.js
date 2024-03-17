import Header from "./Header";
import { useState,useRef } from "react";
import checkValidate from "../utils/validate";
import { auth } from "../utils/firebase.js";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
const Login = () => {
    const[isSignIn,setSignIn]=useState(true);
    
    const[isValid,setIsValid]=useState(null);
    const dispatch = useDispatch();
    
    
    const name = useRef(null);
    const email=useRef(null);
    const password = useRef(null);
    

    

    const validateEmailPassword = () => {
      
        const message= checkValidate(email.current.value,password.current.value);
        setIsValid(message);

        if(message) return;

        if(!isSignIn){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                  }).then(() => {
                    const {uid,email,displayName,photoURL} = auth;
              dispatch(addUser({uid:uid,email:email,displayNAme:displayName,photoURL:photoURL,}));
                    
                    
                  }).catch((error) => {
                    setIsValid(error.message);
                  });        
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsValid(errorCode+"-"+errorMessage);
            });
        }else{
            //sign in logic
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsValid(errorCode+" "+errorMessage);
            });
    }

    
      
    }

    const toggleSignUpIn = () => {
        setSignIn(!isSignIn);
    }
    return (
        <div >
            <Header/>
        <div className="absolute">    
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg-img" />
        </div>   
        <form onClick={(e)=>{e.preventDefault()}} className="absolute my-24 p-12 bg-black w-3/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
            <h1 className="font-bold text-3xl py-4 my-2 ">{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full rounded-lg bg-[#333]"/>}
            <input ref={email} type="text" placeholder="Email" className="p-4 my-4 w-full rounded-lg bg-[#333]"/>
            
            <input ref={password} type="password" placeholder="password" className="p-4 my-4 w-full rounded-lg bg-[#333]"/>
            <p className="text-red-500">{isValid}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={validateEmailPassword}>{isSignIn?"Sign In":"Sign Up"}</button>
            <p className="cursor-pointer" onClick={toggleSignUpIn}>{isSignIn?"New to Netflix ? Sign Up":"Already user?Sign In"}</p>
        </form>
        </div>

    )
}

export default Login;