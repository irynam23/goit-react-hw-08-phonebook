import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const sxstyles = {
  mr: 2,
  display: 'flex',
  padding: '10px 20px',
  fontWeight: 700,

  color: 'rgb(255, 242, 242)',
  border: '1px solid rgb(255, 242, 242)',
  textDecoration: 'none',
};

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ padding: '20px', backgroundColor: 'rgb(142, 167, 233)' }}
    >
      <Box
        sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Button variant="outlined" component={NavLink} to="/" sx={sxstyles}>
            Home
          </Button>
          {isLoggedIn ? (
            <Button
              variant="outlined"
              component={NavLink}
              to="/contacts"
              sx={sxstyles}
            >
              Contacts
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                component={NavLink}
                to="/login"
                sx={sxstyles}
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                component={NavLink}
                to="/register"
                sx={sxstyles}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>

        {isLoggedIn && <UserMenu />}
      </Box>
    </AppBar>
  );
};
