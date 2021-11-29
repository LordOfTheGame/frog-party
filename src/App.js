import {useState, useEffect, Suspense} from 'react'
import React from 'react'

import './App.css'


import Sound from 'react-sound';
import forestbgm from './audio/forest.mp3'

//Visual assets to preload
import noFrog from './imgs/stump.jpg'
import frog from './imgs/stump-anim2.gif'
import curtR from './imgs/curtR.png'
import curtL from './imgs/curtL.png'
import Content from './components/Content';

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



const [imagesLoaded, setLoaded] = useState(0);
const [currentSource, setCurrentSource] = useState()

function imageAddition(complete){

  alert(complete);
    console.log("image load fired")
  addImage(imagesLoaded+1)
  console.log('number of images loaded: ',imagesLoaded);

}



useEffect(()=>{
    
    if (imagesLoaded < images.length-1){

      let img = new Image();
      
      img.src=images[imagesLoaded];

      if (img.complete){
        addImage(imagesLoaded+1)
        img.src=images[imagesLoaded];
      }
      img.onload=imageAddition(img.complete);

      console.log(img.src);

    } else {
      return
    }

},[imagesLoaded])




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
  <div>
    {imagesLoaded? <h1>Images have loaded successfully</h1> : <h1>Images are loading</h1> }
    
    <Content 
    soundStatus={soundStatus} 
    frogeStatus = {frogeStatus}
    popupStatus={popupStatus}

    changeStatus={changeStatus}
    changePopup={changePopup}
    changeSound={changeSound}

    initialToggle = {initialToggle}   
    initialLoad = {initialLoad}

    // Images
    
    // imageObject = {imageObject}
    setLoaded = {setLoaded}

    />
    
  </div>
)

}

export default App;
