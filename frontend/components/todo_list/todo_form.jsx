import React from 'react';
import { uniqueId } from '../../util/util';

export default class TodoForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {title: "", body: ""};
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleBody(e) {
    this.setState({ body: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    // receive to do
    let todo = { id: uniqueId(), title: this.state.title, body: this.state.body };
    this.props.receiveTodo(todo);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <div className="todo-form">
        <label>Title
        <input id="inputText" type="text" value={this.state.title} onChange={this.handleTitle}/>
        </label>
        <label>Body
          <textarea className="todo-body" onChange={this.handleBody} value={this.state.body}></textarea>
        </label>
        <input className="submit" type="submit" value="Add Todo" onClick={this.handleClick}/>
      </div>
    );

  }


}
