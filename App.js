import React from 'react';
import 'react-native-gesture-handler';
import { GlobalProvider } from './src/logic/GlobalVars';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigations/DrawerNavigator';

export default function App() {

  return (
    <GlobalProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </GlobalProvider>
  );
}
