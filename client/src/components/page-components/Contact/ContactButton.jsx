import React from 'react';
import '../../../styles/contact.css';
import { Button, CircularProgress } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const ContactButton = ({ result, errors, fields }) => {
  let isErrors = (errors.nameError || errors.emailError || errors.subjectError || errors.messageError);
  let isEmpty = (fields.name === '' || fields.email === '' || fields.subject === '' || fields.message === '');

  return (
    <div className='contact-button'>
      {isErrors || isEmpty ? <Button disabled type='submit' variant='contained' size='large'>Send</Button> : <></>}
      {result !== 'loading' && !isErrors && !isEmpty ? <Button type='submit' variant='contained' size='large'>Send</Button> : <></>}
      {result === 'loading' && !isErrors && !isEmpty ?
        <LoadingButton
          loading
          type='submit'
          variant='contained'
          loadingIndicator={<CircularProgress size={16} />}
          size='large'
        >Send</LoadingButton> : <></>
      }
    </div>
  );
};

export default ContactButton;
