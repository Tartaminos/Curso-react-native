import React, { Fragment, useState } from 'react'
import { Text } from 'react-native'
import style from '../style'
import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'


export default (props) => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)


    return (
        <Fragment>
            <Text style={style.biggerText}>
                Contador
            </Text>
            <CounterDisplay num={num} />
            <CounterButtons inc={inc} dec={dec} />
       </Fragment>
    )
}