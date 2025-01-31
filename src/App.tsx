import React from "react";
import './index.css'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";


export const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

