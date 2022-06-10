export const removeToDoAction = (data) => {
    return {
        type: 'REMOVE_TODO',
        payload: data
    }
}

export const addToDoAction = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    }
}


export const addDataToService = (data) => {

    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => {
                dispatch(addToDoAction(response))
            })
    }
}
