import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const CounterSample = () => {

    const [counter, setCounter] = useState(0);


    console.log('Counter Sample component rendered!! ');

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <View>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{counter}</Text>
            <Button title='Increase' onPress={() => increaseCounter()}></Button>
        </View>
    )
}

export default CounterSample