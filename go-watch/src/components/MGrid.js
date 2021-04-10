import React from 'react';
import Machine from './Machine'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function MGrid(props) {
    const { machines } = props;
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {machines.map((ms) => (
                        <Grid item>
                            <Machine machine={ms}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>  
    );
}

export default MGrid;
