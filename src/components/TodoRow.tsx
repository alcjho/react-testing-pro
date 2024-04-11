import React from 'react';
import { Todo } from '../interfaces/Todo';
type Props = { todo: Todo; setCurrentTodo: any };

export default function TodoRow(props: Props) {
  return (
    <tr className={props.todo.completed ? 'bg-success' : 'bg-light'}>
      <td>
        <a
          href="javascript:void"
          onClick={() => props.setCurrentTodo(props.todo)}
        >
          {props.todo.title}
        </a>
      </td>
      <td>{props.todo.description}</td>
      <td>{props.todo.priority}</td>
      <td>
        <input
          onClick={() => props?.todo?.complete(props.todo.id)}
          style={{
            fontFamily: 'FontAwesome',
            display: 'inline-block',
          }}
          value="&#xf046;"
          type="button"
        />
        <input
          onClick={() => props?.todo?.delete(props.todo.id)}
          style={{
            fontFamily: 'FontAwesome',
            display: 'inline-block',
          }}
          value="&#xf014;"
          type="button"
        />
      </td>
    </tr>
  );
}
