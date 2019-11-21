export const TODOS_ADD_TODO = 'TODOS_ADD_TODO';
export const addTodo = (todo)=>({
    type: TODOS_ADD_TODO,
    payload: todo
});