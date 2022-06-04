import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'

import { baseService } from '../../api/baseService'
import { Button, Card } from '@rneui/base'
import { cartContext } from '../../store/context/CartContext'



const ProductDetailScreen = ({ route, navigation }) => {

    const { id } = route.params;

    const [detail, setDetail] = useState({});

    const {cart, setCart} = useContext(cartContext)

    useEffect(() => {

        baseService.getById("/products", id)
            .then(res => {
                setDetail(res)
            })

    }, [])


    const addToCart = (item) => {
        //Eğer bu item sepette yoksa yeni bir ürün sepete eklenir
        //JS => filter, find

        var cartProduct = cart.find(q => q.id == item.id);

        if (cartProduct) {

            cartProduct.quantity = cartProduct.quantity + 1;
            setCart([...cart]);

        } else {
            //Sepette varsa mevcut ürünün fiyatı bir arttırılır
            let newCartProduct = {
                id: item.id,
                quantity: 1,
                name: item.name,
                price: item.unitPrice
            }
            //sprean keyworduyle sepetime yeni ürünü ekledim.
            setCart([...cart, newCartProduct])
        }

    }

    return (
        <Card>
            <Card.Title>{detail.name}</Card.Title>
            <Card.Divider />
            <Text style={{
                fontSize: 16,
                marginTop: 5
            }}>
            Price: {detail.unitPrice}
            </Text>
            <Text style={{
                fontSize: 16,
                marginTop: 5
            }}>
            Stock: {detail.unitsInStock}
            </Text>
            <Text style={{
                fontSize: 16,
                marginTop: 5
            }}>
            Quantity Per Unit: {detail.quantityPerUnit}
            </Text>
            <Text style={{
                fontSize: 16,
                marginTop: 5
            }}>
            Discontinued: {detail.discontinued}
            </Text>
            <Button onPress={() => addToCart(detail)}>Add To Cart</Button>
       
        </Card>
    )
}

export default ProductDetailScreen