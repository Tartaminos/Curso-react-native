import React, { Fragment } from "react"
import { Button } from "react-native"

export default (props) => {

    function execute() {
        console.warn("EXEC! 1")
    }

    return (
        <Fragment>
            <Button title="Executar!"
            onPress={execute}
            />

            <Button title="Executar! 2"
            onPress={function(){
                console.warn("EXEC 2")
            }}
            />

            <Button title="Executar! 3"
                onPress={() => {console.warn("EXEC 3")}}
            />
        </Fragment>
    )
}