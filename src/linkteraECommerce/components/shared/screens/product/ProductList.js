import { FlatList, View } from 'react-native'
import React from 'react'

import { ListItem, Button } from '@rneui/base'


const ProductList = (props) => {

    const { products, deleteProduct, goToDetail, addToCart, orderByName } = props;


    const renderItem = ({ item }) => {
        return <>
            <ListItem key={item.id} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title onPress={() => goToDetail(item.id)}>{item.name}</ListItem.Title>
                    <ListItem.Title>{item.unitPrice.toFixed(2)}</ListItem.Title>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Button color="error" type='outline' onPress={() => deleteProduct(item.id)}>Delete</Button>
                        <Button color="error" type='outline' onPress={() => addToCart(item)}>Add To Cart</Button>
                    </View>


                </ListItem.Content>
            </ListItem>

        </>
    }


    return (<>
        <View>
            <Button type='outline' onPress={() => orderByName()}>Order By Name</Button>
        </View>
        <FlatList
            data={products}
            renderItem={renderItem}
        >

        </FlatList>
    </>
    )
}

export default ProductList