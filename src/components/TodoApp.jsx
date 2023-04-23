export const TodoApp = () => {
    const { todos, handleNewTodo, countTodos, countPendingTodos } = useTodo(initialState);

    return (
        <>
            <h1>Todo App: {countTodos()}, <small>Pendientes: {countPendingTodos()}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
