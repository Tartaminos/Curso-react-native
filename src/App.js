import React from "react"
import { View, StyleSheet } from 'react-native'

import First from './components/First'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import MinMax from "./components/MinMax"
import Randon from "./components/Randon"

export default () => (
        <View style={style.App}>

            <Randon min={1} max={100} />
            

           {/* <CompPadrao />

            <Comp1 />

            <Comp2 />

            <MinMax min={3} max={20} />


           <First />*/}
        </View>
)


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flexShrink: 1 
    }

})