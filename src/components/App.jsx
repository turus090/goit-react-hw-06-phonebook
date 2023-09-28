import { useSelector } from 'react-redux';
import s from './App.module.css';
import FilterContainer from './Filter/FilterContainer';
import FormContainer from './Form/formContainer';
import ListContainer from './List/listContainer';
import Message from './message/Message';
import { startSearch } from 'assets/searchFn';
export const App = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.list);
  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <FormContainer />
      <FilterContainer />
      {filter.length !== 0 && startSearch(contacts, filter).length === 0 ? (
        <Message text="No items in list" />
      ) : (
        <ListContainer />
      )}
    </div>
  );
};
