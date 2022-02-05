import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default ({num = 0}) => {
    return (
        <View>
            <Text style={style.biggerText}>
                O resultado é:
            </Text>
                {
                    num % 2 === 0 ?
                        <Text style={style.biggerText}>
                            Par
                        </Text>
                        :
                        <Text style={style.biggerText}>
                            Ímpar
                        </Text>
                }
        </View>
    )
}