import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductList from '../../components/shared/screens/product/ProductList'
import { baseService } from '../../api/baseService'

const ProductListScreen = ({ navigation }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        baseService.getAll("/products")
            .then(data => {
                setProducts(data);
            })
    }


    const deleteProduct = (id) => {
        baseService.delete("/products", id)
            .then(res => {
                getData();
            })
    }

    const goToDetail = (id) => {
        navigation.navigate("ProductDetail", { id: id })
    }

    return (<>
        <Text>Products Count: {products.length}</Text>
        <ProductList products={products} deleteProduct={deleteProduct} goToDetail={goToDetail}></ProductList>
    </>
    )
}

export default ProductListScreen