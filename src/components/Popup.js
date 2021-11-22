import React from 'react'



const Popup = ({popupStatus, changePopup}) => {

    if(popupStatus){

        return (
            <div id="popup-container">
                <div id="popup-message">

                    <div id="credits">
                    <h3 className="credit-title">Music</h3>
                    <a style={{margin: 0}} target="_blank" href="https://open.spotify.com/artist/1Xn3vX2CjfhE2TQFt4wjKX" >Danny Del Collo</a>
                    <br />
                    <h3 className="credit-title">Development</h3>
                    <a href="https://ko-fi.com/boofamel" target="_blank" style={{margin: 0}}>By Boof</a>
                    <br />
                    </div>

                    <button onClick={changePopup} 
                    className="credit-btn">Close</button>
                </div>
            </div>
        )
    } else{
        return null
    }


}

export default Popup
