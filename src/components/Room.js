import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Room(props) {
  // function that adds new devices to the room
  const [showRoomInfo, setShowRoomInfo] = useState("inline");
  const [showDevices, setShowDevices] = useState("none");
  const [index, setIndex] = useState(props.index+1);
  const [roomDevice, setRoomDevice]=useState('')
  const [roomDevices,setRoomDevices]=useState([])
  const [roomData, setRoomData]=useState(props.roomData)
  const [roomName, setRoomName] = useState(props.roomName);
  const [roomColor, setRoomColor] = useState(props.roomColor);
  const [roomType, setRoomType] = useState(props.roomtype);

  const addDevices = () =>{ 
      setRoomDevices([ {device:roomDevice},...roomDevices])


  }

  const confirmDevices = () =>{
    setShowRoomInfo('inline')
      setShowDevices('none')
    setRoomData({...roomData, roomDevices:{device:roomDevices}})
      props.newRoomDevices(roomDevices)

  }

  console.log(roomDevices);
  console.log(roomData);

  const remove = () => {
    props.remove(index);
  };
  const roomInfo = () => {
      setShowRoomInfo('none')
      setShowDevices('inline')

  };


  return (
    <div className="Room">
      <div className="roomInfo" style={{ display: showRoomInfo }}>
        <h3>Room Type: {props.roomType}, Room Name: {props.roomName}</h3>
        <h3>Devices: </h3>
        {/* {
          props.roomData.map((roomData, i)=> (
         <li key={i}>{roomData.roomDevices}</li>
            ))
         } */}
        <button onClick={roomInfo}>Add Device</button>
        <Link to='/'><button>Back</button></Link>

      </div>
      <div className="devices" style={{ display: showDevices }}>
        <select onChange={e=> {setRoomDevice(e.target.value)}} name="choose-product" id="choose-product">
          <option hidden disabled selected value>Choose a Device</option>
          <option value="Air-Conditioner">Air-Conditioner</option>
          <option value="Boiler">Boiler</option>
          <option value="Stereo">Stereo</option>
          <option value="Lights">Lights</option>
        </select>
        <br />
        <br />
        <button onClick={addDevices} >add</button>
        <button onClick={confirmDevices}>confirm</button>
      </div>
    </div>
  );
}
