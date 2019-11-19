import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function FormTodo({onSubmit}) {
    
    const initialValues = {        
        name: ''
    }

    function onFormSubmit(values, { resetForm }){
        onSubmit(values);
        resetForm();
    }

    function validateName(value) {
        return !value ? 'Name todo is required' : false;
    }
        
    return (
        <Paper>
            <Typography variant="h5" component="h3">
                Add Todo
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={onFormSubmit}
            >
                <Form autoComplete="off">                    
                    <div>
                        <Field
                            name="name"
                            label="Name todo"
                            multiline
                            fullWidth
                            as={TextField}
                            validate={validateName}
                        />
                        <ErrorMessage name="name" component="div"></ErrorMessage>
                    </div>
                    <div style={{paddingTop: '10px'}}>
                        <Button type="submit" variant="contained" color="primary">
                            Primary
                        </Button>
                    </div>
                </Form>

            </Formik>
        </Paper>
    )
}

export default FormTodo