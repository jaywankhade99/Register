import React, { Component } from "react";
import {   Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>Welcome to atos</h1>
      <h2>Are you a new user, Please click SignUp</h2>
     
      <Link to="/signUp" >
            <button>SignUp</button>
             </Link>
         
      <h2>Have you already Signup, Please Click SignIn</h2>
   
      <Link to="/signIn" >
            <button>SignIn</button>
             </Link>
            
      
    </>
  );
}