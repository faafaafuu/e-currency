import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon'


import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    minWidth: 100,
    display: 'flex',
    alignItems: 'center'
  },
  tic: {
    padding: 20
    
  }
}));



export default function MultilineTextFields({cl_coins_data = [], give_amount, recive_amount}) {
  const given_amount = give_amount
  const reciven_amount = recive_amount
  const coinlist_data = cl_coins_data

//   if(given_amount){
//     console.log('amount g: ',given_amount)
//   }
// if(recive_amount){
//   console.log('amount r: ',reciven_amount)
// }
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');
  const [coins, setCoins] = React.useState(coinlist_data)
  const [open, setOpen] = React.useState(false)
  let ccoin_tic = ''

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClose = (e) => {
        setOpen(false);
        console.log(e.target)
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

  const nameChanger = () => {
    coinlist_data.map((c) => {
          if(c.name == currency ) {
            ccoin_tic = c.tic;
            c.amount = given_amount;
        }
      })
      return ccoin_tic
  }
  ccoin_tic = nameChanger()

  


  return (
    <form className={classes.root, classes.form} noValidate autoComplete="off">
      <p className={classes.tic}>{ccoin_tic}</p>
      <div>
        <Select
          value={currency}
          open={open}
          onChange={handleChange}
          variant="outlined"
          onOpen={handleOpen}
          onClose={handleClose}
          // renderValue={(value) => value}

        >
          {coins.map((option) => (
            <MenuItem  value={option.name}>
              <SvgIcon component={option.logo}/>
              <Typography 
              className="setTic"
              display='block'
              >{!open ? open : option.name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </div>
    </form>
  );
}
