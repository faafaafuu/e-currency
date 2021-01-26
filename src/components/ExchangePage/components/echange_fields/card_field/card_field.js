

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
    },

}));

export default function CardField() {
  const classes = useStyles();



  return (
    <div className={classes.root + " MuiContainer-root MuiContainer-maxWidthLg"}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
        <TextField
          id="outlined-full-width"
          label="№ карты"

          placeholder="Номер карты"
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
