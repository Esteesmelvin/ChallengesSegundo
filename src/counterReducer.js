// counterReducer.js

const initialState = {
    count: 0,
};

const DECREMENT = 'DECREMENT';
const INCREMENT_BY = 'INCREMENT_BY';

export const decrement = () => {
    return (dispatch) => {
        dispatch({ type: DECREMENT });
    };
};

export const incrementBy = (value) => {
    return (dispatch) => {
        dispatch({ type: INCREMENT_BY, payload: { value } });
    };
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case INCREMENT_BY:
            return {
                ...state,
                count: state.count + action.payload.value,
            };
        default:
            return state;
    }
};

export default counterReducer;
