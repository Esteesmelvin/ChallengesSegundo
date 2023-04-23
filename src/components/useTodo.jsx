export const useTodo = (initialState = []) => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch(action)
    }

    const countTodos = () => {
        return todos.length
    }

    const countPendingTodos = () => {
        return todos.filter(todo => !todo.completed).length
    }

    return {
        todos,
        handleNewTodo,
        countTodos,
        countPendingTodos
    }
}
