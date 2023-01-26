import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  return (<div>
     <div className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
    </div>
  </div>);
   
}


export default NavBar;
