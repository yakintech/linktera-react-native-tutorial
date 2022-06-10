import { View, TextInput } from 'react-native'
import React, { useReducer, useState } from 'react'
import { Button } from '@rneui/base'
import { useDispatch } from 'react-redux';
import { addDataToService, addToDoAction } from '../../store/actions/todo.actions';

const AddToDoScreen = ({navigation}) => {

  const [name, setName] = useState('');

  var dispath = useDispatch()

  const addNewTodo = () => {

    var randomId = Math.floor(Math.random() * 1000);

    let newTodoEntity = {
      id: randomId,
      title: name,
      completed: false
    }

    
    dispath(addDataToService(newTodoEntity))

    setName('')

  }

  return (
    <View>
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setName(text)}
          value={name}
          placeholder='Name'
        />
      </View>
      <View>
        <Button type='outline' onPress={() => addNewTodo()}>Add New Todo</Button>
      </View>
      <View>
        <Button type='outline' onPress={() => navigation.navigate("ToDoScreen")}>Go To List</Button>
      </View>
    </View>
  )
}

export default AddToDoScreen