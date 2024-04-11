export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 1 | 2 | 3;
  delete?: (id: string) => void;
  complete?: (id: string) => void;
  edit?: (data: Todo) => void;
}
