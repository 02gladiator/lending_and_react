import React from 'react';
import {IProduct} from "./index.interface.ts";

export const Product: React.FC<IProduct> = ({photoURL, text_1, text_2}: IProduct) => {
    return (
        <div>
            <p className="text_on_sauce">{text_1}</p>
            <p className="text_on_sauce_2">{text_2}</p>
            <img src={photoURL} alt="sauce photo"/>
        </div>
    );
};
