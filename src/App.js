import React, { useState} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Room from "./components/Room";
import AddRoom from "./components/AddRoom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import { Link } from "react-router-dom";


function App() {

  const [roomData, setRoomData]= useState([])

  const newRoomData= (roomName, roomColor, roomType) =>{
    setRoomData([
      ...roomData,{
        roomName: roomName,
        roomColor: roomColor,
        roomType: roomType
      }
    ])
  }

  const remove = (i) => {
    const newRoomData = roomData.filter((element, index) => index != i);
    setRoomData([...newRoomData]);
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
                  rooomName={roomData.roomName}
                  roomColor={roomData.roomColor}
                  roomType={roomData.roomType}
                />
              );
            }}
          />
          {
            roomData.map((roomData, i )=> (
<Route
            exact
            path={`/room${i}`}
            component={() => {
              return (
                <Room
                roomData={roomData}
                roomName={roomData.roomName}
                roomColor={roomData.roomColor}
                roomType={roomData.roomType}
                index={i}
                remove={remove}
                />
              );
            }}
          />
            ))
          }
          
          <Route
            exact
            path="/addroom"
            component={() => {
              return (
                <AddRoom
                newRoomData={newRoomData}
                roomData={roomData}
                rooomName={roomData.roomName}
                roomColor={roomData.roomColor}
                roomType={roomData.roomType}
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
