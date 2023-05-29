import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/itemsContact';
import { getFilterContacts } from '../redux/filterContacts';

export const useContacts = () => {
  const filter = useSelector(getFilterContacts);

  const selectFilteredContacts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (contacts, filter) => {
        return (
          contacts?.filter(x =>
            x.name.toLowerCase().includes(filter.toLowerCase())
          ) ?? []
        );
      }
    );
  }, []);

  return useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: selectFilteredContacts(result, filter),
      };
    },
  });
};
