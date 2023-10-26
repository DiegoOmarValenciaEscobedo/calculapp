import {React} from "react";
import ButtonFunctions from "../logic/ButtonFunctions";
import { deviceHeight, deviceWidth } from "../logic/LocalConstants";
import { useFonts, Cabin_400Regular } from '@expo-google-fonts/cabin';
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default function KButton ({button, globalState, setGlobalState}) {

  const fontColorStyle = {
    color: globalState.fontColor,
  }

  function handlePress(){
    ButtonFunctions(button, globalState, setGlobalState)
  }

  let [fontsLoaded, fontError] = useFonts({
    Cabin_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View>
        <Text style={[styles.textButton, fontColorStyle]}>{button.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent: "center",
    width:deviceWidth * .25,
    height:deviceHeight * .14,
  },
  textButton:{
    fontSize:22,
    fontFamily: 'Cabin_400Regular',
  }
});