import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Button } from 'react-native'
import React, {useState} from 'react'
import { productsData } from '../data/productsData'


const ProductList = () => {

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true)
  

  const renderItem = ({ item }) => {
    return <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
  }

  return (<>
    <View>
      <Button title='Close' onPress={() => setloading(false)}></Button>


      <ActivityIndicator size='large' animating={loading}>
      </ActivityIndicator>
      
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScrollEndDrag={(e) => console.log("END", e)}
      >

      </FlatList>
  


      {/* <TouchableOpacity onPress={() => alert("Hello Çağatay-Ayşe")}>
        <Text>Çağatay</Text>
        <Text>Ayşe</Text>
      </TouchableOpacity> */}
    
    </View>
  </>

  )
}

export default ProductList