import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import coins_data from '../coin_data/coins_data'
import CoinList from '../coin_list/coin_list';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: 16
    },
    margin: {
      margin: theme.spacing(1),
      // padding: 16
    },
    field: {
      display: 'flex',
      flexDirection: 'row-reverse',
      overflow: 'hidden',
    },
    tic: {
      margin: 0
    }
  }));
  

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    return values;
  };

  const a = () => {
    coins_data.map((c) => {
        if(c.amount ) {
          console.log(c.amount)
      }
    })
  }

  
    return (
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Кол-во</InputLabel>
            <OutlinedInput
                className={classes.field}
                id="outlined-adornment-amount"
                value={values.amount}
                onChange={handleChange('amount')}
                startAdornment={<InputAdornment className={classes.tic} position="start">
                  <CoinList cl_coins_data={coins_data} recive_amount={values.amount}/>
                </InputAdornment>}
                labelWidth={60}
            />
            
            </FormControl>
        </div>
    )
}