import React, { Component } from 'react';
import { Filter } from './Phonebook/Filter/Filter';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactList/ContactList';
import { Section, Containet, H1, DivList } from './App.stiled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    fillet: '',
  };

  newContacts = newObj => {
    if (this.state.contacts.some(x => x.name === newObj.name)) {
      alert(`${newObj.name} is already is contacts`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newObj],
    }));
    return true;
  };

  onCahangeFilter = event => {
    this.setState({
      fillet: event.target.value.toLowerCase(),
    });
  };

  fillet = () => {
    if (this.state.fillet !== '') {
      return this.state.contacts.filter(x =>
        x.name.toLowerCase().includes(this.state.fillet)
      );
    }

    return false;
  };

  deleteContacts = eve => {
    const index = this.state.contacts.findIndex(x => x.id === eve.target.name);

    // Перевірки на -1 не має так як це не можливо!!!! (сподіваюсь)

    this.setState(this.state.contacts.splice(index, 1));
  };

  render() {
    const { contacts } = this.state;
    const fillter = this.fillet();
    return (
      <Section>
        <Containet>
          <div>
            <H1>Phonebook</H1>
            <ContactForm newContacts={this.newContacts} />
          </div>

          <DivList>
            <h2>Contacts</h2>
            <Filter onChange={this.onCahangeFilter} />
            <ContactList
              fillter={fillter}
              contacts={contacts}
              deleteContacts={this.deleteContacts}
            />
          </DivList>
        </Containet>
      </Section>
    );
  }
}
