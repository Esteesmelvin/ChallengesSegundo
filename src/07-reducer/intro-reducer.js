const initialState = [{
    id: 1,
    todo: 'Hacer los Challenges',
    done: false
}];

const todoReduccer = (state = initialState, action = {})=>{
    if (action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Avances del proyecto',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReduccer(todos, addTodoAction)

console.log(todos);