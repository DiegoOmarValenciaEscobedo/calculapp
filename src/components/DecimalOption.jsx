import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useGlobalContext } from "../logic/GlobalVars";
import OptionFunctions from "../logic/OptionFunctions";
import OptionContainer from "./OptionContainer";

export default function DecimalOption() {
    const { globalState } = useGlobalContext();
    const { handleIncrement, handleDecrement } = OptionFunctions();

    let fontColorStyle = {
        color: globalState.fontColor,
    };

    return (
        <OptionContainer>
            <Text style={[styles.title, fontColorStyle]}>Cantidad de decimales</Text>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleDecrement}>
                    <Text style={[styles.buttonText, fontColorStyle]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.decimalCountText, fontColorStyle]}>{globalState.decimalCount}</Text>
                <TouchableOpacity onPress={handleIncrement}>
                    <Text style={[styles.buttonText, fontColorStyle]}>+</Text>
                </TouchableOpacity>
            </View>
        </OptionContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        fontSize: 20,
        paddingHorizontal: 10,
    },
    decimalCountText: {
        fontSize: 18,
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
    },
});