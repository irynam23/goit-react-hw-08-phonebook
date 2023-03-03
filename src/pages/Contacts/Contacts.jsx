import React, { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.wrap}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        <div>
          <h1>Contacts</h1>
          {contacts.length ? (
            <div className={css.contactswrap}>
              <Filter />
              <ContactList />
            </div>
          ) : (
            <p>No contacts added</p>
          )}
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default Contacts;
