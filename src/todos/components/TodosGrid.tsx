'use client'
import { Todo } from '@prisma/client';
import { TodoItem } from './TodoItem';
//import * as todosApi from '../helpers/todos';
import { updateTodo } from '../helpers/todos';
import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';



interface Props {
  todos?: Todo[], // interface generada por prisma
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router= useRouter();

  return (
    <div className="grid grid-cols-1 sm:grip-cols-3 gap-3">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))
      }
    </div>
  )
}