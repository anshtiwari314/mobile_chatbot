import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import createDrawerNavigator from '@react-navigation/drawer/src/navigators/createDrawerNavigator';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';


const Drawer = createDrawerNavigator();


function DrawerComponent(){
    console.warn(NavigationContainer)
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Screen_A" component={HomeScreen} />
                <Drawer.Screen name="Screen_B" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        
    )
}

export default DrawerComponent