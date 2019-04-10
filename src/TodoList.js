import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: [],
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(e) {
        e.preventDefault();
        if (this._inputElement.value !=='') {
            let newItem = {
                key: Date.now(),
                text: this._inputElement.value,
            };
            this.setState((prevState) => {
                console.log('Setting state');
                return {
                    item: prevState.item.concat(newItem),
                };
            });

        }
        this._inputElement.value ='';
        console.log('Finished addItem');
    }

    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder='Enter the todo task' />

                        <button type='submit'>Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.item}/>
            </div>

        );
    }
}

export default TodoList;

/*

*/