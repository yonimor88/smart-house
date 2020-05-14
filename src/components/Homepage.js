import React, {useState} from "react";
import Homepage_icon from "./Homepage_icon.png";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  // need to add a function that by pressing the '+' button it will transfer the user to the 'AddRoom' page

  

  return (
    <div className="Homepage">
        <Link to="/room">
          <button style={{ backgroundColor: props.roomColor }}>{props.roomName}</button>
        </Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      <Link to="/addroom">
        <button id="plus-button">
          <img id="plus-button-img" src={Homepage_icon} alt="+" />
        </button>
      </Link>
    </div>
  );
}
