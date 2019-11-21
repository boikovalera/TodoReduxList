import { TODOS_ADD_TODO } from './actions'
const initialState = 
    {
        id: Date.now(),
        title: '',
        isDone: false
    }

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case TODOS_ADD_TODO:
            return [...state, payload] 
    }
    return state
}