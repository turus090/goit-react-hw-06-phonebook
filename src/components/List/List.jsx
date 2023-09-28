import { startSearch } from 'assets/searchFn';
import ListItem from './ListItem';
const List = props => {
  const currentList =
    props.filter.length === 0
      ? props.list
      : startSearch(props.list, props.filter);
  const listCollection = currentList.map(item => (
    <ListItem
      key={item.id}
      id={item.id}
      name={item.name}
      phone={item.phone}
      deleteContact={props.deleteContact}
    />
  ));

  return <ul>{listCollection}</ul>;
};

export default List;
