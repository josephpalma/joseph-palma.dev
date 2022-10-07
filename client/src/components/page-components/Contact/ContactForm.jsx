import React, { useState } from 'react';
import '../../../styles/contact.css';
import { Typography } from '@mui/material';
import SimpleCrypto from 'simple-crypto-js';
import ContactField from './ContactField';
import badStuff from '../../../assets/badCharacters';
import prodApi from '../../../assets/api/production.api.json';
import devApi from '../../../assets/api/develop.api.json';
import ContactButton from './ContactButton';
import Spacer from '../../styled-components/Spacer';
import theme from '../../../assets/theme';

const postData = async (body, url) => {
  let data = '';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  };

  try {
    const response = await fetch(url, options);
    data = await response.json();
  } catch (error) {
    return ('failed');
  }

  return data;
};

function ContactMe({ screenWidth, isDarkTheme }) {
  let api = process.env.NODE_ENV !== 'production' ? devApi : prodApi;
  const crypt = new SimpleCrypto(process.env.REACT_APP_cryptoKey);

  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [subjectError, setSubjectError] = useState(false);
  const [subjectErrorMessage, setSubjectErrorMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [messageErrorMessage, setMessageErrorMessage] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('none');

  document.body.style.setProperty('--typed-text-color', isDarkTheme ? theme.palette.text.darkMode.light : theme.palette.text.lightMode.dark);
  document.body.style.setProperty('--field-border-color', isDarkTheme ? 'rgba(255,255,255, 0.3)' : 'rgba(0,0,0, 0.5)');
  document.body.style.setProperty('--field-border-hover-color', isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.7)');

  const validateName = (value) => {
    if (value === '') {
      setNameError(true);
      setNameErrorMessage('Name required');
      setName(value);
    } else if (badStuff.some((v) => value.includes(v))) {
      setNameError(true);
      setNameErrorMessage('Bad character spotted 🤨');
      setName(value);
    } else {
      setNameError(false);
      setName(value);
    }
  };

  const validateEmail = (value) => {
    if (value === '') {
      setEmailError(true);
      setEmailErrorMessage('Email required');
      setEmail(value);
    } else if (!value.includes('@') || !value.includes('.')) {
      setEmailError(true);
      setEmailErrorMessage('Email must include "@" and "."');
      setEmail(value);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      setEmailError(true);
      setEmailErrorMessage('Invalid email address');
      setEmail(value);
    } else if (badStuff.some((v) => value.includes(v))) {
      setEmailError(true);
      setEmailErrorMessage('Bad character spotted 🤨');
      setEmail(value);
    } else {
      setEmailError(false);
      setEmail(value);
    }
  };

  const validateSubject = (value) => {
    if (value === '') {
      setSubjectError(true);
      setSubjectErrorMessage('Subject required');
      setSubject(value);
    } else if (badStuff.some((v) => value.includes(v))) {
      setSubjectError(true);
      setSubjectErrorMessage('Bad character spotted 🤨');
      setSubject(value);
    } else {
      setSubjectError(false);
      setSubject(value);
    }
  };

  const validateMessage = (value) => {
    if (value === '') {
      setMessageError(true);
      setMessageErrorMessage('Message required');
      setMessage(value);
    } else if (badStuff.some((v) => value.includes(v))) {
      setMessageError(true);
      setMessageErrorMessage('Bad character spotted 🤨');
      setMessage(value);
    } else {
      setMessageError(false);
      setMessage(value);
    }
  };

  const validateForm = () => {
    validateName(name);
    validateEmail(email);
    validateSubject(subject);
    validateMessage(message);
    if (nameError || emailError || subjectError || messageError) {
      return false;
    }
    if (name === '' || email === '' || subject === '' || message === '') {
      return false;
    }
    return true;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    let valid = validateForm();
    if (!valid) {
      setResult('failed');
    } else {
      setResult('loading');
      let encryptedEmail = {
        name: crypt.encrypt(name),
        email: crypt.encrypt(email),
        subject: crypt.encrypt(subject),
        message: crypt.encrypt(message),
      };
      let response = await postData(encryptedEmail, api.email.url);
      let alert = () => {
        if (response !== '' && response !== 'failed' && response !== 'email could not be sent') {
          setResult('success');
        } else {
          setResult('error');
        }
      };
      setTimeout(alert, 2000);
    }
  };

  const renderText = () => {
    switch (result) {
      case 'success': {
        return (
          <Typography variant='body1' className='contact-text header-text' style={{ padding: '16px 0' }}>
            Thanks for sending me an email! I&apos;ll try to get back to you as soon as I can 👍
          </Typography>
        );
      }
      case 'error': {
        return (
          <Typography variant='body1' className='contact-text header-text' style={{ padding: '16px 0' }}>
            Something went wrong, please try again later 😔
          </Typography>
        );
      }
      default: {
        return (
          <Typography variant='body1' className='contact-text header-text'>
            Send me an email, I&apos;ll get back to you as soon as possible 😁
          </Typography>
        );
      }
    }
  };

  return (
    <section id='_contact' aria-label='Contact me'>
      <Spacer axis="vertical" size={29} />
      <div>{renderText()}</div>
      <form onSubmit={async (e) => submitForm(e)} className={result === 'success' ? 'react-form sent' : 'react-form'}>
        <ContactField
          label='Your Name'
          name='name'
          type='text'
          width={screenWidth}
          error={nameError}
          errorText={nameErrorMessage}
          validate={async (v) => validateName(v)}
        />
        <ContactField
          label='Your Email'
          name='email'
          type='text'
          width={screenWidth}
          error={emailError}
          errorText={emailErrorMessage}
          validate={async (v) => validateEmail(v)}
        />
        <ContactField
          label='The Subject'
          name='subject'
          type='text'
          width={screenWidth}
          error={subjectError}
          errorText={subjectErrorMessage}
          validate={async (v) => validateSubject(v)}
        />
        <ContactField
          label='The Message'
          name='message'
          type='text'
          width={screenWidth}
          error={messageError}
          errorText={messageErrorMessage}
          multiline
          validate={async (v) => validateMessage(v)}
        />
        <div style={{ marginTop: '5px' }}>
          <ContactButton
            result={result}
            errors={{ nameError, emailError, subjectError, messageError }}
            fields={{ name, email, subject, message }}
          />
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
