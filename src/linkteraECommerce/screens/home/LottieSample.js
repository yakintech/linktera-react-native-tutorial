import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import LottieView from 'lottie-react-native';
import { Button } from '@rneui/base';


const LottieSample = () => {

    var lottieRef = useRef();


    const playAnimation = () => {
        lottieRef.current.play()
    }

    const pauseAnimation = () => {
        lottieRef.current.pause()
    }

    const resetAnimation = () => {
        lottieRef.current.reset()
    }

    const resumeAnimation = () => {
        lottieRef.current.resume()
    }

    return (
        <>
            <LottieView ref={lottieRef} source={require('./animation.json')} />
            <Button onPress={() => playAnimation()}>Play</Button>
            <Button onPress={() => pauseAnimation()}>Pause</Button>
            <Button onPress={() => resumeAnimation()}>Resume</Button>
            <Button onPress={() => resetAnimation()}>Reset</Button>

        </>

    )
}

export default LottieSample