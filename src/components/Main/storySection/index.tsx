import React from 'react';
import "./index.css"

export const Story: React.FC = () => {
    return (
        <section className="story">
            <div className="story_column_left">
                <h2>the story behind<br/>the sauce</h2>
                <img src="/images/woman.png" alt="woman"/>
            </div>
            <div className="story_column_right">
                <img src="/icons/background_for_text.png" alt="background_for_text"/>
                <p className="story_text">
                    HELLO, I’M LAUREN AND AS A LIFELONG <br/>
                    ADVENTUROUS EATER, I’VE TRIED A LOT OF CRAZY<br/>
                    THINGS, BUT I NEVER THOUGHT HOT SAUCE IN<br/>
                    COFFEE WAS A SANE OPTION UNTIL A FRIEND<br/>
                    DARED ME TO TRY IT.<br/>
                    <br/>
                    AND IT SUCKED<br/>
                    <br/>
                    BUT I WONDERED IF THERE WAS A WAY TO ADD<br/>
                    SPICE TO MY COFFEE. WHEN THERE WAS NO<br/>
                    EASY SOLUTION, UJJO WAS BORN.<br/>
                    <br/>
                    UJJO (OOO-JOE): THE WORD FOR “FIRE” IN<br/>
                    KONKANI, SPOKEN ON THE WEST COAST OF<br/>
                    INDIA, IS AN HOMAGE AND A LOVE LETTER TO MY<br/>
                    DAD, AN INDIAN IMMIGRANT WHO INSTILLED A<br/>
                    FIRE IN MY PALATE – AND MY HEART – FROM<br/>
                    THE VERY BEGINNING.
                </p>
            </div>
        </section>
    );
};