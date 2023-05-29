import { useState } from 'react';
import {
  useAddContactsMutation,
  useGetContactsQuery,
} from 'redux/itemsContact';
import { toast } from 'react-toastify';

export const useContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [post] = useAddContactsMutation();
  const { data: contactList } = useGetContactsQuery();

  const onSubmit = async e => {
    e.preventDefault();

    const isDuplicate = contactList.filter(x => x.name === name);
    if (isDuplicate.length) {
      toast.warning(`${name} is already in contacts`);
      return;
    }
    const data = await post({ name, phone });
    if (data.error) {
      toast.error("Sorry, we couldn't add a new contact");
      return;
    }
    toast.success(`Contact successfully added`);
    setName('');
    setPhone('');
  };

  return { name, phone, setName, setPhone, onSubmit };
};
