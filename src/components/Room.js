import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Room(props) {
  // function that adds new devices to the room
  const [showInfo, setShowInfo] = useState("inline");
  const [showDevices, setShowDevices] = useState("none");
  const [index, setIndex] = useState(props.index);

  const remove = () => {
    props.remove(index);
  };
  const roomInfo = () => {
      setShowInfo('none')
      setShowDevices('inline')

  };
  const addDevices = () => {
    setShowInfo('inline')
    setShowDevices('none')
  };

  console.log(props.roomData);
  
  return (
    <div className="Room">
      
      <h3>Room Type: {props.roomType}</h3>
      <h3>Room Name: {props.roomName}</h3>
      <button onClick={roomInfo}>Add Device</button>
      <Link to='/'><button onClick={remove}>Remove Room</button></Link>

      <div className="devices" style={{ display: showDevices }}>
        <select name="choose-product" id="choose-product">
          <option hidden disabled selected value>
            Choose a Device
          </option>
          <option value="Air-Conditioner">Air-Conditioner</option>
          <option value="Boiler">Boiler</option>
          <option value="Stereo">Stereo</option>
          <option value="Lights">Lights</option>
        </select>
        <br />
        <br />
        <button onClick={addDevices}>add</button>
      </div>
    </div>
  );
}
