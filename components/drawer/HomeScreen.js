import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {

    

  return (
    <View style={styles.container}>

      <Text>Home Screen</Text>
      <Pressable 
        
        style={({pressed})=>({ 
            backgroundColor:pressed ? 'red':'green'
        })}
        
      >
          <Text style={styles.button}>Button </Text>
      </Pressable>
    </View>
  )

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        padding:10,
        color:"white"
    }
})

export default HomeScreen