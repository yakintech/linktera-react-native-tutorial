import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import axios from 'axios';



const AddCategory = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: ''
        }
    });

    const onSubmit = (data) => {

        axios.post('https://northwind.vercel.app/api/categories', data)
            .then((res) => {
                console.log('RESPONSE', res.data);
            })

    }


    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name"
            >

            </Controller>

            {errors.name && <Text style={{ color: 'tomato' }}>This is required.</Text>}


            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="description"
            >

            </Controller>

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddCategory