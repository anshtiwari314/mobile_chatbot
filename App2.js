
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React, { useState } from 'react'
import VittBot from './library';
import { KeyboardAvoidingView,Dimensions } from 'react-native';

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
  const [open,setOpen] = useState(true)

  const Tab = createBottomTabNavigator()
  const HEIGHT_AT_TOP = Dimensions.get('window').height*0.05;
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:"red",paddingTop:HEIGHT_AT_TOP}} behavior='padding'  >
    <NavigationContainer >
      <Tab.Navigator>
          
          <Tab.Screen name="VittBot" >
             {(props)=> <VittBot {...props} showChatWindow={open} setShowChatWindow={setOpen} />}
          </Tab.Screen> 
          
          <Tab.Screen name="Addtocart" component={Addtocart}/>
          <Tab.Screen name="ELSS" component={ELSS}/>
          <Tab.Screen name="ExploreNewFunds" component={ExploreNewFunds}/>
          <Tab.Screen name="Loans" component={Loans}/>
          <Tab.Screen name="MyReports" component={MyReports}/>
          <Tab.Screen name="MySip" component={MySip}/>
          <Tab.Screen name="MyTransaction" component={MyTransaction}/>
          <Tab.Screen name="NFO" component={NFO}/>
          <Tab.Screen name="Portfolio" component={Portfolio}/>
          <Tab.Screen name="Tax" component={Tax}/>
          <Tab.Screen name="TopTabBarDashboard" component={TopTabBarDashboard}/>
          <Tab.Screen name="Transaction" component={Transaction}/>
          <Tab.Screen name="WEALTH" component={WEALTH}/> 
      </Tab.Navigator>
    </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

export default App;
