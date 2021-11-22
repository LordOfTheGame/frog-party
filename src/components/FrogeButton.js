import React from 'react'

const FrogeButton = ({changeStatus, frogeStatus}) => {



    
const clicked = () =>{

    changeStatus();


}

    if(frogeStatus){
        return (
            <button className="btn" onClick={clicked}>
                Decquire froge
            </button>
        )
    } else {
        return (
            <button className="btn" onClick={clicked}>
                Acquire froge
            </button>
        )
    }
    
}

export default FrogeButton
