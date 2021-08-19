import React, { useRef, useEffect, useState } from 'react';
import "./form.css";
import { Button, TextField } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import { Icon } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectName } from '../../store/profile/selector';

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const name = useSelector(selectName);
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
      author: name,
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