import React, { Fragment } from "react"
import { Text } from 'react-native'
import style from "./style"


export default (props) => {
    return (
// react fragment retorna mais de um elemento diretamente sem estar envolvido em nada
// são chamados de elementos adjacentes, se quiser retorna-los deve-se usar o fragment
// importa ele com o react
        <Fragment>
            <Text style={style.biggerText}>
                {props.first}
            </Text>
            <Text>
                {props.second}
            </Text>
        </Fragment>        
    )
}
