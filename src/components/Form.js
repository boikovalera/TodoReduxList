import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {        
        padding: '10px 20px',
        border: '1px solid grey'
    },
    title: {
        textAlign: 'center'
    },
    errortext: {
        color: 'red',
        fontSize: '12px',
    },
    button: {        
        paddingTop: '10px',        
    }
}));

function FormTodo({ addTodo }) {
    
    const classes = useStyles();

    const initialValues = {        
        name: ''
    }

    function onFormSubmit(values, { resetForm }){        
        addTodo(values);
        resetForm();
    }

    function validateName(value) {
        return !value ? 'Name todo is required' : false;
    }
        
    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3" className={classes.title}>
                Add Todo
            </Typography>
            <Formik 
                initialValues={initialValues}
                onSubmit={onFormSubmit}>
                <Form autoComplete="off">                    
                    <div> 
                        <Field
                            name="name"
                            label="Name todo"                            
                            fullWidth
                            as={TextField}
                            validate={validateName}
                        />
                        <ErrorMessage name="name" component="div" className={classes.errortext}></ErrorMessage>                
                    </div>    
                    <div className={classes.button}>
                        <Button type="submit" variant="contained" color="default" >
                            Add todo
                        </Button>
                    </div>
                </Form>
            </Formik>
        </Paper>
    )
}

export default FormTodo