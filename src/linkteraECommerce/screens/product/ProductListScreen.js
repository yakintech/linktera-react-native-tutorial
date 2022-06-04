import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProductList from '../../components/shared/screens/product/ProductList'
import { baseService } from '../../api/baseService'
import { cartContext } from '../../store/context/CartContext'


const ProductListScreen = ({ navigation }) => {

    const [products, setProducts] = useState([]);

    const { cart, setCart } = useContext(cartContext);

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

    return (<>

        {/* <Text>Products Count: {products.length}</Text> */}
        <ProductList products={products} deleteProduct={deleteProduct} goToDetail={goToDetail} addToCart={addToCart}></ProductList>
    </>
    )
}

export default ProductListScreen