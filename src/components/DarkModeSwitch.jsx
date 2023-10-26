import React from "react";
import { Text, Switch, View, StyleSheet } from "react-native";
import OptionContainer from "./OptionContainer";
import OptionFunctions from "../logic/OptionFunctions";
import { useGlobalContext } from "../logic/GlobalVars";

export default function DarkModeSwitch(){

    let {globalState} = useGlobalContext();
    let {handleDarkMode} = OptionFunctions();

    let fontColorStyle = {
        color: globalState.fontColor,
    }

    return(
        <OptionContainer>
            <View style={styles.container}>
                <Text style={[styles.title, fontColorStyle]}>Modo oscuro</Text>
                <Switch
                    trackColor={{ false: globalState.keyboardColor, true: globalState.keyboardColor }}
                    thumbColor={globalState.color}
                    onValueChange={handleDarkMode}
                    value={globalState.darkMode}
                />
            </View>
        </OptionContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        marginTop: 15,
    },
    title: {
        fontSize: 15,
    },
});