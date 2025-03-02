import { BaseDto } from '@/api/dto';
import { ResponseGetTodo, RequestPostCreateTodo, RequestPostCompletedTodo as RequestPostCompletedTodo, ResponsePostCompletedTodo } from '@/api/todo/dto';

export const getTodos = async () => {
  return fetch('http://localhost:3000/todos')
    .then((response) => response.json())
    .then((json) => new BaseDto<ResponseGetTodo[]>(json).data);
};

export const postCreateTodo = async ({ title }: RequestPostCreateTodo) => {
  return fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
    .then((response) => response.json())
    .then((json) => new BaseDto(json).data);
};


export const postCompletedTodo = async ({ id }: RequestPostCompletedTodo) => {
  return fetch(`http://localhost:3000/todos/completed/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => new BaseDto<ResponsePostCompletedTodo>(json).data);
};
