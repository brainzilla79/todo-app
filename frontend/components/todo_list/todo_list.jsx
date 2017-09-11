import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component  {

  constructor(props) {
    super(props);
    console.log(this.props);
  }


  render() {
    const todoItems = this.props.todos.map((todo)=>(
      <TodoListItem key={todo.id} todo={todo} removeTodo={this.props.removeTodo}/>
    ));
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}
export default TodoList;
