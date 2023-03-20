

export const todoReducer = ( initialState: any = [], action: any ) => {
    switch( action.type ){
        case 'Add Todo':
            return [ ...initialState, action.payload ]
        case 'Remove Todo':
            return initialState.filter( (todo: any) => todo.id !== action.payload)
        case 'Toogle Todo':
            return initialState.map( (todo: any) => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;

    }
}