import React from 'react'
import noFrog from './../imgs/stump.gif'
import frog from './../imgs/stump-anim2.gif'


const BgImage = ({frogeStatus}) => {
    if(frogeStatus){
        return (
            <img
            style={{
                width: '100%',
                minWidth: '1350px',
                    height: 'auto',
                    position: 'fixed',
                    zIndex: 0,
            }}
            src = {frog}
            />
        )
    } else {
        return (
            <img
            style={{
                width: '100%',
                minWidth: '1350px',
                    height: 'auto',
                    position: 'fixed',
                    zIndex: 0,
            }}
            src = {noFrog}
            />
        )
    }
    
}

export default BgImage

