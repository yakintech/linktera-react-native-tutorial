import { View, Text } from 'react-native'
import React from 'react'

const PropSample = (props) => {

  return (
    <View>
      <Text>User Name: {props.name}</Text>
      <Text>User Surname: {props.surname}</Text>
    </View>
  )
}

export default PropSample
