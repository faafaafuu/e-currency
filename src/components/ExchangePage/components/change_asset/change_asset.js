import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import coins_data from '../coin_logo/coins_data'
import SvgIcon from '@material-ui/core/SvgIcon'
import './change_asset.scss'


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  select: {
    borderLeft: '1px solid black',
  },
  selectBg: {
    backgroundColor: '#fff !important',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  ticker: {
    margin: 8,
  },
  chose_tic_btn: {
    display: 'flex',
  },
  select_coins: {
    display: 'flex',
    flexDirection: 'column',
  }

}));

const SelectCoins = () => {
  return coins_data.map((cd) => {
    return(
      <MenuItem 
      value={cd.tic} >
      <SvgIcon component={cd.logo}/>
      {cd.name}
    </MenuItem>
    )
  })
}

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <div className={classes.select}>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={10}
          onChange={handleChange}
        >
          <SelectCoins/>
        </Select>
      </FormControl>
    </div>
  );
}

