import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from '@rneui/base';
import { removeToDoAction } from '../../store/actions/todo.actions';


const ToDoScreen = () => {

  //useSelector hooku ile ben mevcut redux state imi alıyorum...
  const todos = useSelector(state => state);

  var dispatch = useDispatch();




  const getAll = () => {
    var list = dispatch({type:'GET_ALL_TODOS'});
  }

  const removeToDo = (item) => {
    //dispatch({ type: 'REMOVE_TODO', payload: item })
     dispatch(removeToDoAction(item))
  }

  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL_TODO', payload: {} })
  }


  const render = ({ item }) => {
    return <Card>
      <Card.Title>Id: {item.id} ToDo: {item.title}</Card.Title>
      <Card.Divider />

      <Button color="error" onPress={() => removeToDo(item)} type="outline" >Remove ToDo</Button>

    </Card>
  }

  return (
    <View>
      <Button onPress={() => getAll()}>Get</Button>
      <Button onPress={() => removeAll()}>Remove All Todos</Button>
      <FlatList
        data={todos}
        renderItem={render}
      >

      </FlatList>
    </View>
  )
}

export default ToDoScreen