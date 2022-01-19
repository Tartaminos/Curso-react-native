import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default (props) => {
    return (
        <Fragment>
            <View style={style.FlexV1} >

                <Square color="#ff801a" />

                <Square color="#50d1f6" />

                <Square color="#dd22c1" />

                <Square color="#8312ed" />

                <Square color="#36c9a7" />

            </View>
        </Fragment>
    )
}

const style = StyleSheet.create({
    FlexV1:{
       flex: 1,
       justifyContent: "flex-start",
       backgroundColor: "#000",
    }

})