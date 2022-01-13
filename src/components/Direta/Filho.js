import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from '../style'

export default (props) => {
    return (
        <Fragment>
            <Text style={style.biggerText}>
                {props.a}
            </Text>
            <Text style={style.biggerText}>
                {props.b}
            </Text>
        </Fragment>
    )
}