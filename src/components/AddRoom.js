import React ,{useState}from 'react'
import { Link } from "react-router-dom";


export default function AddRoom(props) {

// onChange function that limits the available inputed keys in #room-name to 5
const [validName, setValidName]=useState('#4ec3f1')
const [errMessege, setErrMessege]=useState('none')
const [flag, setFlag]=useState(false)
const [color, setColor]=useState('')
const [roomPicked, setRoomPicked]=useState('')
// const [ButtonDisplay, setButtonDisplay]=useState('none')


const validNameFunction = (e) =>{
    if (e.target.value.length <= 5){
        setValidName('lightgreen')
        setFlag(true)
    } else {
        setValidName('red')
        setErrMessege('inline')
        setFlag(false)
    }
}

const colorInput = (e) =>{
setColor(e.target.value)
}
const roomInput = (e) =>{
    setRoomPicked(e.target.value)
    }
// function that recieves the added value from #room-color and translate it to an existing color

// onclick function that recieves the data received from the two inputs above and the selector and validates them-
// the inputs must have at least 1 character and that a room is selected, if not, the user will receieve an alert-
// that will return the user to the homepage, if the user inserted the valid data, the user will return to the-
// homepage and will see the new added rooms

    return (
        <div className='Addroom'>
            <select name='Choose a room'id="rooms" onChange={roomInput}>
            <option hidden disabled selected value>Choose a room </option>
            <option value="bedroom">Bedroom</option>
            <option value="bathroom">Bathroom</option>
            <option value="kitchen">Kitchen</option>
            </select>
            <br/>
            <br/>
            <input onChange={validNameFunction} id='room-name' placeholder='Room Name' style={{background:validName}}></input>
            <br/>
            <p id='err' style={{display:errMessege, color:'red'}}>Room Name Must contain 5 or less characters</p>
            <br/>
            <label forhtml='room-color'>Select Room Color: </label>
            <br/>
            <input id='room-color' placeholder='Room Color' type='color' onChange={colorInput}></input>
            <br/>
            <br/>

            <Link id="link" to="/"><button id='create'>Create</button></Link>

        </div>
    )
}
