import React from "react";

export default function Card(props) {
    return (
        <article className="creations--card">
                <img className="creations--card-img-mobile" src={`./images/mobile/${props.backgroundImage}`} alt='creations box img'/>
                <img className="creations--card-img-desktop" src={`./images/desktop/${props.backgroundImage}`} alt='creations box img'/>
            <div className="creations--card-overlay">
                <h3 className="creations--card-text">{props.text}</h3>
            </div>
        </article>
                
    )
}