import React from 'react';
import { useDispatch } from 'react-redux';

import SignUpForm from 'components/SignUpForm/SignUpForm';
import { register } from 'redux/user/operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    dispatch(register(formData));
  };

  return (
    <div>
      <SignUpForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
