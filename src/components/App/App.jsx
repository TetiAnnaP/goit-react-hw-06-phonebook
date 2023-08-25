import ContactsForm from '../ContactsForm/ContactsForm';
import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const addContact = newContact => {
    dispatch({ type: 'contacts/setContacts', payload: newContact });
  };

  const handleFilterChange = value => {
    dispatch({ type: 'contacts/setFilter', payload: value });
  };

  const handleDeleteContact = id => {
    dispatch({ type: 'contacts/deleteContacts', payload: id });
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <div className={css.wrapper}>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactsForm addContact={addContact} />
        <Filter handleFilterChange={handleFilterChange} />
        <ContactList handleDeleteContact={handleDeleteContact} />
      </div>
    </div>
  );
};

export default App;
