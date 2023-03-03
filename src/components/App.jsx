import { ToastContainer, toast } from 'react-toastify';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import SignIn from 'pages/SignIn/SignIn';
import Register from 'pages/Register/Register';
import { Header } from './Header/Header';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectError } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { refreshUser } from 'redux/user/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(refreshUser());
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <SignIn />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <Register />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
};
