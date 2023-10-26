import React from 'react';
import OptionFunctions from '../logic/OptionFunctions';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorButton({color}) {

    let {handleColorChange} = OptionFunctions();

    return (
        <TouchableOpacity
            style={[styles.colorButton, {backgroundColor: color}]}
            onPress={() => handleColorChange(color)}
        />
    );
}

const styles = StyleSheet.create({
    colorButton: {
        width: 35,
        height: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
      },
});