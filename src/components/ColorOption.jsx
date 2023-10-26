import React from 'react';
import OptionContainer from './OptionContainer';
import ColorButton from './ColorButton';
import { Text, View, StyleSheet } from 'react-native';
import { useGlobalContext } from '../logic/GlobalVars';

export default function ColorOption(){

    let {globalState} = useGlobalContext();

    let fontColorStyle = {
        color: globalState.fontColor,
    }

    return(
        <OptionContainer>
            <View>
                <Text style={[styles.title, fontColorStyle]} >Color de complemento</Text>
                <View style={styles.container}>
                    <ColorButton color="#1010ad"/>
                    <ColorButton color="#ad1010"/>
                    <ColorButton color="#109906"/>
                    <ColorButton color="#FF5732"/>
                    <ColorButton color="#066399"/>
                    <ColorButton color="#afb505"/>
                </View>
            </View>
        </OptionContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
      },
    title: {
        fontSize: 15,
        textAlign: 'center',
    },
});