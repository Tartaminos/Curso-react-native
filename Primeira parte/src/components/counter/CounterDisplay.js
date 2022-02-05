import React, { Fragment } from 'react'
import { Text, View } from 'react-native'
import style from '../style'

export default (props) => {


    return (
        <View style={style.biggerText}>
            <Text style={[style.counterStyle, style.counterStyleText]}>
                {props.num}

            </Text>
        </View>
    )
}