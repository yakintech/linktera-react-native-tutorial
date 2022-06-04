import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stack/HomeStack';
import ProductStack from '../stack/ProductStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartStack from '../stack/CartStack';
const index = () => {


    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Product"
                component={ProductStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="shirt-outline" size={26} />
                    ),
                }} />

            <Tab.Screen
                name="Cart"
                component={CartStack}
                options={{
                    headerShown: false,
                    tabBarBadge:0,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={26} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default index