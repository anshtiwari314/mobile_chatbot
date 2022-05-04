
import React, { useState } from 'react'
import VittBot from './library';


function App(){
  const [open,setOpen] = useState(true)

  return (
    <VittBot showChatWindow={open} setShowChatWindow={setOpen} />
   
  );
};

export default App;
