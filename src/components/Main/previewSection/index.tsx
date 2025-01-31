import React from 'react';
import "./index.css"
import {ScrollingText} from "../../scrollingText";


export const Preview: React.FC = () => {
    return (
        <section className="preview">
            <div className="column_with_logo_and_cactus">
                <div className="logo-container">
                    <img src="/icons/big_logo.png" alt="big_logo"/>
                </div>
                <ScrollingText/>
                <div className="sauce_and_cactus-container">
                    <img src="/images/sauce_with_cactus.png" alt="sauce_with_cactus"/>
                </div>
            </div>
            <div className="column_with_main_heading">
                <h1>THE FIRST HOT<br/> SAUCE MADE FOR <br/>COFFEE</h1>
                <div className="sauce_and_hand-container">
                    <img src="/images/sauce_and_hand.png" alt="sauce_and_hand"/>
                </div>
            </div>
        </section>
    );
};
