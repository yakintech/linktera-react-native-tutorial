
export const todoReducer = (state = [], action = {}) => {
    if (action.type == "ADD_TODO") {
        return [...state, action.payload];
    }
    else if (action.type == "REMOVE_TODO") {
        let todos = state.filter(q => q.id != action.payload.id);
        return todos;
    }
    else if (action.type == "REMOVE_ALL_TODO") {
        return [];
    }
    else if (action.type == "GET_ALL_TODOS") {
        return state;
    }
    else {
        return state;
    }
}


//Uygulama açıldığı an store a (REDUX) bazı dataları çekip koymak istiyorum...
