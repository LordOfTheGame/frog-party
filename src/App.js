import {useState, useEffect} from 'react'
import React from 'react'
import Content from './components/Content'

import Sound from 'react-sound';
import forestbgm from './audio/forest.mp3'


import './App.css'



function App(){

// global state
const [frogeStatus, setStatus] = useState(false);
const [soundStatus, setSound] = useState(true);
const [popupStatus, setPopup] = useState(false);

const [shouldPlay, togglePlay] = useState(true)

const [initialLoad, toggleInitialLoad] = useState(true);
const [hoveredOver, setHover] = useState(false);



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



const hoverSet = () =>{
  setHover(
    true
  )
  playStatus();
}

const initialToggle = () =>{
  toggleInitialLoad(
    false
  )
  
}


const playStatus = () =>{  


  if(initialLoad){
    togglePlay(
      true
    )
    console.log('================================ INITIAL LOAD HAS BEEN TURNED ON =======================================')
  } else {
    togglePlay(
      false
    )
    console.log('================================ INITIAL LOAD HAS BEEN TURNED OFF =======================================')
  }
  
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

    setHover = {hoverSet} 
    initialToggle = {initialToggle}   
    
    />

<Sound 
    url = {forestbgm}
    autoLoad = {true}
    playStatus={shouldPlay? Sound.status.PLAYING : Sound.status.STOPPED}
    playFromPosition = {11000}
    loop = {true}
    />

  </div>
)

}

export default App;
