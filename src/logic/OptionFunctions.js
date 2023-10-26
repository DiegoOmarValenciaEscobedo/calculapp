import React from 'react';
import { useGlobalContext } from "../logic/GlobalVars";

export default function OptionFunctions(){
    let {globalState, setGlobalState} = useGlobalContext();

    function handleDarkMode(){
        newGlobalState = {...globalState};
        newGlobalState.keyboardColor = newGlobalState.darkMode ? '#FFFFFF' :'#222222';
        newGlobalState.displayColor = newGlobalState.darkMode ? '#d9d9d9' :'#333333';
        newGlobalState.fontColor = newGlobalState.darkMode ? '#000' :'#FFF';
        newGlobalState.darkMode = !newGlobalState.darkMode;
        setGlobalState(newGlobalState);
    }

    const handleColorChange = (color) => {
        newGlobalState = {...globalState};
        newGlobalState.color = color;
        setGlobalState(newGlobalState);
    };

    const handleIncrement = () => {
        const newGlobalState = { ...globalState };
        newGlobalState.decimalCount += 1;
        setGlobalState(newGlobalState);
    };

    const handleDecrement = () => {
        if (globalState.decimalCount > 0) {
            const newGlobalState = { ...globalState };
            newGlobalState.decimalCount -= 1;
            setGlobalState(newGlobalState);
        }
    };

    return{
        handleDarkMode,
        handleColorChange,
        handleIncrement,
        handleDecrement,
    }
}