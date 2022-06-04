import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stack/HomeStack';
import ProductStack from '../stack/ProductStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartStack from '../stack/CartStack';
import { cartContext } from '../../store/context/CartContext';
import ToDoStack from '../stack/ToDoStack';
import { useSelector } from 'react-redux';
const index = () => {
    

    const Tab = createBottomTabNavigator();

    const { cart } = useContext(cartContext);
    const state = useSelector(state => state);

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
                    tabBarBadge: cart.length,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={26} />
                    ),
                }} />

            <Tab.Screen
                name="ToDo"
                component={ToDoStack}
                options={{
                    headerShown: false,
                    tabBarBadge: state.length,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="list-outline" size={26} />
                    ),
                }} />

                
        </Tab.Navigator>
    )
}

export default index