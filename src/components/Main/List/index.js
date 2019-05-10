import React, { Component } from 'react';
import Task from './Task';
import './style.css';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            list: [ {id: 1, text: 'Первая задача'} ]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange (e) {
        this.setState({ 
            input: e.target.value
         })
    }

    handleDelTask = (id) => {
        let newArray = this.state.list;
        newArray = newArray.filter(msg => msg.id !== id);
        this.setState({
            list: newArray
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.state.input.trim()) {
            let newArray = this.state.list;
            newArray.push({ 
                id: newArray.length > 0 ? newArray[newArray.length - 1].id + 1 : 1,
                text: this.state.input
             });
             this.setState({
                 list: newArray
             })
        }
    }
    render() { 
        const { list } = this.state;
        return ( 
            <section className = 'section'>
                <form className = 'addTask' onSubmit = {this.handleSubmit} >
                    <h3>Добавить задачу</h3>
                    <input type = 'text' style = {{width: '80%', marginRight: '10px'}} onChange = {this.handleChange} />
                    <input type = 'submit' value = 'Добавить' />
                </form>
                <div className = 'list'>
                    <ul>
                        {list.map( el => {
                            return (
                                <Task key = {el.id} text = {el.text} onClick = {() => this.handleDelTask(el.id)} />
                            )
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default List;