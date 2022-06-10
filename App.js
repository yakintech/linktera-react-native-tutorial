
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/linkteraECommerce/navigation/tab/'
import { CartProvider } from './src/linkteraECommerce/store/context/CartContext';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './src/linkteraECommerce/store/reducers/todo.reducers';
import thunk from 'redux-thunk'


const App = () => {

  const store = createStore(
    todoReducer,
    applyMiddleware(thunk)
  );

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