import React from 'react';
import Buttons from './Buttons';
import Popup from './Popup';
import Playsound from './Playsound';
import Curtains from './Curtains';
import InitialOverlay from './InitialOverlay';
import BgImage from './BgImage';


//frog gif URLs
import noFrog from './../imgs/stump.jpg'
import frog from './../imgs/stump-anim2.gif'


const Content = ({frogeStatus, soundStatus, popupStatus, 
    changeStatus, changeSound, changePopup,
     initialToggle, initialLoad}) => {



        

    return (
        <div id='background'>

         
        <InitialOverlay initialLoad = {initialLoad} 
        initialToggle = {initialToggle}
        frogeStatus = {frogeStatus}/>
         
         <Curtains initialLoad = {initialLoad} initialToggle={initialToggle}/>

         

    <Buttons changeSound={changeSound}
    changeStatus={changeStatus}
    setPopup={changePopup}
    soundStatus={soundStatus}
    frogeStatus={frogeStatus}

    initialLoad = {initialLoad}

    />

    <Popup popupStatus={popupStatus} changePopup={changePopup}/>

    <Playsound soundStatus={soundStatus} frogeStatus = {frogeStatus} initialLoad = {initialLoad}/>

    <img
            style={{
                width: '100%',
                minWidth: '1350px',
                    height: 'auto',
                    position: 'fixed',
                    zIndex: frogeStatus? 1:0,
            }}
            src = {frog}
            />
    <img
            style={{
                width: '100%',
                minWidth: '1350px',
                    height: 'auto',
                    position: 'fixed',
                    zIndex: frogeStatus? 0:1,
            }}
            src = {noFrog}
            />


        </div>
    )
}

export default Content
