'use client'
import { Todo } from '@prisma/client';
import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { startTransition, useOptimistic } from "react";


interface Props {
  todo: Todo,
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo|void>,
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {

  const [ todoOpimistic , toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({...state, complete: newCompleteValue}) 
  );

  const onToggleTodo = async() => {
    try {
      startTransition(() =>toggleTodoOptimistic(!todo.complete) );
      await toggleTodo(todoOpimistic.id, !todoOpimistic.complete);
    } catch (error) {
      startTransition(() =>toggleTodoOptimistic(!todo.complete) );
    }
  }


  return (
    <div className={ todoOpimistic.complete ?  styles.todoDone :  styles.todoPending }>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div 
        //onClick={() => toggleTodo(todoOpimistic.id, !todoOpimistic.complete)}
        onClick={() => onToggleTodo()}
        className={`
          flex pa-2 rounded-md cursor-pointer
          hover:bg-opacity-60
          ${ todoOpimistic.complete ? 'bg-blue-200' : 'bg-red-200'}
          `}>
          { todoOpimistic.complete 
            ? <IoCheckboxOutline  size={30}/>
            : <IoSquareOutline size={30} />
          }
          </div>
          <div  className="text-center sm:text-left">
            { todoOpimistic.description }
          </div>
      </div>
    </div>
  )
}