import React, { useState } from 'react';
import '../../../styles/contact.css';
import { TextField } from '@mui/material';

function ContactField({ label, name, type, error, errorText, multiline, validate, width }) {
  const [focused, setFocused] = useState(false);
  const inputFieldStyles = {
    display: 'flex',
    width: 'calc(100vw / 3)',
    minWidth: width > 600 ? '500px' : '76vw',
    backgroundColor: 'transparent',
    outline: 0,
    boxShadow: 'var(--primary-color)',
  };
  let renderable = '';

  const changeField = async (values) => {
    setFocused(true);
    validate(values.target.value);
  };

  const initialTextField = () => (
    <TextField
      id='initial-text-field'
      label={label}
      onChange={async (v) => changeField(v)}
      name={name}
      type={type}
      variant='outlined'
      size='small'
      sx={inputFieldStyles}
    />
  );

  const errorTextField = () => (
    <TextField
      id='error-text-field'
      error
      helperText={errorText}
      label={label}
      variant='outlined'
      onChange={async (v) => changeField(v)}
      name={name}
      type={type}
      size='small'
      sx={inputFieldStyles}
    />
  );

  const focusedTextField = () => (
    <TextField
      id='focused-text-field'
      className='focused-field'
      // color='primary'
      label={label}
      variant='outlined'
      onChange={async (v) => changeField(v)}
      name={name}
      type={type}
      sx={inputFieldStyles}
      size='small'
      focused
    />
  );

  const initialMultilineTextField = () => (
    <TextField
      id="initial-multiline-text-field"
      label={label}
      onChange={async (v) => changeField(v)}
      name={name}
      type={type}
      variant='outlined'
      size='small'
      sx={inputFieldStyles}
      multiline
      fullWidth
      rows={12}
    />
  );

  const focusedMultilineTextField = () => (
    <TextField
      id='focused-multiline-text-field'
      label={label}
      onChange={async (v) => changeField(v)}
      name={name}
      type={type}
      variant='outlined'
      size='small'
      sx={inputFieldStyles}
      multiline
      focused
      fullWidth
      rows={12}
    />
  );

  const errorMultilineTextField = () => (
    <TextField
      id="error-multiline-text-field"
      error
      helperText={errorText}
      label={label}
      variant='outlined'
      onChange={async (v) => changeField(v)}
      name={name}
      type={type}
      sx={inputFieldStyles}
      size='small'
      rows={12}
      fullWidth
      multiline
    />
  );

  if (multiline && !error) {
    if (focused) {
      renderable = focusedMultilineTextField();
    } else {
      renderable = initialMultilineTextField();
    }
  } else if (multiline && error) {
    renderable = errorMultilineTextField();
  } else if (!multiline && !error) {
    if (focused) {
      renderable = focusedTextField();
    } else {
      renderable = initialTextField();
    }
  } else {
    renderable = errorTextField();
  }

  return (
    <div className='field-wrapper'>
      {renderable}
    </div>
  );
}

export default ContactField;
