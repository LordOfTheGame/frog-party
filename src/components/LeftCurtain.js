import React, { Component } from 'react'
import { Spring } from 'react-spring';
import { config, useTransition } from '@react-spring/core';
import { useSpring, animated } from 'react-spring';



const LeftCurtain = ({initialLoad, curtL}) => {
    const styles = useSpring({
        from: {left: '0'},
        to: {left: initialLoad? '0' : '-53%'},
        config: {duration: 1800},
        delay: 300,

    })
    

    return (
        <animated.div 
        style={{height: '100vh',
        width: '53%',

        backgroundImage: `url(${curtL})`,
        backgroundSize: '100% 100%',
        margin: 0,
        position: 'absolute',
        left: '0',
        zIndex: 3,
        ...styles}}
        />
    )
}



export default LeftCurtain



