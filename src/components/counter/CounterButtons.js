import React, { Fragment } from "react"
import { Button, View, StyleSheet } from "react-native"
import style from "../style"
export default (props) => {

    return (
        <Fragment>
            <View style={style.buttons}>
                <Button title="Adicionar"
                onPress={props.inc}
                />
                <Button title="Remover"
                onPress={props.dec}
                />
            </View>
        </Fragment>
    )
}