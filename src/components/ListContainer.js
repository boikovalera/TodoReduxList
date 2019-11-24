import { connect } from 'react-redux';
import List from './List';
import { toggleTodo, removeTodo } from '../store/todos/actions';
import { FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from '../filters';
import PropTypes from 'prop-types'

function filter(todos, currentFilter) {    
    switch (currentFilter) {
        case FILTER_DONE:
            return todos.filter(todo => todo.isDone);
        case FILTER_NOT_DONE:
            return todos.filter(todo => !todo.isDone);
        case FILTER_ALL:
        default:
            return todos;
    }
}

function mapStateToProps(state){
    return {
        todos: filter(state.todos, state.filter)
    }
}

const mapDispatchToProps = {
    toggleTodo,
    removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

filter.propTypes = {
    todos: PropTypes.array.isRequired, 
    currentFilter: PropTypes.func.isRequired
}