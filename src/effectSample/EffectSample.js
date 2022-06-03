import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const EffectSample = () => {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);


    console.log('Effect Sample component renreded!...');

    //maliyetli işlemler...
    //bu hook sayesinde aşağıdaki kod bloğu sadece component açıldığında bir kereliğe mahsus çalışacaktır.
    useEffect(() => {
        console.log('Use effect çalıştı...');
    }, [])

    useEffect(() => {
        console.log('Use effect-2 çalıştı...');
    }, [counter2])


    return (
        <View>
            <View>
                <Text>{counter}</Text>
                <Button onPress={() => setCounter(counter + 1)} title='Increase'></Button>
            </View>
            <View>
                <Text>{counter2}</Text>
                <Button onPress={() => setCounter2(counter2 + 1)} title='Increase-2'></Button>
            </View>
        </View>
    )
}


export default EffectSample