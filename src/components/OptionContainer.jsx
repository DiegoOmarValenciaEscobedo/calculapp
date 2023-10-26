import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useGlobalContext } from '../logic/GlobalVars'; // Usa el hook en lugar de la función

export default function OptionContainer({ children }) {
    const { globalState } = useGlobalContext(); // Usa el hook para acceder al contexto

    let containerStyle = {
        backgroundColor: globalState.displayColor,
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: .5,
        borderBottomColor: '#999',
        padding: 25,
    },
});
