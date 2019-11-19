import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

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

function ListTodo({todos, removeTodo}) {

    const classes = useStyles();

    return (
        <List component="nav" aria-label="secondary mailbox folders">
            {todos.map(todo => (
                <ListItem button 
                    key={todo.id} className={todo.isDone ? classes.selected : classes.noselected}
                    onClick={removeTodo.bind(null, todo.id)}>
                    <ListItemText primary={todo.title} />
                </ListItem>                        
            ))}            
        </List>        
    )
}

export default ListTodo