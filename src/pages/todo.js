import React, { Component } from 'react';
import style from './index.css';
   
export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { title:[],
                        key:[] };

      this.handleChange = this.handleChange.bind(this);
      this.add= this.add.bind(this);
    }
    
    handleChange(event) {
        event.preventDefault();
        this.setState({title: [event.target.value],
                       key: [Math.round(Math.random()*10e10)]});
    }

    add(event) {
        event.preventDefault();
        console.log(this.state.title,this.state.key)  

    const key = [
         this.state.key];

    const title = [
        this.state.title];
    
    localStorage.setItem(key, title);

    console.log(localStorage.getItem('16748599889'))
    };

    render() {   
    
		return (
			<div className="todolist__box">
                <form className="todoForm">
                    <input type="text"
                            placeholder="DO!"
                            onChange={this.handleChange}
                            className='todoEnter'
                             />
                    <button onClick={this.add} className={"todoForm-btn"}>Добавить</button>
                    
                </form>
            </div>
		);
	}
}
