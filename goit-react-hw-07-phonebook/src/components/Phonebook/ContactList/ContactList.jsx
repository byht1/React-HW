import React from 'react';
import { List, PreLoader } from './ContactList.styled';
import { Contact } from './Contact';
import { useContacts } from 'hook/useContacts';

export const ContactList = () => {
  const { filteredContacts, isLoading, error } = useContacts();

  const isError = error ? (
    error.data
  ) : (
    <List>
      {filteredContacts.map(x => (
        <Contact data={x} key={`${x.id}${x.phone}`} />
      ))}
    </List>
  );

  return <>{isLoading ? <PreLoader /> : isError}</>;
};
