import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRoom(props) {
  const [errMessege, setErrMessege] = useState("none");
  const [inputColor, setInputColor] = useState("");
  const [flag, setFlag] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const [roomColor, setRoomType] = useState(null);
  const [roomType, setRoomColor] = useState(null);

  const roomNameFunction = e => {
    if (e.target.value.length <= 5) {
      setInputColor("lightgreen");
      setRoomName(e.target.value);
      if (roomColor !== "" && roomType !== "") {
        setFlag(true);
      }
    } else {
      setInputColor("red");
      setErrMessege("inline");
      setFlag(false);
    }
  };


  const roomCreateFunction = () => {
    if (flag === true) {
      props.newRoomData(roomName, roomType, roomColor)
      alert(`${roomName} is now registered as a new room`);
    } else {
      alert("Room registeration failed");
    }
  };

  return (
    <div className="Addroom">
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

      <Link to="/"><button id="create" onClick={roomCreateFunction}>
        Create
      </button></Link>
    </div>
  );
}
