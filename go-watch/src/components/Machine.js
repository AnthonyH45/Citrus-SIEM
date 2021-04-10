import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'gainsboro'
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

function Machine(m) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(m)

  return (
        <Card className={classes.root}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {m.machine.Network}
            </Typography>
            <Typography variant="h5" component="h2">
                {m.machine.Name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {m.machine.IP} -- {m.machine.OS}
            </Typography>
            <Typography variant="body2" component="p">
              <List
                  component="nav" aria-labelledby="nested-list-subheader"
              >
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Services" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                {m.machine.Services.map((s) => (
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary={s} />
                        </ListItem>
                    </List>
                  ))}
                </Collapse>
                </List>
                </Typography>
        </CardContent>
        </Card>
  );
}

export default Machine;
