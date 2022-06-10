import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/base'
import ChildComp from './ChildComp'

const GrandComp = () => {

    const [counter, setCounter] = useState(0);

    console.log('Grand Comp rendered!!');

  return (
    <>
      <Text>{counter}</Text>
      <Button onPress={() => setCounter(counter + 1)}>Increase</Button>
      <ChildComp></ChildComp>
    </>
  )
}

export default GrandComp