export const ALL_TODOS = 'ALL_TODOS';
export const allTodos = (id)=>({
    type: TODOS_ALL_LIST,
    payload: id
});

export const SELECT_TODO = 'SELECT_TODO';
export const selectTodos = (id)=>({
    type: SELECT_TODO,
    payload: id
});

export const NO_SELECT_TODO = 'NO_SELECT_TODO';
export const noSelectTodos = (id)=>({
    type: NO_SELECT_TODO,
    payload: id
});