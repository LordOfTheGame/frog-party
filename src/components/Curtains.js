import React from 'react';
import LeftCurtain from './LeftCurtain';
import RightCurtain from './RightCurtain';
import { useSpring, animated } from 'react-spring';

const Curtains = React.memo(({initialLoad, imageObject}) => {
    return (
        <div>
            
            <LeftCurtain curtL={imageObject.curtL} initialLoad = {initialLoad}/>
            <RightCurtain curtR = {imageObject.curtR} initialLoad = {initialLoad}/>

        </div>
    )
}
)
export default Curtains
