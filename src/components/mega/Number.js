import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import generalStyle from '../style'

export default ({num}) => {
    return (
        <Fragment>
            <View style={style.Conteiner}> 
                <Text style={generalStyle.biggerText, style.Num}>
                    {num}
                </Text>
            </View>
        </Fragment>
    )
}

const style = StyleSheet.create({
    Conteiner: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
    },

    Num: {
        color: '#FFF',
        textAlign: 'center',
    }
})