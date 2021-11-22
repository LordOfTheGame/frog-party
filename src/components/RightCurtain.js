import React, { Component } from 'react'
import { Spring } from 'react-spring';
import { config, useTransition } from '@react-spring/core';
import { useSpring, animated } from 'react-spring';
import curtR from './../imgs/curtR.png'

const RightCurtain = ({initialLoad}) => {


    const styles = useSpring({
        from: {right: '0'},
        to: {right: initialLoad? '0' : '-53%'},
        config: {duration: 1800},
        delay: 300,
    })
    

    return (
        <animated.div 
        style={{height: '100vh',
        width: '53%',
        backgroundImage: `url(${curtR})`,
        backgroundSize: '100% 100%',

        margin: 0,
        position: 'absolute',
        right: '0',
        zIndex: 3,
        ...styles}}
        />
    )
}



export default RightCurtain



