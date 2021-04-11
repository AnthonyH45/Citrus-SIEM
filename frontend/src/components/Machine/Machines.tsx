import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
  Services?: string[]
}

interface Props {
  m: machine,
  key?: string
}

export default function Machine({key, m}: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={key}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {m.Uptime}
        </Typography>
        <Typography variant="h5" component="h2">
          <span className={(m.On === "1") ? classes.alive:classes.dead}>•</span> {m.Hostname}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {m.IP} -- {m.OS}
        </Typography>
      </CardContent>
    </Card>
  );
}
