import { ActivityIndicator, View, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProductList from '../../components/shared/screens/product/ProductList'
import { baseService } from '../../api/baseService'
import { cartContext } from '../../store/context/CartContext'
import { setCartStorage } from '../../utils/helpers/AsycnStorageHelper'


const ProductListScreen = ({ navigation }) => {

    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(cartContext);
    const [orderDesc, setOrderDesc] = useState(true)
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState('');
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        baseService.getAll("/products")
            .then(data => {
                setProducts(data);
                setProductList(data)
                setLoading(false);
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
        //Sepete ürün eklediğinde bunu storage a da bildiriyorum.

        

        var cartProduct = cart.find(q => q.id == item.id);

        if (cartProduct) {

            cartProduct.quantity = cartProduct.quantity + 1;
            setCart([...cart]);
            setCartStorage([...cart])

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
            setCartStorage([...cart, newCartProduct])
        }

    }


    const orderByName = () => {

        setLoading(true);
        let newProducts = []
        if (orderDesc) {
            newProducts = products.sort((a, b) => a.name.localeCompare(b.name));
            setOrderDesc(false);
        }
        else {
            newProducts = products.sort((a, b) => b.name.localeCompare(a.name));
            setOrderDesc(true);
        }

        setProducts([...newProducts])
        setLoading(false);

    }

    const search = (name) => {
          setSearchName(name)

         let newProducts = productList.filter(q => q.name.includes(name));

         setProducts(newProducts)

    }

    return (<View style={{ flex: 1, justifyContent: 'center' }}>
        {
            loading ? <ActivityIndicator size="large" animating={loading} /> : <>
                <TextInput

                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                      }}
                    onChangeText={(e) => search(e)}
                    value={searchName}
                    placeholder="Searh by name..."
                    
                />
                <ProductList products={products} deleteProduct={deleteProduct} goToDetail={goToDetail} addToCart={addToCart} orderByName={orderByName}></ProductList>
            </>
        }



    </View>
    )
}

export default ProductListScreen