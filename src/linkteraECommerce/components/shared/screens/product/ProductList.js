import { FlatList } from 'react-native'
import React from 'react'

import { ListItem, Button } from '@rneui/base'


const ProductList = (props) => {

    const { products, deleteProduct, goToDetail, addToCart } = props;


    const renderItem = ({ item }) => {
        return <>

            <ListItem key={item.id} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title onPress={() => goToDetail(item.id)}>{item.name}</ListItem.Title>
                    <Button color="error" type='outline'  onPress={() => deleteProduct(item.id)}>Delete</Button>
                    <Button color="error" type='outline' onPress={() => addToCart(item)}>Add To Cart</Button>
             
                </ListItem.Content>
            </ListItem>

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