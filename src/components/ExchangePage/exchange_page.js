import React from 'react';
// import axios from 'axios'
import Binance from 'binance-api-node'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box"
import WatchLaterIcon from '@material-ui/icons/WatchLater';

import FioField from './components/echange_fields/fio_field/fio_field'
import CardField from './components/echange_fields/card_field/card_field'
import GiveData from './components/give_data/give_data'
import ReciveData from './components/recive_data/recive_data'

import './exchange_page.scss'


const client = Binance()
// const binance = 'https://api.binance.com/api/v3/exchangeInfo'

// Authenticated client, can make signed calls
// const client2 = Binance({
//   apiKey: '',
//   apiSecret: '',
//   getTime: () => Date.now()
// })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 25,
  },
  block: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
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
  avatar: {
    width: 25,
    height: 25,
  },
}));

export default function ExchangePage() {
  const classes = useStyles();

  const [coin_prices, setAllCoins] = React.useState()

  React.useEffect(() => {

      client.prices()
      .then((resp) => {
        const coins = resp
        setAllCoins(coins)
      })
      .catch((error) => console.log(('catch_err: '), error))
   
  }, [classes])

  // setTimeout(() => console.log(coin_prices),1)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper_title, classes.titleBg}>
          <Box className={classes.box}>
            <Typography variant="h5" className={classes.typography}>Быстрый обмен валют</Typography>
          </Box>
          <Box className={classes.box}>
            {/* <Avatar className={classes.avatar} alt="e-curr" src={TimeLogo}/> */}
            <WatchLaterIcon fontSize='default' className={classes.clock_logo}/>
            <Typography className={classes.typography}>Мы работаем круглосуточно каждый день</Typography>
          </Box>
          </Paper>
        </Grid>
        <Grid className={classes.block} item xs={12}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
            <form  noValidate autoComplete="off">
              <GiveData/>
              <FioField/>
              <CardField/>
            </form>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <ReciveData></ReciveData>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
