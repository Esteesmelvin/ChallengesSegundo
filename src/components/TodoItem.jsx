import { useState } from 'react';

export const TodoItem = ({todo, onDelete}) =>{
    const [completed, setCompleted] = useState(false);

    const handleDelete = () => {
        onDelete(todo.id);
    }

    const handleComplete = () => {
        setCompleted(!completed);
    }

    return (
        <li className = {`list-group-item d-flex justify-content-between ${completed ? 'completed' : ''}`}>
            <span className = 'align-self-center' onClick={handleComplete}>{todo.description}</span>
            <button className = 'btn btn-danger' onClick={handleDelete}>Borrar</button>
        </li>
    )
}
