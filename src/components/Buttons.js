import React from 'react'
import FrogeButton from './FrogeButton'
import Mutebtn from './Mutebtn'
import { useSpring, animated } from 'react-spring';


const Buttons = ({changeSound, 
    changeStatus, setPopup, soundStatus, 
    frogeStatus, 


        initialLoad}) => {

            const styles = useSpring({
                
                from: {opacity: 0,
                       top: '-20%'},
                to: {opacity: initialLoad? 0:1,
                    top: initialLoad? '-20%' : '0'},
                
                config: {duration: 1000},
                delay: 2300,
            })
                    
    return (
        <animated.div style={{  minWidth: '35%',
            height: '8%',
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            columnGap: '1em',
            opacity: 0,
            position: 'relative',
            top: '-30%',
            zIndex: 2,
            
            ...styles}}>

            
            <button className="btn"
            onClick={setPopup}>
            Show credits
            </button>

            <FrogeButton changeStatus = {changeStatus}
            changeSound = {changeSound}
            frogeStatus = {frogeStatus}
            />

            <Mutebtn 
            changeSound = {changeSound} 
            soundStatus = {soundStatus}
            />

    </animated.div>

    )

}

export default Buttons
