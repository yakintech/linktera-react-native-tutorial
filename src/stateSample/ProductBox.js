import { View, Text, Button } from 'react-native'
import React from 'react'

const ProductBox = (props) => {
  return (
    <View>
      <Text>Name: {props.name} </Text>
      <Text>Unit Price: {props.price} </Text>
      <Text>Stock: {props.stock}</Text>
    </View>
  )
}

export default ProductBox