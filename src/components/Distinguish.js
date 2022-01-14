import React from 'react'
import { Text, Platform } from 'react-native'
import style from './style'

export default (props) => {

    if(Platform.OS === 'android'){
    return (
        <Text style={style.biggerText}>
            Android!
        </Text>
    )
    } else if (Platform.OS === 'ios'){
        <Text style={style.biggerText}>
            iOS!
        </Text>
    } else {
        <Text style={style.biggerText}>
            Eita!
        </Text>
    }
}