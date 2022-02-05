import React from "react"
import { View, StyleSheet, SafeAreaView } from 'react-native'

// import First from './components/First'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import MinMax from "./components/MinMax"
// import Randon from "./components/Randon"
// import Title from "./components/Title"
// import Button from "./components/Button"
// import Counter from "./components/Counter"
// import Pai from "./components/Direta/Pai"
// import Pai from "./components/Indireta/Pai"
// import CounterV2 from "./components/counter/CounterV2"
// import Distinguish from "./components/Distinguish"
// import OddEven from "./components/OddEven"
// import Family from "./components/Relation/Family"
// import Member from "./components/Relation/Members"
// import LoggedUser from "./components/LoggedUser"
// import ProductList from "./components/Products/ProductList"
// import ProductList2 from "./components/Products/ProductList2"
// import EntryYourName from "./components/EntryYourName"
// import Square from "./components/layout/Square"
// import FlexBox1 from "./components/layout/FlexBox1"
// import FlexBox3 from "./components/layout/FlexBox3"
import Mega from "./components/mega/Mega"


export default () => (
        <SafeAreaView style={style.App}>

        <Mega />

        

           {/* <CompPadrao />

            <FlexBox3 />

            <FlexBox2 />
            
            <FlexBox1 />

            <EntryYourName />

            <ProductList2 />

            <ProductList />
            
            <LoggedUser user={  {name: "Gui", email: 'gui@gmail.com'}}/>
            <LoggedUser user={  {name: "Sem email"}}/>
            <LoggedUser user={  {email: 'semNome@gmail.com'}}/>
            <LoggedUser user={null}/>
            <LoggedUser user={  {}}/>

            <Family>
                <Member nome="Bia" sobrenome="Arruda">

                </Member>

                <Member nome="Carlos" sobrenome="Arruda">

                </Member>
            </Family>

            <Family>
                <Member nome="Ana" sobrenome="Silva">

                </Member>

                <Member nome="Julia" sobrenome="Silva">

                </Member>
            </Family>

            <OddEven num={3}>

            </OddEven>

            <Distinguish />
  
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
        </SafeAreaView>
)


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }

})