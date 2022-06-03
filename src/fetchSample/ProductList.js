import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

const ProductList = () => {

    //Uzak sunucudaki verileri çekip state e atayıp ekrana yazdıracağım. ( Fetch ile)

    const [products, setProducts] = useState([]);

    useEffect(() => {

        //1. then bloğu gelen response üzernden body i alıp onu js objesine parse etmemi sağlar.
        //2. then bloğu ise datayı almamı sağlar.
        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })

    }, [])

    const renderItem = ({item}) => {
        return <Text>{item.name}</Text>
    }

    return (
        <View>
            <FlatList
                data={products}
                renderItem={renderItem}
            >

            </FlatList>
        </View>
    )
}

export default ProductList