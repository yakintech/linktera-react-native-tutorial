import { View, Text } from 'react-native'
import React, { useState } from 'react'

const ChildComp = () => {

    const [counter2, setcounter2] = useState(0)

    console.log('Child Component render!!');

    //Maliyetli işler....

  return (
    <View>
      <Text>ChildComp</Text>
    </View>
  )
}

export default React.memo(ChildComp)