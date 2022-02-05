import React, { Fragment, useState, } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import style from '../style'


export default (props) => {
    const [num, setNum] = useState(0)


    function showValue(number) {
        setNum(number)
    }
    
    return (
        <Fragment>
            <Text style={style.biggerText}>
                {num}
            </Text>
            <Filho min={1}
            max={60}
            funcao={showValue} 
            />
        </Fragment>

    )
}