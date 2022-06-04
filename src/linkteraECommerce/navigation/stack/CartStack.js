import { View, Text } from 'react-native'
import React from 'react'
import CartScreen from '../../screens/cart/CartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CartStack = () => {

  const Stack = createNativeStackNavigator();


  return (<>

    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>

  </>
  )

}

export default CartStack