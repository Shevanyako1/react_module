import React, { Component } from 'react';
import axios from 'axios'
import style from './index.css';
  
export default class Registry extends Component {

    constructor(props) {
        super(props);
        this.state = { name:[],
                       email:[],
                       password:[] };

      this.handleChange = this.handleChange.bind(this);
      this.add= this.add.bind(this);
    }
    
    handleChange(event) {
        event.preventDefault();
        this.setState({name: [event.target.value],
                       email: [event.target.value],
                       password: [event.target.value]});
    }

    add(event) {
        event.preventDefault();
        console.log(this.state.name,this.state.email,this.state.password) ;

        const name =  this.state.name

        const email = this.state.email

        const password = this.state.password
        
         axios.post('https://my-json-server.typicode.com/typicode/demo/posts', { name , email , password })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });  
    };

    render() {   
    
		return (
			<div className="auth">
                <form className="authForm">
                    <input type="text"
                            placeholder="name"
                            onChange={this.handleChange}
                    />
                    <input type="text"
                            placeholder="email"
                            onChange={this.handleChange}
                    />
                    <input type="password"
                            placeholder="password"
                            onChange={this.handleChange}
                    />
                    <button onClick={this.add} className="authForm-button">Зарегистрироваться</button>   
                </form>
            </div>
		);
	}
}