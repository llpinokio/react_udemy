import React, { Component } from 'react';

// class NumberDisplay extends Component {
//     render() {
//         return (
//             <h2>
//                 you pressed {this.props.value} times
//             </h2>
//         );
//     }
// }

const NumberDisplay = (props) => {
    return (
        <h2>
            you pressed {props.value} times
        </h2>
    )
}

export default NumberDisplay;