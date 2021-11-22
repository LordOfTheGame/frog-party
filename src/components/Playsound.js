import React from 'react'
import Sound from 'react-sound';
import frogbgm from './../audio/frogbeat.mp3'
import forestbgm from './../audio/forest.mp3'


const Playsound = React.memo(({soundStatus, frogeStatus, initialLoad}) => {

        let playFrog,playForest;

if (soundStatus && frogeStatus){
        playFrog = true;
        playForest = false;
} else if (soundStatus && frogeStatus===false){
        playFrog = false;
        playForest = true;
} else { 
        playFrog = false;
        playForest = false;
}

        return (
                <>
            <Sound 
    url = {forestbgm }
    playStatus={initialLoad? Sound.status.STOPPED : Sound.status.PLAYING}
    volume = {playForest? 100 : 0 }
    loop = {true}
    />

    <Sound 
    url = {frogbgm}
    playStatus={initialLoad? Sound.status.STOPPED : Sound.status.PLAYING}
    volume = {playFrog? 100 : 0 }
    loop = {true}
    />
    </>
        )

}
)
export default Playsound
