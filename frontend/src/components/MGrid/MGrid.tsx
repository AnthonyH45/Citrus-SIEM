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
  [inv: string]: machine;
}

export default function MGrid(props: Props) {
  const classes = useStyles();

  if (!!!props.inv) return <h2>No machines added yet!</h2>;

  return (
      <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                  {Object.values(props.inv).map(e => {
                    return (
                      <Grid key={e.Ident+"griddd"} item>
                        <Machine key={e.Ident+"machineee"} m={e}/>
                      </Grid>
                    );
                  })}
              </Grid>
          </Grid>
      </Grid>  
  );
}
