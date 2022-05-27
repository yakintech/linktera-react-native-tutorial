import { View, Text } from 'react-native'
import React from 'react'

const FlexSample = () => {

    let textStyle = {
        color: 'tomato',
        borderWidth: 1
    }

    return (
        <View style={{flex:1}}>
            {/* <Text style={textStyle}>Style Sample</Text>
            <Text style={{color:'blue', fontSize:22}}>Style Sample</Text> */}
                <View style={{backgroundColor:'tomato', flex:1, flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:18}}>Hello Çağatay</Text>
                    <Text style={{color:'white', fontSize:18}}>Profile</Text>

                </View>
                <View style={{backgroundColor:'aqua', flex:5}}></View>
        </View>
    )
}

export default FlexSample