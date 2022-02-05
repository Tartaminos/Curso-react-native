{/* desafio do número aleatorio

    passar dois números para o componente

    gerar de forma aleatoria o número gerado dentro do range do valor minimo e maximo

    mostrar na tela do app

*/}

import React from "react"
import { Text } from 'react-native'
import style from "./style"

export default ({min, max}) => (
    <Text style={style.biggerText}>
        O número aleatorio entre {min} e {max} é: {randomizeInRange(min, max)} 
    </Text>
)

function randomizeInRange(min, max) {
    return parseInt(Math.random() * (max - min)) + min
}