import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from '../filters';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Filters({filter, changeFilter}) {

    const classes = useStyles();
    
    return (     
        <div className={classes.root}>
            <Grid>
                <ButtonGroup fullWidth aria-label="full width outlined button group">                
                    <Button 
                        variant={filter === FILTER_ALL ? 'contained' : null}
                        onClick={() => changeFilter(FILTER_ALL)}>ALL</Button>
                    <Button 
                        variant={filter === FILTER_DONE ? 'contained' : null}
                        onClick={() => changeFilter(FILTER_DONE)}>DONE</Button>
                    <Button 
                        variant={filter === FILTER_NOT_DONE ? 'contained' : null}
                        onClick={() => changeFilter(FILTER_NOT_DONE)}>NO DONE</Button>                    
                </ButtonGroup>
            </Grid>   
        </div>
    )
}

export default Filters

Filters.propTypes = {    
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
}