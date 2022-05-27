import { View, Text } from 'react-native'
import React from 'react'

const TodoList = (props) => {

    const { todos } = props;

    return (
        <View>
            {
                todos && todos.map((item,key) => {
                  return  <Text key={key}>{item}</Text>
                })
            }
        </View>
    )
}

export default TodoList