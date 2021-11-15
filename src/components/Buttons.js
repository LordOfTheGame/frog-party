import React from 'react'
import FrogeButton from './FrogeButton'
import Mutebtn from './Mutebtn'


const Buttons = ({changeSound, 
    changeStatus, setPopup, soundStatus, 
    frogeStatus,

        initialToggle}) => {
    return (
        <div id="buttons-container">

            
            <button className="btn" onClick={setPopup}>
            Show credits
            </button>

            <FrogeButton changeStatus = {changeStatus}
            changeSound = {changeSound}
            frogeStatus = {frogeStatus}
            initialToggle = {initialToggle}
            />

            <Mutebtn 
            changeSound = {changeSound} 
            soundStatus = {soundStatus}
            initialToggle = {initialToggle}
            />


        </div>
    )
}

export default Buttons
