import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import './Counter.css';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // addOneHandler = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     });
    // }

    // subtractOneHandler = () => {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     });
    // }

    // addFiveHandler = () => {
    //     this.setState({
    //         counter: this.state.counter + 5
    //     });
    // }

    // subtractFiveHandler = () => {
    //     this.setState({
    //         counter: this.state.counter - 5
    //     });
    // }

    render() {
        return (
            <div>
                <CounterOutput counter={this.props.ctr} name={this.props.name} changeName={this.props.changeName} />
                <CounterControl
                    addOne={this.props.addOne}
                    subtractOne={this.props.subtractOne}
                    addFive={this.props.addFive}
                    subtractFive={this.props.subtractFive}
                />
                <hr />
                <button onClick={this.props.storeResult}>Store Result</button>
                <ul className="storeList">
                    {this.props.result.map(strResult => (
                        <li title="delete" key={strResult.id} onClick={() => this.props.deleteResults(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        name: state.name,
        result: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addOne: () => dispatch({type: 'INCREMENT'}),
        subtractOne: () => dispatch({type: 'DECREASE'}),
        addFive: () => dispatch({type: 'INCREASE_FIVE', value: 5}),
        subtractFive: () => dispatch({type: 'DECREASE_FIVE', value: 5}),
        changeName: () => dispatch({type: 'CHANGE_NAME'}),
        storeResult: () => dispatch({type: 'STORE_RESULT'}),
        deleteResults: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);