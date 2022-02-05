import React from "react"
import { Text } from 'react-native'
import style from "./style"

function Comp () {
    return <Text style={style.biggerText}> #Oficial</Text>
}

function Comp1() {
    return <Text style={style.biggerText}> Comp 1</Text>
}

function Comp2() {
    return <Text style={style.biggerText}> Comp 2</Text>
}

export { Comp1, Comp2}
export default Comp