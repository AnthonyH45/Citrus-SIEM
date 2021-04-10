import React from 'react';
import Machines from './Machines'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';

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

function MGrid() { // machines) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

    const mmm = JSON.parse(`
        [{
            "Name": "test1",
            "IP": "1.1.1.1",
            "OS": "lunix",
            "Services": ["nginx", "mysql"]
        },
        {
            "Name": "test2",
            "IP": "1.1.1.1",
            "OS": "lunix",
            "Services": ["nginx", "mysql"]
        },
        {
            "Name": "test3",
            "IP": "1.1.1.1",
            "OS": "lunix",
            "Services": ["nginx", "mysql"]
        }
    ]`)

    console.log(mmm)

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {mmm.map((ms) => (
                        <Grid item>
                            {/* <Paper className={classes.paper} /> */}
                            <Machines machines={ms}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>  
    );
    //   {/* <Grid item xs={12}>
    //     <Paper className={classes.control}>
    //       <Grid container>
    //         <Grid item>
    //           <FormLabel>spacing</FormLabel>
    //           <RadioGroup
    //             name="spacing"
    //             aria-label="spacing"
    //             value={spacing.toString()}
    //             onChange={handleChange}
    //             row
    //           >
    //             {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
    //               <FormControlLabel
    //                 key={value}
    //                 value={value.toString()}
    //                 control={<Radio />}
    //                 label={value.toString()}
    //               />
    //             ))}
    //           </RadioGroup>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </Grid> */}
}

export default MGrid;
