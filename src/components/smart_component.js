import React, { Component } from 'react';
import DumbComponent from './dumb_component';

export default class SmartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {list: ['First', 'Second', 'Third']}
  }

  addItem() {
    this.setState({list: this.state.list.concat('another')});
  }

  render() {
    const createListItem = (title) => {
      return <DumbComponent title={title}/>
    };

    return(
      <div>
        { this.state.list.map(createListItem) }
        <button onClick={() => {this.addItem()}}>Add</button>
      </div>
    );
  }
}
