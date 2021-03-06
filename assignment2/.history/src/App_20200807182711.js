import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent/ValidationComponent";

import './App.css';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        input: "DefaultValue",
    };
    inputHandler = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    render() {
        return (
            <div className="App" >
                <input onChange={this.inputHandler} defaultValue={this.state.input} />
                <p>input length:{this.state.input.length}</p>
                <ValidationComponent inputLength={this.state.input.length} />
                <CharComponent input={[...this.state.input]} />
            </div>
        );
    }
}

export default App;
