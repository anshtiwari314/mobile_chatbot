import React from 'react'
import {Keyboard,Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,StyleSheet,
  TextInput, Platform, ScrollView, SafeAreaView, KeyboardAwareScrollView,
  } from 'react-native';

function App(){
  let count=0
  let arr=[]
  for(let i=0;i<100;i++)
    arr.push(1);

    
  return (
      <KeyboardAvoidingView style={{flex:1,backgroundColor:"red"}} behavior={ "padding"} >
          
          <View style={{flex:1,backgroundColor:"silver"}}>
                  
                  <View style={{flex:0.1,borderWidth:4,borderColor:"red",justifyContent:"center"}}>
                      <Text style={{color:"white"}}>Aditya Birla</Text>
                  </View >
                  <View style={{flex:0.1,borderWidth:4,borderColor:"orange",justifyContent:"center"}}>
                      <Text style={{color:"white"}}>Header 2</Text>
                  </View>
                <View style={{flex:0.7,borderWidth:4,borderColor:"red",overflowY:"hidden"}}>
                    <ScrollView >
                      { arr.map((ele,index)=>{
                          return <Text style={{height:40,color:"white"}} key={count++}>Ping me {index}</Text>
                      })}
                        
                    </ScrollView>
                </View>
                <View style={{flex:0.1,justifyContent:"center"}}>
                    <TextInput

                      placeholder='Enter input'
                      placeholderTextColor="red"
                      style={{
                        borderWidth:1,
                        borderColor:"red",
                        paddingTop:5,
                        paddingBottom:5,
                        
                      }}
                    />
                </View>
              
        </View>
        
      </KeyboardAvoidingView>    
)}
export default App;