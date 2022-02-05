import React, { Fragment } from 'react'
import { Text, FlatList } from 'react-native'
import style from '../style'
import Products from './Products'
export default (props) => {
    
    const productRender = ({item: p}) => {
        return <Text>
            {p.id}) -{p.name}
        </Text>
    }
    return (


        <Fragment>
            <Text style={style.biggerText}>
                
            </Text>
            <Text>
                <FlatList 
                data={Products}
                keyExtractor={i => i.id}
                renderItem={productRender}
                >

                </FlatList>
            </Text>
        </Fragment>
    )
}