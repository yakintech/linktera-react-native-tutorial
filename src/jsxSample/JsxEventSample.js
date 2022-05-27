import { View, Text, Button } from 'react-native'
import React from 'react'

const JsxEventSample = () => {

    const hello = () => {
        alert("Hello React Native!!")
    }

    const kdvCalc = (price) => {

        alert('KDV : ' + price * 1.18);

    }

    let name = "Çağatay";

    const changeName = () => {
        name = "Ali"
    }

    return (
        <View>
            <Text>{name}</Text>
            <Button title='Change Name' onPress={() => changeName()}></Button>
            <Button title='Click' onPress={() => hello()}></Button>
            <Button title='KDV Calc' onPress={() => kdvCalc(100)}></Button>
        </View>
    )
}

export default JsxEventSample