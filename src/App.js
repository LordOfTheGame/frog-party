import {useState, useEffect} from 'react'
import React from 'react'
import Content from './components/Content'

import Sound from 'react-sound';
import forestbgm from './audio/forest.mp3'


import './App.css'



function App(){

// global state
const [frogeStatus, setStatus] = useState(false);
const [soundStatus, setSound] = useState(false);
const [popupStatus, setPopup] = useState(false);


const [initialLoad, toggleInitialLoad] = useState(true);




// methods
const changeStatus = () =>{
  setStatus(
    !frogeStatus
  )
} 

const changeSound = () =>{
  setSound(
    !soundStatus
  )
}

const changePopup = () =>{
  setPopup(
    !popupStatus
  )
}



const initialToggle = () =>{
  toggleInitialLoad(false);
  setSound(true);
  
}


// the render


return (
  <div >

    <Content 
    soundStatus={soundStatus} 
    frogeStatus = {frogeStatus}
    popupStatus={popupStatus}

    changeStatus={changeStatus}
    changePopup={changePopup}
    changeSound={changeSound}

    initialToggle = {initialToggle}   
    initialLoad = {initialLoad}
    
    />
  </div>
)

}

export default App;
