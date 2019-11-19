import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Filters() {

    const classes = useStyles();
    
    return (     
        <div className={classes.root}>
            <Grid>
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                    <Button>ALL</Button>
                    <Button>SELECTED</Button>
                    <Button>NO SELECTED</Button>
                </ButtonGroup>
            </Grid>   
        </div>
    )
}

export default Filters