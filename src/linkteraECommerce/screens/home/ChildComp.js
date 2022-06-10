import { View, Text } from 'react-native'
import React from 'react'

const ChildComp = () => {

    console.log('Child Component render!!');

    //Maliyetli işler....

  return (
    <View>
      <Text>ChildComp</Text>
    </View>
  )
}

export default React.memo(ChildComp)