import { Text, FlatList } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ListItem, Button } from '@rneui/base'


const ProductList = (props) => {

    const { products, deleteProduct, goToDetail } = props;


    const renderItem = ({ item }) => {
        return <>
            {/* <Pressable onPress={() => goToDetail(item.id)}><Text>{item.name}</Text></Pressable>
            <Button onPress={() => deleteProduct(item.id)} title='Delete'></Button> */}

            <ListItem key={item.id} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title onPress={() => goToDetail(item.id)}>{item.name}</ListItem.Title>
                    <Button color="error" type='outline'  onPress={() => deleteProduct(item.id)}>Delete</Button>
                    <Button color="error" type='outline'>Add To Cart</Button>
             
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