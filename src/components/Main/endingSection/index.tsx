import React from 'react';
import {ScrollingText} from "../../scrollingText";
import "./index.css"

export const Ending: React.FC = () => {
    return (
        <section className="ending">
            <ScrollingText/>
            <div className="ending-container">
                <img className="green_fire" src="/icons/green_fire.png"
                     alt="green_fire"/>
                <img className="logo" src="/icons/big_logo.png"
                     alt="big_logo"/>
                <img className="background_for_logo" src="/svg/background_logo.svg"
                     alt="background_for_logo"/>
            </div>
        </section>
    );
};
