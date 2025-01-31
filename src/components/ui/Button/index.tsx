import React from 'react';
import {IMyButton} from "./index.interface.ts";
import "./index.css";


export const MyButton: React.FC<IMyButton>= ({text, children}) => {

    return (
        <button className="myBtn">
            {text}
            {children}
        </button>
    );
};
