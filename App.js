
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/linkteraECommerce/navigation/tab/'
import { CartProvider } from './src/linkteraECommerce/store/context/CartContext';


const App = () => {


  return (<>
    <CartProvider>
      <NavigationContainer>
        {/* <Drawer></Drawer> */}
        <Tab></Tab>
      </NavigationContainer>
    </CartProvider>


  </>

  )
}

export default App