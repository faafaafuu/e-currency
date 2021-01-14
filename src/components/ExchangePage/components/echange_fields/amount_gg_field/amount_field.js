import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import ChangeAsset from '../../change_asset/change_asset';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
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
  };

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
                  <ChangeAsset/>
                </InputAdornment>}
                labelWidth={60}
            />
            
            </FormControl>
        </div>
    )
}