

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
    },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function FioField() {
  const classes = useStyles();

  return (
    <div className={classes.root + " MuiContainer-root MuiContainer-maxWidthLg"}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
        <TextField
          id="outlined-full-width"
          label="ФИО"

          placeholder="ФИО получателя"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </FormControl>
    </div>
  );
}
