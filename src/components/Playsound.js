import React from 'react'
import Sound from 'react-sound';
import frogbgm from './../audio/frogbeat.mp3'
import forestbgm from './../audio/forest.mp3'


const Playsound = React.memo(({soundStatus, frogeStatus}) => {


        return (
            <Sound 
            autoLoad = {true}
    url = {frogeStatus? frogbgm : forestbgm }
    playStatus={soundStatus? Sound.status.PLAYING : Sound.status.STOPPED}
    playFromPosition = {frogeStatus? 50:11000}
    loop = {true}
    />
        )

}
)
export default Playsound
