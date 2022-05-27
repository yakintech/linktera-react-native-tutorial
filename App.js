
//class base component, function base component

import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import JsxEventSample from './src/jsxSample/JsxEventSample'
import CounterSample from './src/stateSample/CounterSample'
import ArrayStateSample from './src/stateSample/ArrayStateSample'

const App = () => {

  return (<>
    <SafeAreaView>
      <ArrayStateSample></ArrayStateSample>
      {/* <CounterSample></CounterSample> */}
      {/* <JsxEventSample></JsxEventSample> */}
      {/* <OneWayBinding></OneWayBinding> */}
      {/* <Header></Header>
      <Text>Hello React Native</Text> */}
    </SafeAreaView>
  
  </>

  )
}

export default App