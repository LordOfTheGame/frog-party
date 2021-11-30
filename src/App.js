import {useState, useEffect} from 'react'
import React from 'react'

import './App.css'

import Content from './components/Content';

//Visual assets to preload
import noFrog from './imgs/stump.jpg'
import frog from './imgs/stump-anim2.gif'
import curtR from './imgs/curtR.png'
import curtL from './imgs/curtL.png'

import Loadingscreen from './components/Loadingscreen';



function App(){

//Image array and object
const images = ['./imgs/stump.jpg', './imgs/stump-anim2.gif', './imgs/curtR.png', './imgs/curtL.png'];
const imageLoadObject = {};
const loadedImages = [];


//Image Object
const imageObject = {noFrog : noFrog, frog : frog, curtR: curtR, curtL : curtL}

// global state
const [frogeStatus, setStatus] = useState(false);
const [soundStatus, setSound] = useState(false);
const [popupStatus, setPopup] = useState(false);



const [initialLoad, toggleInitialLoad] = useState(true);


//image loading

const [imagesLoaded, toggleLoad] = useState(false);


const awaitLoading = (imageLoadObject, interval) =>{

  console.log("setinterval fired")

  for (let image in imageLoadObject ){
    if (imageLoadObject[image].complete && loadedImages.includes(image) == false){
      loadedImages.push(image);
    }
  }
  
  if(loadedImages.length === images.length){toggleLoad(true); clearInterval(interval)}

}

useEffect(()=>{

  console.log("useffect fired")


  images.forEach((image,index)=>{

    imageLoadObject[`img${index}`] = new Image();
    imageLoadObject[`img${index}`].src = image;

  })
  

  const interval = setInterval(()=>{
    awaitLoading(imageLoadObject, interval)}
    ,100);
    
},[])



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
    <Loadingscreen imagesLoaded={imagesLoaded}/>
    
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
    
    imageObject = {imageObject}


    />
    
  </div>
)

}

export default App;
