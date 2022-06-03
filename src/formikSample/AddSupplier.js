import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'



const AddSupplier = () => {

    const addSupplierValidationSchema = yup.object().shape({
        companyName: yup
            .string()
            .required("Company Name is required"),
        contactName: yup
            .string()
            .required("Contact Name is required")
    })

    const addNewSupplier = (values) => {

        axios.post("https://northwind.vercel.app/api/suppliers", values)
            .then(res => {
                console.log('Response', res.data);
            })
    }

    return (<>
        <Formik
            validationSchema={addSupplierValidationSchema}
            initialValues={{ companyName: '', contactName: '', contactTitle: '' }}
            onSubmit={values => addNewSupplier(values)}
        >


            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                    <View>
                        <TextInput
                            onChangeText={handleChange('companyName')}
                            onBlur={handleBlur('companyName')}
                            value={values.companyName}
                            style={styles.textInput}
                            placeholder='Company Name'
                        >
                        </TextInput>
                    </View>

                    <View>
                        <TextInput
                            onChangeText={handleChange('contactName')}
                            onBlur={handleBlur('contactName')}
                            value={values.contactName}
                            style={styles.textInput}
                            placeholder='Contact Name'

                        >
                        </TextInput>
                    </View>

                    <View>
                        <TextInput
                            onChangeText={handleChange('contactTitle')}
                            onBlur={handleBlur('contactTitle')}
                            value={values.contactTitle}
                            style={styles.textInput}
                            placeholder='Contact Title'

                        >
                        </TextInput>
                    </View>
                    {
                        errors.companyName && <Text style={{ fontSize: 20, color: 'red' }}>{errors.companyName}</Text>
                    }
                    {
                        errors.contactName && <Text style={{ fontSize: 20, color: 'red' }}>{errors.contactName}</Text>
                    }
                    <View>
                        <Button title='Add' onPress={handleSubmit}></Button>
                    </View>
                </>

            )}


        </Formik>
    </>
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

export default AddSupplier