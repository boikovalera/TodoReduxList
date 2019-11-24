import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',    
        backgroundColor: theme.palette.background.paper,
    },
    selected: {
        background: 'grey'
    },
    noselected: {
        background: 'white'
    }
}));

function ListTodo({todos, toggleTodo, removeTodo}) {

    const classes = useStyles();

    return (
        <List component="nav" aria-label="secondary mailbox folders">
            {todos.map(todo => (
                <ListItem button className={todo.isDone ? classes.selected : classes.noselected}
                    key={todo.id} 
                    onClick={toggleTodo.bind(null, todo.id)}
                >
                <ListItemText primary={todo.title} />
                <Button type="submit" variant="contained" color="default" onClick={removeTodo.bind(null, todo.id)}>
                    Del
                </Button>
                </ListItem>                        
            ))}            
        </List>        
    )
}

export default ListTodo

ListTodo.propTypes = {
    todos: PropTypes.array.isRequired, 
    toggleTodo: PropTypes.func.isRequired, 
    removeTodo: PropTypes.func.isRequired
}