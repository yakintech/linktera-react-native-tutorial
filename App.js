
//class base component, function base component

import {SafeAreaView } from 'react-native'
import React from 'react'
import PropSample from './src/stateSample/PropSample'
import ProductBox from './src/stateSample/ProductBox'
import TodoScreen from './src/stateSample/TodoScreen'
import ArrayStateSample from './src/stateSample/ArrayStateSample'
import ProductList from './src/flatListSample/ProductList'
import FlexSample from './src/flexSample/FlexSample'

const App = () => {
  
  return (<>
    <SafeAreaView style={{flex:1}}>
     <FlexSample></FlexSample>
    </SafeAreaView>
  
  </>

  )
}

export default App