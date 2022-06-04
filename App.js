
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/linkteraECommerce/navigation/tab/'
import { CartProvider } from './src/linkteraECommerce/store/context/CartContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './src/linkteraECommerce/store/reducers/todo.reducers';



const App = () => {

  const store = createStore(todoReducer);

  return (<>
    <Provider store={store}>
      <CartProvider>
        <NavigationContainer>
          {/* <Drawer></Drawer> */}
          <Tab></Tab>
        </NavigationContainer>
      </CartProvider>
    </Provider>



  </>

  )
}

export default App