import React, { Fragment, useState } from "react"
import { Text, Button } from "react-native"
import style from "./style"

export default (props) => {

    const [number, setNumber] = useState(props.initial)

    const inc = () => {
        setNumber(number + 1)
    }

    const dec = () => {
        setNumber(number - 1)
    }

    return (
        <Fragment>
            <Text style={style.biggerText}>
                {number}
            </Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </Fragment>

    )
}
