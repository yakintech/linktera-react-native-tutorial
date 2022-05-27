import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { productsData } from '../data/productsData'

const ProductList = () => {

    
  const renderItem = ({item}) => {
      return <Text style={{fontSize:40, fontWeight:'bold'}}>{item.name}</Text>
  }

  return (
    <View>
        <FlatList
          data={productsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onScrollEndDrag={(e) => console.log("END",e)}
        >

        </FlatList>
    </View>
  )
}

export default ProductList