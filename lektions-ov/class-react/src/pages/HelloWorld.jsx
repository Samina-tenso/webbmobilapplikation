import React from 'react'

class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: "red", size: 16 }
        this.updateColor = this.updateColor.bind(this)
    }
    updateColor() {
        this.setState({ color: "blue" })
    }
    render() {

        const style = { color: this.state.color }
        return (< p onClick={this.updateColor} style={style} > hello World</p>
        )

    }
}


export default Hello