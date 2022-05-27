import { View, Text } from 'react-native'
import React, {useState} from 'react'
import AddToDo from './AddToDo'
import TodoList from './TodoList'

const TodoScreen = () => {

    const [todos, setTodos] = useState(['Login işlemi', 'sepet bug']);

    const addNewTodo = (data) => {
        setTodos([...todos, data]);
    }

  return (
    <View>
      <AddToDo addNewTodo={addNewTodo}></AddToDo>
      <TodoList todos={todos}></TodoList>
    </View>
  )
}

export default TodoScreen