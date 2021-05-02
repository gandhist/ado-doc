import { createStore } from "redux";


// initial state loading
initialStateLoading = {
    loading: false
}

// reducer 
const loadingReducer = (state = initialStateLoading, action) => {

    if (action.type === 'SET_LOADING') {
        return { ...state, loading: action.value }
    }
    return state;
}


const store = createStore(loadingReducer)

export default store;