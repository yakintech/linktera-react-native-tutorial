
//class base component, function base component

import {SafeAreaView } from 'react-native'
import React from 'react'
import AddProduct from './src/fetchSample/AddProduct'

const App = () => {
  
  return (<>
    <SafeAreaView style={{flex:1}}>
      <AddProduct></AddProduct>
    </SafeAreaView>
  
  </>

  )
}

export default App