import React, { Fragment } from 'react'
import Filho from './Filho'


export default (props) => {
    let x = 13
    let y = 100

    return (
        <Fragment>
            <Filho a = {x} b = {y}>
               
            </Filho>
            <Filho  a = {x + 100} b = {y + 200}>
                
            </Filho>
        </Fragment>
    )
}