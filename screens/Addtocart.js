import React from 'react'
import {View,Text} from 'react-native'

export default function Addtocart({route}){
    
    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"black"}}>{`scheme id is ${route.params.schemaCode}` }</Text>
                <Text style={{color:"black"}}>{`scheme name is ${route.params.schemeData.schemeName}`}</Text>
                <Text style={{color:"black"}}>{`folio is ${route.params.folio}`}</Text>
           </View>
}




