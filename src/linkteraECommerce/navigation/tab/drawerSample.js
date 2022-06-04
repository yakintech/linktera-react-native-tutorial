import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../stack/HomeStack';
import ProductStack from '../stack/ProductStack';

const Drawer = createDrawerNavigator();

const drawerSample = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Product" component={ProductStack} />
  </Drawer.Navigator>
  )
}

export default drawerSample