import React, { Component } from 'react';
import ValidationComponent from "./validationComponent/validationComponent";

import './App.css';
import ValidationComponent from './validationComponent/validationComponent';

class App extends Component {
    state = {
        input: "",
    };
    inputHandler = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    render() {
        return (
            <div className="App" >
                <input onChange={this.inputHandler} />
                <p>length input:{this.state.input.length}</p>
                <ValidationComponent inputLength={this.state.input.length} />
            </div>
        );
    }
}

export default App;
