import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Machine, { machine } from '../Machine';
// import { renderIntoDocument } from 'react-dom/test-utils';
// import { Component } from 'react';
// import { Socket } from 'dgram';

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

// type GridProps = {
//   inv: Map<string, machine>;
// }

// type GridState = {
//   inv: Map<string, machine>;
// }

// export default class MGrid extends Component<GridProps, GridState> {
  // constructor(props: GridProps) {
  //   super(props);
  // }

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
