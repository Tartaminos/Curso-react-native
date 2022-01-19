import React, { Fragment, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import style from './style'

export default (props) => {
    const [name, setName] = useState('Teste')
    return (
        <Fragment>
            <View>
                <Text>
                    {name}
                </Text>
                <TextInput  
                    placeholder='Digite seu nome'
                    value={name}
                    onChangeText={name => setName(name)}
                />
            </View>
        </Fragment>
    )
}