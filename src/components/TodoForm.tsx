import React, { useState } from 'react';
import {
  Button,
  FormLabel,
  FormControl,
  FormGroup,
  Form,
} from 'react-bootstrap';
import { Todo } from '../interfaces/Todo';
type Props = { todo: Todo; setCurrentTodo: any };
export default function TodoForm(props: Props) {
  const [todo, setTodo] = useState(props.todo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setTodo({ ...todo, [name]: value });
  };
  return (
    <Form>
      <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
        <FormLabel>Title</FormLabel>
        <FormControl
          type="email"
          value={props.title}
          placeholder="short title about your todo"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>Description of your todo</FormLabel>
        <FormControl
          as="textarea"
          rows={3}
          value={props.description}
          onChange={handleChange}
        />
      </FormGroup>
      <Button
        className="btn btn-primary m-2"
        onClick={() => props.todo.edit(props)}
      >
        Update todo
      </Button>
      <Button
        className="btn btn-danger m-2"
        onClick={() => props.setCurrentTodo()}
      >
        Cancel
      </Button>
    </Form>
  );
}
