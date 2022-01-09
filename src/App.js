import React from "react"
import { View, StyleSheet } from 'react-native'

import First from './components/First'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'

export default () => (
        <View style={style.App}>

            <CompPadrao />

            <Comp1 />

            <Comp2 />

            <First />
        </View>
)


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})