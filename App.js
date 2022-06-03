
//class base component, function base component

import { SafeAreaView } from 'react-native'
import React from 'react'
import AddCategory from './src/hookFormSample/AddCategory'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  return (<>
    <SafeAreaView style={{ flex: 1 }}>
      <AddCategory></AddCategory>
    </SafeAreaView>

  </>

  )
}

export default App