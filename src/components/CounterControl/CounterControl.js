import React, { Component } from 'react';
import './CounterControl.css';

class CounterControl extends Component {
    render () {
        return (
            <div className="CounterButtonContainer">
                <button onClick={this.props.addOne}>Add 1</button>
                <button onClick={this.props.subtractOne}>Subtract 1</button>
                <button onClick={this.props.addFive}>Add 5</button>
                <button onClick={this.props.subtractFive}>Subtract 5</button>
            </div>
        );
    }
}

export default CounterControl;