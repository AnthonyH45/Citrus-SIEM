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
  alive: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(4)',
    color: "green"
  },
  dead: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(4)',
    color: "red"
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

export interface machine {
  Uptime: string,
  Hostname: string,
  IP: string,
  OS: string,
  On: "1" | "0",
  Ident: string
  Services?: string[]
}

interface Props {
  m: machine,
  key?: string
}

export default function Machine({ m }: Props) {
  const classes = useStyles();

  const ip = m.IP.slice(0, m.IP.length - 5) + 'XXXXX';

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {m.Uptime}
        </Typography>
        <Typography variant="h5" component="h2">
          <span className={(m.On === "1") ? classes.alive:classes.dead}>•</span> {m.Hostname}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {ip} -- {m.OS}
        </Typography>

        {
          (m.Services === undefined) ?
          <b>No connections reported yet</b>
          : (
            <Typography variant="body2" component="p">
              <List
                  component="nav" aria-labelledby="nested-list-subheader"
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText primary="Active Connections" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                {(m.Services.map((s) => (
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary={s} />
                        </ListItem>
                    </List>
                  )))}
                </Collapse>
                </List>
                </Typography>
          )
      }
      </CardContent>
    </Card>
  );
}
