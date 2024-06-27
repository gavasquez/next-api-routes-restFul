'use client';

import { FormEvent, useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
//import * as todosApi from '../helpers/todos';
import { useRouter } from 'next/navigation';
import { addTodo, deleteCompleted } from '../actions/todo-actions';


export const NewTodo = () => { 

  const route = useRouter();
  const [description, setDescription] = useState('');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if(description.trim().length < 0) return;
    //await todosApi.createTodo(description);
    await addTodo(description);
    setDescription('');
    //route.refresh();
  }

  //const onDeleteCompleted = async () => {
    //await deleteCompleted();
    //await todosApi.deleteCompleteTodos();
    //route.refresh();
  //}

  return (
    <form onSubmit={onSubmit} className='flex w-full'>
      <input type="text"
        value={description}
        onChange={(evento) => setDescription( evento.target.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={ () => deleteCompleted() }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        <span>Borrar completados</span>
      </button>


    </form>
  )
}