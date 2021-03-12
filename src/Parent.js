import React from 'react'

import { Button } from './Button'

class Parent extends React.Component {
    constructor(props) {
        this.state = {counter: 0}
    }

    const setCounter = (setToValue) => {
        this.setState({
            counter: setToValue
        })
    }

    const incrementCounter = () => {
        this.setState({
            counter: counter + 1
        })
    }



    render() {
        return (
            <div>
                <Button fn={incrementCounter} />
                {this.state.counter}
            </div>
        )
    }
}