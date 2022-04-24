import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'

const AboutScreen = ({navigation}) => {

  

  return (
    <View style={styles.container}>

      <Text>About Screen</Text>
      <Pressable 
        
        style={({pressed})=>({ 
            backgroundColor:pressed ? 'red':'violet'
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

export default AboutScreen