import React, { Component } from 'react';
import './CounterOutput.css';

class CounterOutput extends Component {
    render() {
        return (
            <div className="CounterContainer">
                Current Counter: {this.props.counter}
                <p>Name: {this.props.name}</p>
                <button onClick={this.props.changeName}>Change Name</button>
            </div>
        );
    }
}

export default CounterOutput;