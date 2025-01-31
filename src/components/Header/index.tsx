import React from 'react';
import {MyButton} from "../ui/Button";
import "./index.css"

export const Header: React.FC = () => {
    return (
        <header>
            <div className="desktop_header">
                <nav>
                    <ul>
                        <li>
                            <MyButton text="GO BACK"/>
                        </li>
                        <li><a href="#">STORY</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">
                            <img src="/icons/fire_icon.png" alt="logo"/>
                        </a></li>
                        <li><a href="#">CONTACT</a></li>
                        <li><a href="#">WHOLESALE</a></li>
                        <li>
                            <MyButton text="CLONE"/>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="mobile_header">
                <nav>
                    <ul>
                        <li>
                            <MyButton>
                                <img src="/svg/menu.svg" alt="menu"/>
                            </MyButton>
                        </li>
                        <li><a href="#">
                            <img src="/icons/icon.png" alt="logo"/>
                        </a></li>
                        <li>
                            <MyButton>
                                <img src="/icons/people.png" alt=""/>
                            </MyButton>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};