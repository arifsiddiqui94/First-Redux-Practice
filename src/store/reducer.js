const initialState = {
    counter: 0,
    results: [],
    name: 'Arif'
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREASE') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'INCREASE_FIVE') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'DECREASE_FIVE') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: 'Arif Siddiqui'
        }
    }
    if (action.type === 'STORE_RESULT') {
        return {
            ...state,
            results: state.results.concat(state.counter)
        }
    }
    return state;
};

export default reducer;