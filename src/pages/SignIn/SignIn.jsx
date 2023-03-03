import React from 'react';
import { useDispatch } from 'react-redux';

import SignUpForm from 'components/SignUpForm/SignUpForm';
import { logIn } from 'redux/user/operations';

const SignIn = () => {
  const dispatch = useDispatch();

  const handleLogin = formData => {
    dispatch(logIn(formData));
  };

  return (
    <div>
      <SignUpForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
};

export default SignIn;
