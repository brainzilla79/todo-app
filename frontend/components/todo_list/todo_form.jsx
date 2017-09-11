import React from 'react';
import { uniqueId } from '../../util/util';

export default class TodoForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {inputVal: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    // receive to do
    let todo = { id: uniqueId(), title: this.state.inputVal };
    this.props.receiveTodo(todo);
    this.setState({ inputVal: "" });
  }

  render() {
    return (
      <div>
        <input id="inputText" type="text" value={this.state.inputVal} onChange={this.handleInput}/>
        <input type="submit" onClick={this.handleClick}/>
      </div>
    );

  }


}
