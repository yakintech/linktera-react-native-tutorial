import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../../screens/product/ProductListScreen';
import ProductDetailScreen from '../../screens/product/ProductDetailScreen';
import AddProductScreen from '../../screens/product/AddProductScreen';
import { NavigationContainer } from '@react-navigation/native';

const ProductStack = () => {

    const Stack = createNativeStackNavigator();

    return (<>

        <Stack.Navigator>
            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{
                    headerTitle: 'Product List'
                }} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="AddProduct" component={AddProductScreen} />
        </Stack.Navigator>

    </>
    )
}

export default ProductStack