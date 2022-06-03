import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ProductList = (props) => {

    const { products, deleteProduct, goToDetail } = props;


    const renderItem = ({ item }) => {
        return <>
            <Pressable onPress={() => goToDetail(item.id)}><Text>{item.name}</Text></Pressable>
            <Button onPress={() => deleteProduct(item.id)} title='Delete'></Button>
        </>
    }


    return (<>
        <FlatList
            data={products}
            renderItem={renderItem}
        >

        </FlatList>
    </>
    )
}

export default ProductList