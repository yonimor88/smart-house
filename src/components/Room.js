import React, { useState } from "react";

export default function Room(props) {
  // function that adds new devices to the room
  const [showInfo, setShowInfo] = useState("inline");
  const [showDevices, setShowDevices] = useState("none");

  const roomInfo = () => {
      setShowInfo('none')
      setShowDevices('inline')

  };
  const addDevices = () => {
    setShowInfo('inline')
    setShowDevices('none')
  };

  return (
    <div className="Room">
      <div className="info" style={{display:showInfo}}>
        <h3>Room Type: {props.roomType}</h3>
        <h3>Room Name: {props.roomName}</h3>
        <button onClick={roomInfo}>Add Device</button>
      </div>
      <div className="devices" style={{display:showDevices}}>
        <select name="choose-product" id="choose-product">
          <option hidden disabled selected value>Choose a Device</option>
          <option value="Air-Conditioner">Air-Conditioner</option>
          <option value="Boiler">Boiler</option>
          <option value="Stereo">Stereo</option>
          <option value="Lights">Lights</option>
        </select>
        <br/>        
        <br/>
        <button onClick={addDevices}>add</button>
      </div>
    </div>
  );
}
