import { ResponseGetTodo, RequestPostCreateTodo } from '@/api/todo/dto';

export const getTodo = async () => {
  return fetch('https://localhost:3000/todos')
    .then((response) => response.json())
    .then((json) => new ResponseGetTodo(json));
};

export const postCreateTodo = async (text: RequestPostCreateTodo) => {
  return fetch('https://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
    .then((response) => response.json())
    .then((json) => json);
};
