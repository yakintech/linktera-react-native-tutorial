import { View, Text } from 'react-native'
import React from 'react'

const ProductList = (props) => {

    const { products } = props;

    return (<>
        {
            products && products.map((item,key) => {
               return <Text>{item.name}</Text>
            })
        }
    </>
    )
}

export default ProductList