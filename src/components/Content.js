import React from 'react'
import Buttons from './Buttons'
import Popup from './Popup'
import Playsound from './Playsound'


const Content = ({frogeStatus, soundStatus, popupStatus, 
    changeStatus, changeSound, changePopup,
    setHover, initialToggle}) => {



    return (
        <div id={frogeStatus? 'froge-gif' : 'no-froge'} onMouseOver={setHover}>


    <Buttons changeSound={changeSound}
    changeStatus={changeStatus}
    setPopup={changePopup}
    soundStatus={soundStatus}
    frogeStatus={frogeStatus}

    initialToggle={initialToggle}

    />

    <Popup popupStatus={popupStatus} changePopup={changePopup}/>

    <Playsound soundStatus={soundStatus} frogeStatus = {frogeStatus}/>


        </div>
    )
}

export default Content
