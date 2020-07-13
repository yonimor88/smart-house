import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AddRoom(props) {
  const [errMessege, setErrMessege] = useState("none");
  const [inputColor, setInputColor] = useState("");
  const [flag, setFlag] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const [roomColor, setRoomColor] = useState(null);
  const [roomType, setRoomType] = useState(null);


  useEffect(() => {
    
    setRoomColor(roomColor)
  }, [roomColor])

  const roomNameFunction = e => {
    
    if (e.target.value.length <= 5 && e.target.value.length >0) {
      setInputColor("lightgreen");
      setRoomName(e.target.value);
      
      if (roomColor !== null && roomType !== null) {
        setFlag(true);
      }
    } else {
      setInputColor("red");
      setErrMessege("inline");
      setFlag(false);
    }
  };


  const roomCreateFunction = () => {
    if (flag) {
      props.newRoomData(roomName, roomColor, roomType)
      // alert(`${roomName} is now registered as a new room`);
    } else {
      alert("Room registeration failed");
    }
  };

  return (
    <div className="AddRoom">
      <select
        name="Choose a room"
        id="rooms"
        onChange={e => {setRoomType(e.target.value);}}>
        <option hidden disabled selected value>Choose a room{" "}</option>
        <option value="bedroom">Bedroom</option>
        <option value="bathroom">Bathroom</option>
        <option value="kitchen">Kitchen</option>
      </select>
      <br />
      <br />
      <input
        onChange={roomNameFunction}
        id="room-name"
        placeholder="Room Name"
        style={{ background: inputColor }}
      ></input>
      <br />
      <p id="err" style={{ display: errMessege, color: inputColor }}>
        Room Name Must contain 5 or less characters
      </p>
      <br />
      <label forhtml="room-color">Select Room Color: </label>
      <br />
      <input
        id="room-color"
        placeholder="Room Color"
        type="color"
        onChange={e => {setRoomColor(e.target.value);}}></input>
      <br />
      <br />

      <Link to="/"><button className="create" onClick={roomCreateFunction}>
        Create
      </button></Link>
    </div>
  );
}
