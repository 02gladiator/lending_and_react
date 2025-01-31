import React from 'react';
import {Preview} from "./previewSection";
import {Catalog} from "./catalogSection";
import {Ending} from "./endingSection";
import {Story} from "./storySection";

export const Main:React.FC = () => {
    return (
        <main className="main">
            <Preview/>
            <Catalog/>
            <Story/>
            <Ending/>
        </main>
    );
};
