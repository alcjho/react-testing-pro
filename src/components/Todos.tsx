import React, { useState } from 'react';
import { Todo } from '../interfaces/Todo';
import TodoRow from '../components/TodoRow';
import TodoForm from '../components/TodoForm';

type Props = { todos: Todo[] };

export default function Todos(props: Props) {
  const [todos, setTodos] = useState(props.todos);
  const [currentTodo, setCurrentTodo] = useState<any>();

  const deleteTodo = (id: string) => {
    const newTodoList = [...todos.filter((td) => td.id !== id)];
    setTodos(newTodoList);
  };

  const completeTodo = (id: string) => {
    const t = [...todos.filter((td) => td.id === id)][0];
    t.completed = !t.completed;
    const newTodos = new Set([...todos, t]);

    setTodos(Array.from(newTodos));
  };

  const editTodo = (data: Todo) => {
    const t = [...todos.filter((td) => td.id === data.id)][0];
    const newTodos = new Set([...todos, t]);
    console.log('editing todo');
    setTodos(Array.from(newTodos));
    console.log('clear current todo todo');
    setCurrentTodo(undefined);
  };

  return (
    <div>
      <div style={{ display: !currentTodo ? '' : 'none' }}>
        {todos.map((todo) => {
          todo.delete = deleteTodo;
          todo.complete = completeTodo;
          todo.edit = editTodo;
          return (
            <div>
              <table className="table">
                <thead>
                  <th>title</th>
                  <th>description</th>
                  <th>priority</th>
                  <th>actions</th>
                </thead>
                <tbody>
                  <TodoRow todo={todo} setCurrentTodo={setCurrentTodo} />
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      <div className="todo-form" style={{ display: currentTodo ? '' : 'none' }}>
        <TodoForm todo={currentTodo} setCurrentTodo={setCurrentTodo} />
      </div>
    </div>
  );
}
