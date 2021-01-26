import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box"
import WatchLaterIcon from '@material-ui/icons/WatchLater';

const useStyles = makeStyles((theme) => ({
  paper_title: {
    padding: theme.spacing(2),
  },
  clock_logo: {
    width:50,
    height:50,
    paddingBottom: 30,
  },
  box: {
    display: "flex",
    padding: 10,
    justifyContent: 'center'
  },
  typography: {
    maxWidth: 550,
    display: 'flex',
    flexWrap: 'nowrap',
  },
  titleBg: {
    color: '#fff',
    background: 'initial',
    boxShadow: 'none',
    padding: 50,
    textTransform: 'uppercase'
  },
}));

export default function ExchangeTitle () {
  const classes = useStyles();

  return (
    <Paper className={classes.paper_title, classes.titleBg}>
        <Box className={classes.box}>
            <Typography variant="h5" className={classes.typography}>Быстрый обмен валют</Typography>
            </Box>
            <Box className={classes.box}>
            <WatchLaterIcon fontSize='default' className={classes.clock_logo}/>
            <Typography className={classes.typography}>Мы работаем круглосуточно каждый день</Typography>
        </Box>
    </Paper>
  );
}
