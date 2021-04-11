import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Machine, { machine } from '../Machine';

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

interface Props {
  invP: Map<string, machine>, // Props
  invS: Map<string, machine> // State
}

export default function MGrid({invP, invS}: Props) {
  const classes = useStyles();

    return (
      <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                  {Array.from(invP).map((kv) => {
                    return (
                      <Grid key={"Grid_"+kv[0]} item>
                        <Machine key={"Machine_"+kv[0]} m={kv[1]}/>
                      </Grid>
                    );
                  })}
              </Grid>
          </Grid>
      </Grid> 
    );
  }

