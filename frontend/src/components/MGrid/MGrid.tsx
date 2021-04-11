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
  inv: machine[],
  key?: string
}

export default function MGrid({inv, key}: Props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2} key={key}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {Object.entries(inv).map(e => {
                      const [k, v] = e;
                      return (
                        <Grid key={k} item>
                          <Machine key={k} m={v}/>
                        </Grid>
                      );
                    })}
                </Grid>
            </Grid>
        </Grid>  
    );
}
