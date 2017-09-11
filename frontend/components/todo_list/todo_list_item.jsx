import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.todo.done };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleDone(e) {
    e.preventDefault();
    this.setState({done: !this.state.done });
  }

  render() {

    return (
      <div>
        <li>{this.props.todo.title}</li>
        <input type="submit" value="delete" onClick={this.handleDelete}/>
        <input type="submit" value={this.state.done ? "Undo" : "Done"}  onClick={this.handleDone}/>
      </div>
    );
  }
}
