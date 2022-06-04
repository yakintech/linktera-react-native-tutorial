
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/linkteraECommerce/navigation/tab/'


const App = () => {


  return (<>
    <NavigationContainer>
      {/* <Drawer></Drawer> */}
      <Tab></Tab>
    </NavigationContainer>

  </>

  )
}

export default App