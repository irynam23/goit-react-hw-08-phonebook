import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { selectStatus } from 'redux/user/selectors';
import { Loader } from 'components/Loader/Loader';
import css from './SignUpForm.module.css';

function SignUpForm({ onSubmit, isLoginForm = false }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const status = useSelector(selectStatus);

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name }),
      email,
      password,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <>
      <h2>{isLoginForm ? 'Please, sign in' : 'Please, sign up'}</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        {isLoginForm ? null : (
          <label className={css.input}>
            <TextField
              variant="filled"
              label="Name"
              type="text"
              name="name"
              placeholder={'Enter your name'}
              value={name}
              onChange={handleInputChange}
              required
            />
          </label>
        )}
        <label className={css.input}>
          <TextField
            variant="filled"
            label="E-mail"
            type="email"
            name="email"
            placeholder={'Enter your e-mail'}
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className={css.input}>
          <TextField
            variant="filled"
            label="Password"
            type="password"
            name="password"
            minLength={7}
            placeholder={'Enter your password'}
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>

        <Button
          variant="contained"
          disabled={status === 'pending'}
          type="submit"
          sx={{
            height: '40px',
            color: 'rgb(255, 242, 242)',
            backgroundColor: 'rgb(142, 167, 233)',
          }}
        >
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </Button>
        {status === 'pending' && <Loader />}
      </form>
    </>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
