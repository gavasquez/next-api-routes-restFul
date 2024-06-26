'use client'
import { Todo } from '@prisma/client';
import { TodoItem } from './TodoItem';
import * as todosApi from '../helpers/todos';
import { updateTodo } from '../helpers/todos';
import { useRouter } from 'next/navigation';



interface Props {
  todos?: Todo[], // interface generada por prisma
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router= useRouter();

  const toggleTodo =  async (id: string, complete: boolean)=> {
    const updateTodo = await todosApi.updateTodo(id, complete);
    console.log({updateTodo});
    router.refresh();
  }
  
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