import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import image from 'images/contact.png';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ListItemButton>
      <ListItemAvatar>
        <Avatar alt="contact" src={image} />
      </ListItemAvatar>
      <ListItemText>
        {name}: {phone}
      </ListItemText>
      <Button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ListItemButton>
    // <li className={css.item}>
    //   {name}: {phone}
    //   <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
    //     Delete
    //   </button>
    // </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
