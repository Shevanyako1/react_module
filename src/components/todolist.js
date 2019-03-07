import React, { Component } from 'react';


class TodoList extends Component {
  constructor(props) {
    super(props);
  
    this.state = { 
      value : []
    }
  }

render() {
    return (
      <div>
        <button></button>
        <span>{localStorage.getItem('89802076293')}</span>
      </div>
    )
  }
}

export default TodoList;