import React from "react";
import image from './assets/success.png'

function SuccessfulRegistration() {
    return (
        <><div className="body">{PageDisplay()}</div>
        <div>
        <img src={ image } alt="success logo"/>
        </div></>   
    )
}

export default SuccessfulRegistration