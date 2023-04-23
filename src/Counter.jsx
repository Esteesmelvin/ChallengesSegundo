import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementBy } from './counterReducer';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrement = () => {
        dispatch(incrementBy(1));
    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;
