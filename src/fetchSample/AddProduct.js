import { View, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);


    const addNewProduct = () => {

        const newProduct = {
            name: name,
            unitPrice: price
        }

        //JSON.stringify metodu benim js objemi JSON a çevirmemi sağlar.

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newProduct)
        }

        //fetch default olarak http kanalına GET isteği atar.
        fetch("https://northwind.vercel.app/api/products", requestOptions)
            .then(res => res.json())
            .then(data => {

                console.log('New Product', data);
                alert("Success...")
            })
            .catch(err => {
                console.log('Error', err);
            })


    }

    return (<>
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setName(text)}
                value={name}
                placeholder='Name'
            />
        </View>
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setPrice(text)}
                value={price}
                placeholder='Unit Price'
            />
        </View>
        <View>
            <Button title='Add' onPress={() => addNewProduct()} ></Button>
        </View>
    </>
    )
}

export default AddProduct