import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from './style'
import If from './If'

export default (props) => {
    user = props.user || {}
    return (
        <Fragment>
            <If test={user && user.name && user.email}>
                <Text style={style.biggerText}>
                    Usuário Logado:
                </Text>

                <Text>
                    {user.name} - {user.email}
                </Text>
            </If>
        </Fragment>
    )
}