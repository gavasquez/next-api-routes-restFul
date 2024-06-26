import { Todo } from '@prisma/client';

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((reject) => {
    setTimeout(() => {
      reject(true);
    }, seconds * 1000);
  });
}


export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {

  const body = {
    complete: complete,
  }

  const todo = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(resp => resp.json());

  return todo;
}


export const createTodo = async (description: string): Promise<Todo> => {

  const body = {
    description: description,
  }

  const todo = await fetch(`/api/todos`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(resp => resp.json());

  return todo;
}

export const deleteCompleteTodos = async() : Promise<boolean | void> => {

  const todo = await fetch(`/api/todos/`, {
    method: 'DELETE',
  })
  .then(resp => resp.text())
  .catch(console.log);
  return true;
}