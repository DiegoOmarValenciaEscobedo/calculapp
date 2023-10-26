import React from 'react';
import Constants from 'expo-constants';
import Display from '../components/Display.jsx';
import Keyboard from '../components/Keyboard.jsx';
import { StyleSheet, View, Text } from 'react-native';
import { useGlobalContext } from "../logic/GlobalVars";
import { deviceWidth, deviceHeight } from '../logic/LocalConstants';
import { useFonts, Michroma_400Regular } from '@expo-google-fonts/michroma';

export default function CalculatorScreen() {

  let {globalState} = useGlobalContext();

  // Functions to change styles
  let backgroundColorStyle = {
    backgroundColor: globalState.displayColor,
  };

  let fontColorStyle = {
    color: globalState.fontColor,
  }

  // Load fonts
  let [fontsLoaded, fontError] = useFonts({
    Michroma_400Regular,
  });

  if (!fontsLoaded && !fontError) {
      return null
  }

  return (
    <View style={[styles.container, backgroundColorStyle]}>
      <Text style={[styles.title, fontColorStyle]}>Calculapp</Text>
      <Display/>
      <Keyboard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight, 
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize:20,
    fontFamily: 'Michroma_400Regular',
    width: deviceWidth,
    height: deviceHeight * 0.1,
    backgroundColor: 'transparent',
    paddingVertical:10,
    textAlign: 'center',
  },
});
