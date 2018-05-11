import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Header from '../Header/Header';
import converter from 'number-to-words';
import Aux from '../../hoc/Aux';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    button: theme.mixins.gutters({
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    }),

});

class Windows extends Component {

    constructor() {
        super();
        this.tabnum = 1;
        this.windownum = 1;
        this.list = [
            { name: "New Tab", text: "#" },
            { name: "New Browser Window", text: "#" },
            { name: "New Message Window", text: "#" },
            { name: "Multiple Tabs", text: "#" },
            { name: "Multiple Windows", text: "#" }
        ]
    }

    clickHanlder = (index) => {
        switch (index) {
            case 0:
                window.open("/tab/" + converter.toWords(this.tabnum++));
                break;
            case 1:
                window.open("/window/" + converter.toWords(this.windownum++), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=400,height=400");
                break;
            case 2:
                var myWindow = window.open("", "Message Window", "width=400,height=300,top=100,left=100");
                myWindow.document.write("<h3>This is sample Message Window to play with selenium</h3>");
                myWindow.document.body.style.background = '#2c3e50';
                myWindow.document.body.style.color = 'white';
                break;
            case 3:
                for (const elem of [0, 1, 2]) {
                    console.log(elem);
                    window.open("/tab/" + converter.toWords(this.tabnum++));
                }
                break;
            case 4:
                for (const elem of [0, 1, 2]) {
                    console.log(elem);
                    window.open("/window/" + converter.toWords(this.windownum++), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=400,height=400");
                }
                break;
            default:
                break;
        }
    }

    render() {
        const { classes } = this.props;
        const windows = this.list.map((obj, index) => {
            return (
                <Paper key={index} className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3">
                        {obj.name}
                    </Typography>
                    <Button
                        id={obj.name.toString().toLowerCase().replace(/\s/g, '')}
                        className={classes.button}
                        onClick={() => this.clickHanlder(index)}
                        variant="raised"
                        fullWidth
                        color="secondary">
                        Click Me
                        </Button>
                    <Typography component="p">
                        {obj.text}
                    </Typography>
                </Paper>);
        });

        return (
            <Aux>
                <Header />
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={4} >
                        {windows}
                    </Grid>
                </Grid>
                <br />
                <br />
            </Aux>
        );
    }

}
export default withStyles(styles)(Windows);