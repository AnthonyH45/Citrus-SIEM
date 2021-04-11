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
  inv: Map<string, machine>,
  key?: string
}

export default function MGrid({inv, key}: Props) {
  const classes = useStyles();

  if (inv.size === 0) return <h2>No machines added yet!</h2>;

  inv.forEach((v, k, m) => {
    toAdd +=
      <Grid key={v.Ident} item>
        <Machine key={v.Ident+"machineee"} m={v}/>
      </Grid>;
  });

  return (
      <Grid container className={classes.root} spacing={2} key={key}>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                  {toAdd}
              </Grid>
          </Grid>
      </Grid>  
  );
}
