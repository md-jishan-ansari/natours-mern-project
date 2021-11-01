import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';

const Input = ({ name, label, value, type, handleChange, setPasswordType }) => {
  return (
    <Grid item xs={12}>
      <TextField
        name={name}
        label={label}
        value={value}
        type={type}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        type === 'password' ? setPasswordType('text') : setPasswordType('password');
                      }}
                    >
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
