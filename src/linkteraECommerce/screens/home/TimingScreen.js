import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const TimingScreen = () => {


  const [start, IntervalStart] = useState(true)

  useEffect(() => {

    return () => {
      console.log('Clean up...');
    }

  }, [])


  return (
    <View>
      <Text>TimingSample</Text>
    </View>
  )
}

export default TimingScreen