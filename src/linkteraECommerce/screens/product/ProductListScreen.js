import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductList from '../../components/shared/screens/product/ProductList'
import { baseService } from '../../api/baseService'

const ProductListScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        baseService.getAll("/products")
            .then(data => {
                setProducts(data);
            })

    }, [])




    return (<>
        <Text>Products Count: </Text>
        <ProductList products={products}></ProductList>
    </>
    )
}

export default ProductListScreen