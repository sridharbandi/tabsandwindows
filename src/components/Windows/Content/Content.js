import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Header from '../../Header/Header';
import Grid from 'material-ui/Grid';
import pink from 'material-ui/colors/red';
import Aux from '../../../hoc/Aux';


const styles = theme => ({
    textField: {
        color: pink[500],
    }
});

const content = (props) => {

    let header = null;
    if(!props.tabs){
        header = <Header />;
    }

    return (
        <Aux>
            {header}
            <Grid container justify='center' spacing={0}>
                <Grid item xs={10} sm={4} >
                    <br />
                    <br />
                    <Typography
                        id='header-title'
                        variant="headline"
                        className={props.classes.textField}
                        component="h3">
                        This is {props.name} - {props.id}
                    </Typography>
                    <TextField
                        InputProps={{
                            className: props.classes.textField
                        }}
                        id="text-id"
                        label="Text"
                        type="text"
                        margin="normal"
                        required
                        fullWidth
                        error
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                </Grid>
            </Grid>
        </Aux>
    );
}

export default (withStyles(styles)(content));
