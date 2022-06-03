import React, { useEffect, useState } from 'react'
import ProductDetail from '../../components/shared/screens/product/ProductDetail'
import { Text } from 'react-native'

import { baseService } from '../../api/baseService'


const ProductDetailScreen = ({ route, navigation }) => {

    const { id } = route.params;

    const [detail, setDetail] = useState({});

    useEffect(() => {

        baseService.getById("/products", id)
            .then(res => {
                setDetail(res)
            })

    }, [])

    return (<Text>{id}</Text>
        // <ProductDetail></ProductDetail>
    )
}

export default ProductDetailScreen