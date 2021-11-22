import React from 'react'

import { useState, useEffect } from 'react';


const colors = ['rgba(247, 113, 125, 0.35)', 'rgba(79, 124, 172,0.35)', 'rgba(235, 94, 40,0.35)', 'rgba(255, 0, 255,0.35)', 'rgba(186, 85, 211,0.35)', 'rgba(100, 76, 204,0.35)', 
'rgba(123, 104, 238,0.35)', 'rgba(147, 112, 219,0.35)' ]

const FrogeOverlay = () => {

    const [currentColor, setColor] = useState('rgba(247, 113, 125, 0.35)');


    useEffect(() => {
        const interval = setInterval(() => {

        let newColors = colors.filter((color)=>color!==currentColor)

        let chosenColor = newColors[Math.floor(Math.random()*newColors.length)];
  
            console.log('memory leaking');
        setColor(chosenColor);
  
      
        }, 500);
        return () => clearInterval(interval);
      }, [currentColor]);


    return (
        <div  style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            backgroundColor: currentColor,

            zIndex: 2,

        }}>
            
        </div>
    )
}

export default FrogeOverlay
