import React from "react";
import { useGlobalContext } from "../logic/GlobalVars";
import { StyleSheet, Text, ScrollView } from "react-native";
import { useFonts, Michroma_400Regular } from '@expo-google-fonts/michroma';

export default function DataLine({text=''}){

    let {globalState} = useGlobalContext();

    const fontColorStyle = {
        color: globalState.fontColor,
    }

    // Load fonts
    let [fontsLoaded, fontError] = useFonts({
        Michroma_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null
    }

    // DataLine component content
    return(
        <ScrollView horizontal={true}>
            <Text style={[styles.display, fontColorStyle]} numberOfLines={1}>{text}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    display: {
      fontSize:30,
      fontFamily: 'Michroma_400Regular',
      marginVertical:5,
      marginHorizontal:10,
      overflow: 'scroll',
    }
  });