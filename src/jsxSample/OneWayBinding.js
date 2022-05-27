import { View, Text } from 'react-native'
import React from 'react'
import { categoryName } from './category';

const OneWayBinding = () => {

    //View, Text gibi componentler JSX elementleridir

    let name = "Çağatay";
    let titleComp = (<Text>Title: IPhone</Text>)
    let cities = ['İstanbul', 'İzmir', 'Ankara', 'Aydın']

    let onlineStatus = false;
  
    
    return (
        <View>
            <Text>{categoryName}</Text>
            <Text>{name}</Text>
            {titleComp}

            {
                cities.map((item, index) => {
                    return <Text key={index}>{item}</Text>
                })
            }

            {
                onlineStatus == true ? <Text>User Online!</Text> : <Text>User Offline</Text>
            }
        </View>
    )
}

export default OneWayBinding