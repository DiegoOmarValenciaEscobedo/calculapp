import React from "react";
import KButton from './KButton'
import Buttons from '../logic/Buttons.js'
import { View, StyleSheet} from "react-native";
import GroupButtons from "../logic/GroupButtons";
import { useGlobalContext } from "../logic/GlobalVars";
import { deviceWidth, deviceHeight } from "../logic/LocalConstants";

export default function Keyboard(){

    let {globalState, setGlobalState} = useGlobalContext();

    // functions to change the color of the keyboard
    const colorSideStyle = {
        backgroundColor: globalState.color,
    };

    const keyboardColorStyle = {
        backgroundColor: globalState.keyboardColor,
    }

    // function to group buttons in rows
    const buttonsInRows = GroupButtons(Buttons, 4);

    return (
        //Keyboard
        <View style={[styles.container, styles.row, keyboardColorStyle]}>
            {/* White side of keyboard */}
            <View style={[styles.solidSide, keyboardColorStyle]}>
                {/* Buttons map to create each button */}
                {buttonsInRows.map((rowButtons, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {rowButtons.map((button, buttonIndex) => (
                            <KButton 
                                key={buttonIndex} 
                                button={button} 
                                globalState={globalState}
                                setGlobalState={setGlobalState}
                            />
                        ))}
                    </View>
                ))}
            </View>
            {/* Orange side of keyboard */}
            <View style={[styles.colorSide, colorSideStyle]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 40,
        ...Platform.select({
            android: {
                elevation: 99,
            },
        }),
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    solidSide:{
        zIndex: 1,
        width: deviceWidth * 0.75,
        height: deviceHeight * 0.7,
        borderTopStartRadius: 40,
    },
    colorSide:{
        width: deviceWidth * 0.25,
        height: deviceHeight * 0.7,
        borderTopEndRadius: 40,
    },
  });