import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectUserData } from 'redux/user/selectors';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import image from 'images/contact.png';

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  return (
    <div className={css.wrap}>
      <Avatar alt="contact" src={image} />
      <p className={css.user}>{userData.email}</p>
      <Button
        variant="outlined"
        sx={{
          color: 'rgb(114, 134, 211)',
          backgroundColor: 'rgb(255, 242, 242)',
          textDecoration: 'none',
        }}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </div>
  );
};
