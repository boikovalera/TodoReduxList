import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListTodo({todos, removeTodo}) {
    return (
        <List component="nav" aria-label="secondary mailbox folders">
            {todos.map(todo => (
                <ListItem button key={todo.id} onClick={removeTodo.bind(null, todo.id)}>
                    <ListItemText primary={todo.title} />
                </ListItem>                        
            ))}            
        </List>        
    )
}

export default ListTodo