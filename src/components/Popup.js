import React from 'react'



const Popup = ({popupStatus, changePopup}) => {

    if(popupStatus){

        return (
            <div id="popup-container">
                <div id="popup-message">

                    <div id="credits">
                    <h3 className="credit-title">Music</h3>
                    <p className="credit-content">Name of music guy</p>
                    <br />
                    <h3 className="credit-title">Development</h3>
                    <p className="credit-content">By Boof</p>
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
