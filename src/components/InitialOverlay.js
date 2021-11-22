import React from 'react'
import FrogeOverlay from './FrogeOverlay'

const colors = ['rgba(247, 113, 125, 0.35)', 'rgba(79, 124, 172,0.35)', 'rgba(235, 94, 40,0.35)', 'rgba(255, 0, 255,0.35)', 'rgba(186, 85, 211,0.35)', 'rgba(100, 76, 204,0.35)', 
'rgba(123, 104, 238,0.35)', 'rgba(147, 112, 219,0.35)' ]



const initialOverlay = React.memo(({initialToggle, initialLoad, frogeStatus}) => {


   
    if (initialLoad){
        return (
            <div style={{
                width: '100%',
                height: '100vh',
                position: 'fixed',
                zIndex: 5,

            }} onClick={initialToggle}>

            </div>
        )
    } else if (frogeStatus){
    return (
       <FrogeOverlay/>
    )
} else {
    return null
}
}
)
export default initialOverlay
