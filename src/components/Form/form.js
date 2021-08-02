import React, {useRef, useEffect, useState } from 'react';
import { AUTHORS } from '../../constants';
import "./form.css";
import { Button, TextField } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import { Icon } from '@material-ui/core';

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');

  
  const inputRef = useRef(null);
  useEffect(() => {
      inputRef.current?.focus();
  }, []);

  const restInputRef = () => {
      inputRef.current?.focus();
  }
  

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      author: AUTHORS.human,
      id: Date.now(),
      text: value,
    });
    setValue('');
  }

  return (

    <form onSubmit={handleSubmit} ref={restInputRef} noValidate autoComplete="off">
      <TextField inputRef={inputRef} id="outlined-basic" label="Введите сообщение..." variant="outlined" type="text" value={value} onChange={handleChange} />
      <Button type="submit" variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>}>
      </Button >
    </form>
  


  )
}