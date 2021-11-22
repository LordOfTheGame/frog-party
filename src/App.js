import {useState, useEffect} from 'react'
import React from 'react'
import Content from './components/Content'

import './App.css'


import Sound from 'react-sound';
import forestbgm from './audio/forest.mp3'

//Visual assets to preload
import noFrog from './imgs/stump.jpg'
import frog from './imgs/stump-anim2.gif'
import curtR from './imgs/curtR.png'
import curtL from './imgs/curtL.png'



function App(){

//Image array
const images = ['./imgs/stump.jpg', './imgs/stump-anim2.gif', './imgs/curtR.png', './imgs/curtL.png'];

//Image Object
const imageObject = {noFrog : noFrog, frog : frog, curtR: curtR, curtL : curtL}

// global state
const [frogeStatus, setStatus] = useState(false);
const [soundStatus, setSound] = useState(false);
const [popupStatus, setPopup] = useState(false);


const [initialLoad, toggleInitialLoad] = useState(true);

//image loading
const [imagesLoaded, addImage] = useState(0);


useEffect(()=>{
  images.forEach((image)=>{
    let img = new Image();
    img.src=image;
    img.onload=addImage(imagesLoaded+1);
  })
})


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
    {imagesLoaded === images.length? <Content 
    soundStatus={soundStatus} 
    frogeStatus = {frogeStatus}
    popupStatus={popupStatus}

    changeStatus={changeStatus}
    changePopup={changePopup}
    changeSound={changeSound}

    initialToggle = {initialToggle}   
    initialLoad = {initialLoad}

    // Images
    
    imageObject = {imageObject}

    />:
    null}
    
  </div>
)

}

export default App;
