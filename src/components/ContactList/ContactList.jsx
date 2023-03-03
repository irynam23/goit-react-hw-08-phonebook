import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';

import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {!!contacts.length && (
        <List
          dense
          sx={{
            width: '100%',
            maxWidth: 500,
            bgcolor: 'background.paper',
            height: 184,
            overflow: 'scroll',
          }}
        >
          {contacts.map(({ name, number, id }) => (
            <ContactListItem key={id} id={id} name={name} phone={number} />
          ))}
        </List>
      )}
    </div>
  );
};
