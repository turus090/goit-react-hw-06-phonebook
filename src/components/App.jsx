import s from './App.module.css';
import FilterContainer from './Filter/FilterContainer';
import FormContainer from './Form/formContainer';
import ListContainer from './List/listContainer';
export const App = () => {
  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <FormContainer />
      <FilterContainer />
      <ListContainer />
    </div>
  );
};
