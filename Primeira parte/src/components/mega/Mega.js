import React, { Component, Fragment } from "react";
import { Button, Text, TextInput, View } from "react-native";
import style from '../style'
import Number from "./Number";

export default class Mega extends Component{

    state = {
        quantidade: this.props.quantidadeNumeros,
        numeros: []
    }

    alteraQuantidade = (novaQuantidade) => {
        this.setState({ quantidade: +novaQuantidade })
    }

    // seguindo o algoritimo do curso baseado em programação funcional
    gerarNumeroNaoContido = nums => {
        const novo  = parseInt(Math.random() * 60) + 1
        return nums.includes(novo)? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => { 
        const numeros = Array(this.state.quantidade)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [] )
            .sort((a, b) => a - b) 
        this.setState({ numeros })
    }
        
    showNumbers = () => {
        const nums = this.state.numeros

        return nums.map(num => {
            return <Number num={num} />
        })
    }

    render() {
        return (
            <Fragment>
                <Text style={style.biggerText} >
                    Gerador Mega-sena
                </Text>

                <TextInput 
                    keyboardType="numeric"
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade de números:" 
                    value={this.state.novaQuantidade}
                    onChangeText={this.alteraQuantidade}
                >

                </TextInput>

                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                >

                </Button>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>

                    {this.showNumbers()}
                </View>
            </Fragment>

        )
    }
} 