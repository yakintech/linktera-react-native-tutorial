import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './../../screens/home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimingScreen from '../../screens/home/TimingScreen';
import GrandComp from '../../screens/home/GrandComp';
import LottieSample from '../../screens/home/LottieSample';


const Stack = createNativeStackNavigator();


const HomeStack = () => {

    return (<>

        <Stack.Navigator>

        <Stack.Screen
                name="Lottie"
                component={LottieSample}
                options={{
                    headerTitle: 'Lottie'
                }} />

        <Stack.Screen
                name="Grand"
                component={GrandComp}
                options={{
                    headerTitle: 'Grand'
                }} />

        <Stack.Screen
                name="Timing"
                component={TimingScreen}
                options={{
                    headerTitle: 'Home'
                }} />
            <Stack.Screen
                name="Anasayfa"
                component={HomeScreen}
                options={{
                    headerTitle: 'Home'
                }} />

        
        </Stack.Navigator>

    </>
    )
}

export default HomeStack