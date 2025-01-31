import React from 'react';
import "./index.css"
import chilliPepper from "./chilli_pepper.svg"

export const ScrollingText: React.FC = () => {
    return (
        <div className="scrolling_text">
            <div className="scrolling_text_animation">
                <img className="svg_picture" src={chilliPepper} alt="chilli_pepper"/>
                <p>put some fire in your belly</p>
                <img className="svg_picture" src={chilliPepper} alt="chilli_pepper"/>
                <p>put some fire in your belly</p>
                <img className="svg_picture" src={chilliPepper} alt="chilli_pepper"/>
            </div>

        </div>
    );
};
