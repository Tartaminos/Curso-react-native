import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from '../style'
import Products from './Products'



export default (props) => {
    function list() {
        return Products.map(p => {
            return <Text key={p.id}> {p.id}) - {p.name} tem R$ {p.price} </Text>
        })

    }

    return (
        <Fragment>
            <Text style={style.biggerText}>
                Lista de produtos:
            </Text>
              {list()}
        </Fragment>
    )
}