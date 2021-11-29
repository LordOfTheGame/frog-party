import React from 'react';
import Buttons from './Buttons';
import Popup from './Popup';
import Playsound from './Playsound';
import Curtains from './Curtains';
import InitialOverlay from './InitialOverlay';




const Content = ({frogeStatus, soundStatus, popupStatus, 
    changeStatus, changeSound, changePopup,
     initialToggle, initialLoad,
    
    imageObject, setLoaded
    }) => {



    return (
        <div id='background'>

         
        <InitialOverlay initialLoad = {initialLoad} 
        initialToggle = {initialToggle}
        frogeStatus = {frogeStatus}/>
         
         <Curtains initialLoad = {initialLoad} initialToggle={initialToggle} imageObject={imageObject}/>

         

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
            src = {'stump-anim2.gif'}
            onLoad = {setLoaded(true)}
            />
    <img
            style={{
                width: '100%',
                minWidth: '1350px',
                    height: 'auto',
                    position: 'fixed',
                    zIndex: frogeStatus? 0:1,
            }}
            src = {'stump.jpg'}
            onLoad = {setLoaded(true)}
            />


        </div>
    )
}

export default Content
