import React, { useState, useRef } from 'react';
import { AUTHORS } from '../../constants';
import "./form.css";

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

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
    <form onSubmit={handleSubmit}>
      <input className="" ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input className="btn" type="submit" />
    </form>
  )
}