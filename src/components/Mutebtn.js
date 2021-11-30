import React from 'react'
import {GoMute, GoUnmute} from 'react-icons/go'
const Mutebtn = ({soundStatus, changeSound}) => {

const clicked = () =>{

    changeSound();


}
        
    if(soundStatus){
        return (
            <button style={{
                border: 'none',
                textDecoration: 'none',
                backgroundColor:'cadetblue',
                color: 'white',
                fontSize: '16px',
          }}  onClick={clicked}>
                 <GoUnmute size={28}/>   
            </button>
        )
    } else{
        return (
            <button style={{
                border: 'none',
                textDecoration: 'none',
                backgroundColor:'cadetblue',
                color: 'white',
                fontSize: '16px',
          }}  onClick={clicked}>
                 <GoMute size={28}/>   
            </button>
        )
    }
    
}



export default Mutebtn
