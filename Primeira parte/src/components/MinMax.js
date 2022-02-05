import React from "react"
import { Text } from 'react-native'
import style from "./style"

export default (props) => (
        <Text style={style.biggerText}> 
            O valor {props.max} é maior que o valor {props.min}
        </Text>
)