import React from 'react';
import {ScrollingText} from "../../scrollingText";
import {Product} from "../catalogItem";
import "./index.css"

export const Catalog: React.FC = () => {
    return (
        <section className="catalog">
            <div className="slogan">
                <img src="/svg/scorpion_left.svg" alt="scorpio_1"/>
                <h2>THROW SOME LAVA IN<br/>YOUR JAVA</h2>
                <img src="/svg/scorpion_right.svg" alt="scorpio_2"/>
            </div>
            <div className="products">
                <div className="icons-container">
                    <img className="icon small_fire" src="/svg/small_fire.svg" alt=""/>
                    <img className="icon big_fire" src="/svg/big_fire.svg" alt=""/>
                    <img className="icon big_fire" src="/svg/big_fire.svg" alt=""/>
                    <img className="icon small_fire" src="/svg/small_fire.svg" alt=""/>
                </div>
                <div className="product-container">
                <Product photoURL="/images/LIGHT_ROAST.png"
                             text_1="tangy and tingly"
                             text_2="LIGHT ROAST BLEND"/>
                    <Product photoURL="/images/PACK.png"
                             text_1="light & dark roast"
                             text_2="UJJO SAMPLER PACK"/>
                    <Product photoURL="/images/DARK_ROAST.png"
                             text_1="light & dark roast"
                             text_2="UJJO SAMPLER PACK"/>
                </div>
            </div>
            <div className="scrolling_text_and_big_photo">
                <ScrollingText/>
                <img className="big_photo" src="/images/big_sauce.png" alt="big_sauce"/>
            </div>
        </section>
    );
};
