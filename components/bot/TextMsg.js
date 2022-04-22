import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'

export default function TextMsg ({data}){


  // const [checkUrlExist,setCheckUrlExist] = useState(false)
  // const [urlMsg,setUrlMsg] = useState({mainText:"",string:"",link:""})
    
  //   useEffect(() => {
	// 	var i1 = data.indexOf('<')

	// 	var i2 = data.indexOf('<', i1 + 1)

	// 	if (i1 !== -1 && i2 !== -1 && i2 - i1 === 1) {

	// 		var index = query.indexOf(":", i2 + 1)
	// 		var index2 = query.indexOf(">", index)

	// 		setUrlMsg({
	// 			mainText: "" + data.substring(0, i1),
	// 			string: "" + data.substring(i2 + 1, index),
	// 			link: "" + data.substring(index + 1, index2)
	// 		})

	// 		setCheckUrlExist(true)

	// 	}
	// }, [])
  // console.log(urlMsg)

  // return (
  //   <>    {
  //     checkUrlExist ? 
  //       <View style={styles.TM}> 
  //         <Text style={styles.TM_TEXT}>{urlMsg.mainText} {urlMsg.string}</Text> 
  //         <Text style={styles.TM_link}>{urlMsg.link}</Text>
  //       </View>  
  //       : <Text style={styles.TM_text}>{data}</Text>
  //   }
  //   </>

  // )
  return (
    <Text style={styles.TM_text}>{data}</Text>
  )
}

const styles = StyleSheet.create({
  TM:{

  },
  TM_text:{
    color:"white"
  },
  TM_link:{
    color:"blue"
  }
})

