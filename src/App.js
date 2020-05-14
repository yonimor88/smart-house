import React, { useState} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Room from "./components/Room";
import AddRoom from "./components/AddRoom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import { Link } from "react-router-dom";


function App() {
  const [roomName, setRoomName] = useState(null);
  const [roomColor, setRoomType] = useState(null);
  const [roomType, setRoomColor] = useState(null);
  const [roomData, setRoomData] = useState([{ name: roomName, color: roomColor, type: roomType }]);
  const [newRoom, setNewRoom]=useState([])

  const changeRoomName = Name => {
    setRoomName(Name);
  };
  const changeRoomColor = Color => {
    setRoomColor(Color);
  };
  const changeRoomType = Type => {
    setRoomType(Type);
  };
  const changeRoomData = data => {
    setRoomData(data);
  };
 

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <Homepage
                  roomData={roomData}
                  changeRoomData={changeRoomData}
                  roomName={roomName}
                  changeRoomName={changeRoomName}
                  roomColor={roomColor}
                  changeRoomColor={changeRoomColor}
                  roomType={roomType}
                  changeRoomType={changeRoomType}
                />
              );
            }}
          />
          <Route
            exact
            path="/room"
            component={() => {
              return (
                <Room
                  roomData={roomData}
                  changeRoomData={changeRoomData}
                  roomName={roomName}
                  changeRoomName={changeRoomName}
                  roomColor={roomColor}
                  changeRoomColor={changeRoomColor}
                  roomType={roomType}
                  changeRoomType={changeRoomType}
                />
              );
            }}
          />
          <Route
            exact
            path="/addroom"
            component={() => {
              return (
                <AddRoom
                  roomData={roomData}
                  changeRoomData={changeRoomData}
                  roomName={roomName}
                  changeRoomName={changeRoomName}
                  roomColor={roomColor}
                  changeRoomColor={changeRoomColor}
                  roomType={roomType}
                  changeRoomType={changeRoomType}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
