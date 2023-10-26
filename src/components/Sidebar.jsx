import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import OptionContainer from "./OptionContainer";
import { useGlobalContext } from "../logic/GlobalVars";
import OptionFunctions from "../logic/OptionFunctions";
import Icon from "react-native-vector-icons/FontAwesome";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";
import ColorOption from "./ColorOption";
import DecimalOption from "./DecimalOption";

const Options = () => {

    // Variables to handle the global state
    let {handleColorChange} = OptionFunctions();
    let {globalState} = useGlobalContext();

    // Functions to set the styles
    let fontColorStyle = {
        color: globalState.fontColor,
    }

    let backgroundColorStyle = {
        backgroundColor: globalState.displayColor,
    }

    let iconColorStyle = {
        backgroundColor: globalState.color,
    }
    
    return(
        <DrawerContentScrollView style={backgroundColorStyle} >
            <OptionContainer>
                <View style={styles.header}>
                    <View style={[styles.icon, iconColorStyle]}>
                        <Icon name="cog" size={30} color={globalState.displayColor}/>
                    </View>
                    <Text style={[styles.title, fontColorStyle]}>Personalización</Text>
                </View>
            </OptionContainer>
            <DarkModeSwitch/>
            <ColorOption/>
            <DecimalOption/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 10,
        fontSize:15,
        paddingVertical:10,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        alignItems:"center",
        justifyContent: "center",
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        padding:5,
        borderRadius: 15,
    },
});

export default Options;