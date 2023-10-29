import { useState } from "react";
import Header from "./Header";

const Login = () => {
   
  const [isSignInForm,setSignInForm]= useState(true);

  const toggleSigninForm=()=>{
    setSignInForm(!isSignInForm);
  }
  return (
    <div>
    <Header/>
    <div>
    <img className=" absolute"src=" https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='logo'/>
    </div>
    <form className="absolute p-12 bg-black w-3/12  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
       <h1 className="font-bold text-3xl py-4"> {isSignInForm? "Sign In":"Sign Up"}</h1>
      {! isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />)}
      <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
      <input type="password" placeholder="Password" className="p-4 my-4 w-full  bg-gray-700 rounded-lg" />
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"} </button>
      <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{isSignInForm? "New to Netflix Sign Up Now":"Already Registered Sign In Now"} </p>
    
    </form>
   
    </div>
  )
}

export default Login;