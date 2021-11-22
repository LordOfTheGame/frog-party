import React from 'react';
import LeftCurtain from './LeftCurtain';
import RightCurtain from './RightCurtain';
import { useSpring, animated } from 'react-spring';

const Curtains = React.memo(({initialLoad}) => {
    return (
        <div>
            
            <LeftCurtain initialLoad = {initialLoad}/>
            <RightCurtain initialLoad = {initialLoad}/>

        </div>
    )
}
)
export default Curtains
