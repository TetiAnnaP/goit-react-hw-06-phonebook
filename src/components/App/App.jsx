import ContactsForm from '../ContactsForm/ContactsForm';
import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
// import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ])
  //  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const addContact = newContact => {
    // setContacts(prev => [...prev, newContact]);
    dispatch({ type: 'contacts/setContacts', payload: newContact });
  };

  const handleFilterChange = value => {
    // setFilter(value);
    dispatch({ type: 'contacts/setFilter', payload: value });
  };

  const handleDeleteContact = id => {
    // setContacts(prev => prev.filter(contact => contact.id !== id));
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

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   filter: PropTypes.string,
//   addContact: PropTypes.func,
//   handleFilterChange: PropTypes.func,
//   handleDeleteContact: PropTypes.func,
// };

export default App;
