import React from "react"
import { View, StyleSheet } from 'react-native'

// import First from './components/First'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import MinMax from "./components/MinMax"
// import Randon from "./components/Randon"
//import Title from "./components/Title"
//import Button from "./components/Button"
//import Counter from "./components/Counter"
//import Pai from "./components/Direta/Pai"
//import Pai from "./components/Indireta/Pai"
//import CounterV2 from "./components/counter/CounterV2"
import Distinguish from "./components/Distinguish"

export default () => (
        <View style={style.App}>

            <Distinguish />

           {/* <CompPadrao />
  
            <CounterV2 />
  
            <Pai></Pai>

            <Counter initial={100} />

            <Button />  

            <Title first="Cadastro"
                second="Tela de Cadastro do produto" />

            <Randon min={1} max={100} />

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
        padding: 20
    }

})