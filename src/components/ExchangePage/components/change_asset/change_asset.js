import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import coin_logos from '../coin_logo/coins_data'
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

}));

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
          value={age}
          onChange={handleChange}
        >
          <MenuItem 
          value={20} className={classes.selectBg}>
            <SvgIcon component={coin_logos[0].logo} ></SvgIcon><p className={classes.ticker}>BTC</p></MenuItem>
          {/* <MenuItem value={30}><Avatar></Avatar> Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}

