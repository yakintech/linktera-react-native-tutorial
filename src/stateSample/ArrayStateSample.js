import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import React, { useState, Fragment } from 'react'

const ArrayStateSample = () => {

    let countryList = ['Turkey', 'Germany', 'Iran', 'Russia', 'France','Turkey', 'Germany', 'Iran', 'Russia', 'France','Turkey', 'Germany', 'Iran', 'Russia', 'France','Turkey', 'Germany', 'Iran', 'Russia', 'France'];
    const [countries, setCountries] = useState(countryList);
    const [countryName, setCountryName] = useState('')


    const removeCountry = (name) => {

        let newCountries = countries.filter(item => item != name);
        setCountries(newCountries);
    }


    const addNew = () => {

        setCountries([...countries, countryName])
        setCountryName('')

    }
    return (
        <ScrollView>
            <Text style={{fontSize:45, fontWeight:'bold'}}>{countries.length}</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                onChangeText={setCountryName}
                value={countryName}
            />
            <Button title='Add New Country' onPress={() => addNew()}></Button>

            {
                countries && countries.map((item, index) => {
                    return <Fragment key={index}>
                        <Text style={{ fontSize: 45 }} key={index}>{item}</Text>
                        <Button onPress={() => removeCountry(item)} title='Remove'></Button>
                    </Fragment>
                })
            }
            <Button title='Remove All' onPress={() => setCountries([])}></Button>
        </ScrollView>
    )
}

export default ArrayStateSample