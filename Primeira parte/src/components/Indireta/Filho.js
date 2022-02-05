import React from 'react'
import { Button, Text } from 'react-native'

export default (props) => {

    function numberGenerate(min, max){
        const fact = min - max + 1
        return parseInt(Math.random() * fact) + min
    }

    return (
        
        <Button
        title='Execute'
        onPress={function(){
           const n = numberGenerate(props.min, props.max)
           props.funcao(n)
        }} 
        />
    )
}