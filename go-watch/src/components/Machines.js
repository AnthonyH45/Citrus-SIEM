import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  nested: {
    paddingLeft: 40,
  },
});

function Machines(machines) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <header className="App-header">
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Network
              </Typography>
              <Typography variant="h5" component="h2">
                Machine Name
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                IP -- OS
              </Typography>
              <Typography variant="body2" component="p">
              
              <List
                component="nav" aria-labelledby="nested-list-subheader"
                // subheader={
                //   <ListSubheader component="div" id="nested-list-subheader">
                //     Services
                //   </ListSubheader>
                // }
              >
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Services" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Service 1" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Service 2" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Service 3" />
                  </ListItem>
                </List>
              </Collapse>
              
              </List>
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
              
            </CardActions> */}
          </Card>

          

      </header>
    </div>
  );
}

export default Machines;
