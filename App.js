
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { useState } from 'react'
import VittBot from './library';

import WEALTH from './screens/WEALTH'
import Addtocart from './screens/Addtocart'
import ExploreNewFunds from './screens/ExploreNewFunds'
import Loans from './screens/Loans'
import MyReports from './screens/MyReports'
import ELSS from './screens/ELSS'
import MySip from './screens/MySip'
import MyTransaction from './screens/MyTransaction'
import NFO from './screens/NFO'
import Portfolio from './screens/Portfolio'
import Tax from './screens/Tax'
import TopTabBarDashboard from './screens/TopTabBarDashboard'
import Transaction from './screens/Transaction'

function App(){
  const Stack = createStackNavigator()
  //const HEIGHT_AT_TOP = Dimensions.get('window').height*0.05;
  return (
    //<KeyboardAvoidingView style={{flex:1,backgroundColor:"red",paddingTop:HEIGHT_AT_TOP}} behavior={Platform.OS=='ios' ? 'padding':'none '}  >
    <NavigationContainer >
      <Stack.Navigator >
          
          <Stack.Screen name="VittBot" options={{headerShown:false}}> 
             {(props)=> <VittBot {...props}   />} 
          </Stack.Screen> 
          
          <Stack.Screen name="Addtocart" component={Addtocart}/>
          <Stack.Screen name="ELSS" component={ELSS}/>
          <Stack.Screen name="ExploreNewFunds" component={ExploreNewFunds}/>
          <Stack.Screen name="Loans" component={Loans}/>
          <Stack.Screen name="MyReports" component={MyReports}/>
          <Stack.Screen name="MySip" component={MySip}/>
          <Stack.Screen name="MyTransaction" component={MyTransaction}/>
          <Stack.Screen name="NFO" component={NFO}/>
          <Stack.Screen name="Portfolio" component={Portfolio}/>
          <Stack.Screen name="Tax" component={Tax}/>
          <Stack.Screen name="TopTabBarDashboard" component={TopTabBarDashboard}/>
          <Stack.Screen name="Transaction" component={Transaction}/>
          <Stack.Screen name="WEALTH" component={WEALTH}/> 
      </Stack.Navigator>
    </NavigationContainer>
    //</KeyboardAvoidingView>
  );
};

export default App;
