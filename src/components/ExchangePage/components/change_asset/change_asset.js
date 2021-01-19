import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon'

import coins_data from '../coin_logo/coins_data'
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



export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');
  const [coins, setCoins] = React.useState(coins_data)
  const [open, setOpen] = React.useState(false)
  let cd = ''

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClose = (e) => {
        setOpen(false);
        console.log('close')
        console.log(e.target)
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

  const nameChanger = () => {

    coins.map((c) => {
          if(c.name == currency ) {
            cd = c.tic
        }
      })
      return cd
  }
  cd = nameChanger()
  console.log(cd)
  


  return (
    <form className={classes.root, classes.form} noValidate autoComplete="off">
      <p className={classes.tic}>{cd}</p>
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