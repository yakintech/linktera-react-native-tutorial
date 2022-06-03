import { View, Text } from 'react-native'
import React from 'react'

const ProductDetail = ({detail}) => {
  return (
    <View>
      <Text>Name: {detail.name}</Text>
      <Text>Price: {detail.unitPrice}</Text>
      <Text>Stock: {detail.unitsInStock}</Text>
    </View>
  )
}

export default ProductDetail