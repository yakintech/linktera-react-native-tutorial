import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DeviceInfo, { getBatteryLevel, getDeviceId, getUniqueId } from 'react-native-device-info';


const Index = () => {

    const [batteryLevel, setbatteryLevel] = useState(0);
    const [uniqueId, setuniqueId] = useState('')



    useEffect(() => {

        getBatteryLevel()
            .then((data) => {
                setbatteryLevel(data);
            })

        var id = getUniqueId();

        setuniqueId(id);
      
            
    }, [])



    return (
        <View>
            <Text>Level: {batteryLevel}</Text>
            <Text>Unique Id: {uniqueId}</Text>
        </View>
    )
}

export default Index