import { Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { cartContext } from '../../store/context/CartContext'
import { Button, Card } from '@rneui/base'

const CartScreen = () => {

    const { cart, setCart } = useContext(cartContext);


    var totalPrice = 0;

    cart.forEach(item => {
        totalPrice = totalPrice + (item.quantity * item.price)
    });


    const removeCart = (id) => {
        //Sepetteki ürün bulunur ve sepetten çıkarılır.

        var newCartProducts = cart.filter(q => q.id != id);

        setCart(newCartProducts)
    }

    const renderItem = ({ item }) => {
        return <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <Text style={{
                fontSize: 16,
                marginTop: 5
            }}>
                {item.price.toFixed(2)} $ * {item.quantity}  = {(item.quantity * item.price).toFixed(2)} $
            </Text>
            <Button color="error" onPress={() => removeCart(item.id)} type="outline" >Remove Cart</Button>

        </Card>
    }

    return (
        <>
            {
                cart.length > 0 ? <Card>
                    <Card.Title>Total Price : {totalPrice.toFixed(2)}</Card.Title>
                </Card> : <Text>Cart is empty</Text>
            }
            <FlatList
                data={cart}
                renderItem={renderItem}
            >

            </FlatList>
            {
                cart.length > 0 ?  <Button color="error" onPress={() => setCart([])}  >Empty Cart</Button> : <></>
            }
           
            
        </>
    )
}

export default CartScreen