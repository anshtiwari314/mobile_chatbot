
import React from 'react'
// import DrawerComponent from './components/drawer/DrawerComponent';
import {InternalStateProvider} from './components/contexts/InternalStateProvider'
import { ApiDataProvider } from './components/contexts/ApiDataProvider';
import Bot from './components/bot/Bot'

import {Text} from 'react-native'


function App(){

  return (
    <InternalStateProvider>
      <ApiDataProvider>
          <Bot/>
      </ApiDataProvider> 
    </InternalStateProvider>
   
  );
};

export default App;
