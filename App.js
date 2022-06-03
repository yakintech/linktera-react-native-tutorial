
//class base component, function base component

import { SafeAreaView } from 'react-native'
import React from 'react'
import AddProduct from './src/fetchSample/AddProduct'
import ProductList from './src/fetchSample/ProductList'
import AddSupplier from './src/formikSample/AddSupplier'
import AddCategory from './src/hookFormSample/AddCategory'

const App = () => {

  return (<>
    <SafeAreaView style={{ flex: 1 }}>
      <AddCategory></AddCategory>
    </SafeAreaView>

  </>

  )
}

export default App