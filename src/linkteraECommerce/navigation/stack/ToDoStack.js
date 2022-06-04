import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoScreen from '../../screens/todo/ToDoScreen';
import AddToDoScreen from '../../screens/todo/AddToDoScreen';


const ToDoStack = () => {


  const Stack = createNativeStackNavigator();


  return (<>

    <Stack.Navigator>
      <Stack.Screen name="AddToDoScreen" component={AddToDoScreen} />
      <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
    </Stack.Navigator>

  </>)

}

export default ToDoStack