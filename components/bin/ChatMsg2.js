import React,{useState,useCallback,useEffect} from 'react'
import {View,Text} from 'react-native'
import { GiftedChat ,Bubble, Message} from 'react-native-gifted-chat'


export default function ChatMsg(){
    const [messages, setMessages] = useState([]);

useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      
    
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  // const renderBubble= (props) =>{
  //   return <Bubble 
  //      {...props}
  //      wrapperStyle={{
  //          right:{
  //              backgroundColor:"red"
  //          },
  //          left:{
  //              backgroundColor:"black"
  //          }
  //      }}
  //      textStyle={{
  //          right:{
  //              color:"gold"
  //          },
  //          left:{
  //              color:"white"
  //          }
  //      }}
  //    />
  //   }
  function renderMessage(props){
    return <Message {...props}>
      <Text>hello</Text>
    </Message>
  }
  function renderCustomView(props){
    return <View {...props}>
      <Text>hello</Text>
    </View>
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      //renderBubble={renderBubble}
      renderCustomView={renderCustomView}
      alwaysShowSend 

    />
  )
}