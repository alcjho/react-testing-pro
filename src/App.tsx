import { useState } from 'react';
import Todos from './components/Todos';
import { Todo } from './interfaces/Todo';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const todos: Todo[] = [
  {
    id: uuidv4(),
    title: 'interview 1',
    description: 'fullstack developer : nodejs, react, angular',
    completed: false,
    priority: 3,
  },
  {
    id: uuidv4(),
    title: 'interview 2',
    description: 'backend developer : nodejs, nestjs, express',
    completed: false,
    priority: 3,
  },
  {
    id: uuidv4(),
    title: 'interview 3',
    description: 'front end developer : Nextjs, react, html5, CSS',
    completed: false,
    priority: 3,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>Todo List - e2e</h1>
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
