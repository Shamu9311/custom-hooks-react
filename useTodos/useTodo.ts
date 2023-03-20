import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer"

const initialState: any = []
const init = () =>{
    return JSON.parse( localStorage.getItem('todos')! ) || [];
}

export const useTodo = () => {
    const [ todos, dispatch] = useReducer( todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = ( todo: any) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id: any ) => {
        const action = {
            type: 'Remove Todo',
            payload: id
        }
        dispatch( action );
    }

    const handleToggleTodo = ( id: any ) => {
        const action = {
            type: 'Toogle Todo',
            payload: id
        }
        dispatch( action );
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( (todo: any ) => !todo.done).length 
    }
}
