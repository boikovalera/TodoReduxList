import { connect } from 'react-redux';
import List from './List';
import { toggleTodo, removeTodo } from '../store/todos/actions';

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    toggleTodo,
    removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(List);