import React from 'react'
import {GoMute, GoUnmute} from 'react-icons/go'

const Mutebtn = ({soundStatus, changeSound}) => {

const clicked = () =>{

    changeSound();


}
        
    if(soundStatus){
        return (
            <button className="btn" onClick={clicked}>
                 <GoUnmute size={28}/>   
            </button>
        )
    } else{
        return (
            <button className = "btn" onClick={clicked}>
                 <GoMute size={28}/>   
            </button>
        )
    }
    
}



export default Mutebtn
