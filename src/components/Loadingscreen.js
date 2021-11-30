import { rgb } from '@react-spring/shared';
import React from 'react'
import { useSpring, animated } from 'react-spring';
import { FaFrog } from "react-icons/fa";
import { IconContext } from "react-icons";

const Loadingscreen = ({imagesLoaded}) => {


    const styles = useSpring({
        from: {
            zIndex: 5,
            opacity: 1,
            },
     to: {
        zIndex: imagesLoaded? -2 : 5,
         opacity: imagesLoaded? 0 : 1,
         
         },
     
     config: {duration: 1000},
     delay: 300,
    })


    const frogRotate = useSpring({
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(-360deg)',
        },
        loop: true,
        config: {duration: 2000},
    })

    
    return (
        <animated.div style={{
            backgroundColor: 'rgba(243,211,189)',
            opacity: 1,
            width: '100%',
            height: '100vh',
            position: 'fixed',
            zIndex: 6,
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',

        ...styles
        }}>
            <div style={
                {
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'center',
                }
            }>
                <h2 style={{fontFamily: "'Shadows Into Light', cursive"}}>Loading...</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <IconContext.Provider value={{color: '#228B22'}}>
                <animated.div style={{...frogRotate}}>
                <FaFrog size={40}/>
                </animated.div>
                </IconContext.Provider>
                </div>
           </div>
        </animated.div>
    )
}

export default Loadingscreen
