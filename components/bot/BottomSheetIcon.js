import React,{useState} from 'react' 
import {View,Text,StyleSheet,Pressable,Image} from 'react-native'
import { useApiData } from '../contexts/ApiDataProvider'

export function BottomSheet(){

    const {handleSearchQuery,allRequests,setAllRequests,loading,setLoading} = useApiData()
    const {generativeQn} = useApiData()

    return (
        //BS => Bottom sheet
    <View style={styles.BS}>
        {generativeQn && generativeQn.map((m,i)=>{
            return <View key={i} style={styles.BS_item}>
                        <Pressable style={styles.BS_item_button} onPress={!loading && handleSearchQuery(m.query,allRequests,setAllRequests,setLoading)}>
                            <Text style={styles.BS_item_button_text}>{m}</Text>
                        </Pressable>
                    </View>
            })}
        </View>
    )
}
export default function BottomSheetIcon(){

    const {generativeQn} = useApiData()
    //console.log(generativeQn)
    // BSB => Bottom sheet Icon
    const [visibleBottomSheet,setVisibleBottomSheet] = useState(false)
    return (
        <>
        {visibleBottomSheet && generativeQn && <BottomSheet/>}
        
        
        <View style={styles.BSI}>
            <Pressable style={styles.BSI_button} onPress={()=>setVisibleBottomSheet(prev=>!prev)}>
                <Image 
                    style={styles.BSI_button_image}
                    source={require("../../images/arrowUp.png")}    
                />
            </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    BS:{
        position:"absolute",
        bottom:100,
        width:"90%",
        marginLeft:"3%",
        backgroundColor:"white",
        borderWidth:2,
        borderColor:"gray"
    },
    BS_item:{
        padding:8,
        paddingLeft:5,
        // backgroundColor:"pink",
        borderWidth:1,
        borderColor:"gray"
    },
    BS_item_button:{

    },
    BS_item_button_text:{
        color:"black"
    },
    BSI:{
        position:"absolute",
        bottom:100,
        right:5,
        zIndex:5,
       // borderRadius:50,
        
    },
    BSI_button:{
        borderRadius:50,
        padding:10,
        backgroundColor:"#d6d6d6",
        // borderWidth:5,
        // borderColor:"black"
    },
    BSI_button_image:{
        width:20,
        height:20
    }
})