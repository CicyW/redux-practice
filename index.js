const redux = require("redux");

function rootReducer(state = {}, action) {
    return {
        todos: addtodo(state.todos, action),
        filter:filter(state.todos,action)
    }
}
function addtodo(state = [], action) {
    switch (action.type) {
        case 'ADD_ONE_TODO':
            return state.concat(action.todo);
        default:
            return state
    }
}
function filter(state = [], action) {
    switch (action.type) {
        case 'SHOW_ALl':
            return state;
        case 'SHOW_COMPLETED':
            return state.filter(todo => {
                return todo.completed;
            });
        default:
            return state;
    }
}
function main() {
    let store = redux.createStore(rootReducer);

    store.subscribe(() => {
        console.log(store.getState())
    });

    store.dispatch({
        type: "ADD_ONE_TODO",
        todo: {
            text: "wen",
            completed: false
        }
    });

    store.dispatch({
        type: "ADD_ONE_TODO",
        todo: {
            text: "zhou",
            completed: true
        }
    });

    store.dispatch({
        type: "SHOW_COMPLETED"
    });
}
main();