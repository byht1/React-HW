import React from 'react';
import { Span, Input, Button, Form } from './ContactForm.styled';
import { useContactForm } from 'hook/useContactForm';

export const ContactForm = () => {
  const { name, setName, phone, setPhone, onSubmit } = useContactForm();

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="name">
        <Span>Name</Span>
        <Input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Rosie Simpson"
        />
      </label>

      <label htmlFor="number">
        <Span>Number</Span>
        <Input
          onChange={e => setPhone(e.target.value)}
          value={phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="645-17-79"
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
// fix
