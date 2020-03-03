import React, {useState} from "react";
import Homepage_icon from './Homepage_icon.png'
import AddRoom from "./AddRoom";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  // need to add a function that by pressing the '+' button it will transfer the user to the 'AddRoom' page



  return (
    <div className="Homepage">
      <div className='homepage-layout'> 
      {/* this button will receive the new information inputed by the user in 'addroom' */}
      <Link to="/room"><button style={{display:'none'}}></button></Link>
      </div>
     
      <Link to="/addroom"><button id='plus-button'><img id='plus-button-img' src={Homepage_icon} alt='+'/></button></Link>
    </div>
  );
}
