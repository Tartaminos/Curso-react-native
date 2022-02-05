import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default (props) => {
    return (
        <Fragment>
            <View style={style.FlexV3} >

                <Square color="#ff801a" side={20} />

                <Square color="#50d1f6" side={30}/>

                <Square color="#dd22c1" side={40}/>

                <Square color="#8312ed" side={50}/>

                <Square color="#36c9a7" side={60}/>

            </View>
        </Fragment>
    )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 350,
        backgroundColor: "#000",

    }

})