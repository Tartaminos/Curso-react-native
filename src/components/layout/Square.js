import React, { Fragment } from 'react'
import { View } from 'react-native'

export default (props) => {
    const side = 50
    return (
        <Fragment>
            <View style={{
                height: side,
                width: side,
                backgroundColor: props.color || "#000"
            }} >

            </View>
        </Fragment>
    )
}
