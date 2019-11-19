import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Filters() {
    return (
        <Grid item xs={12} md={6}>
            <ButtonGroup fullWidth aria-label="full width outlined button group">
                <Button>ALL</Button>
                <Button>SELECTED</Button>
                <Button>NO SELECTED</Button>
            </ButtonGroup>
        </Grid>   
    )
}

export default Filters