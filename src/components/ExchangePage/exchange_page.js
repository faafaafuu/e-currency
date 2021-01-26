import React from 'react';
import axios from 'axios'
import Binance from 'binance-api-node'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ExchangeTitle from './components/exchange_title/exhange_title'
import GiveData from './components/give_data/give_data'
import ReciveData from './components/recive_data/recive_data'

// import coins_data from './components/coin_data/coins_data'



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
   
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
         <ExchangeTitle/>
        </Grid>
        <Grid className={classes.block} item xs={12}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
            <form  noValidate autoComplete="off">
              <GiveData />
            </form>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <ReciveData />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
