import { View, Text, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const AddToDo = (props) => {

    const [todoName, settodoName] = useState('');


    const add = () => {

        props.addNewTodo(todoName);
    }

  return (
    <View>
       <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                onChangeText={settodoName}
                value={todoName}
            />

            <Button title='Add new todo'  onPress={() => add()}></Button>
    </View>
  )
}

export default AddToDo