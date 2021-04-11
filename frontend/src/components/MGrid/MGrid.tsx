import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Machine, { machine } from '../Machine';
import { renderIntoDocument } from 'react-dom/test-utils';
import { Component } from 'react';
import { Socket } from 'dgram';

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

type GridProps = {
  inv: Map<string, machine>;
}

type GridState = {
  inv: Map<string, machine>;
}

export default class MGrid extends Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props);

    /*
    this.setState({
      inv: props.inv,
    });
    */

    console.log('from mgrid:');
    console.log(this.props);
  }

  render() {
    return (
      <Grid container className="AAA" spacing={2}>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                  {Array.from(this.props.inv).map((kv) => {
                    const gridKey = `Grid_${kv[0]}`;
                    const machineKey = `Machine_${kv[0]}`;
                    return (
                      <Grid key={gridKey} item>
                        <Machine key={machineKey} m={kv[1]}/>
                      </Grid>
                    );
                  })}
              </Grid>
          </Grid>
      </Grid>  
    );
  }
}

/*
export class MGrid extends React.Component {
  
    const classes = useStyles();

    console.log(inv)

    render() {
      return (
        <Grid container className={classes.root} spacing={2} key={key}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {inv.map(e => {
                      return (
                        <Grid key={e.Ident} item>
                          <Machine key={e.Ident} m={e}/>
                        </Grid>
                      );
                    })}
                </Grid>
            </Grid>
        </Grid>  
    );
    }
}
*/
