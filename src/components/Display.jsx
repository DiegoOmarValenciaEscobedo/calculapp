import React from 'react';
import DataLine from './DataLine';
import { View, StyleSheet } from 'react-native';
import { useGlobalContext } from '../logic/GlobalVars';
import {deviceWidth, deviceHeight} from '../logic/LocalConstants.js';

export default function Display() {

  let {globalState} = useGlobalContext();

  const displayColorStyle = {
    backgroundColor: globalState.displayColor,
  }

  return (
    <View style={[styles.container, displayColorStyle]}>
      <DataLine text={globalState.operation} />
      <DataLine text={globalState.result} />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: deviceWidth,
    height: deviceHeight * 0.2,
  },
});
