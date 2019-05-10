import React, { Component } from 'react';
import '../style.css';

class Task extends Component {
    render() {
        return (
            <li style = {{ width: '100%' }}>
                <p style = {{display: 'inline-block', wordBreak: 'break-all', width: '90%'}}>{this.props.text}</p>
                <span className = 'close' onClick = {this.props.onClick}></span>
            </li>
        )
    }
}

export default Task;