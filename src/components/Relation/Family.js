import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from '../style'
import Member from './Members'


export default (props) => {
    return (
        <Fragment>
            <Text></Text>
            <Text style={style.biggerText}>Membros da Família: </Text>
            {props.children}
        </Fragment>
    )
}