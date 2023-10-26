import React from "react";
import Options from "../components/Sidebar";
import CalculatorScreen from "../screens/CalculatorScreen";
import { createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return(
        <Drawer.Navigator 
            drawerContent={(props) => <Options/>}
        >
            <Drawer.Screen 
                name="Calculador" 
                component={CalculatorScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}