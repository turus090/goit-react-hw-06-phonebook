import ListItem from './ListItem';
const List = props => {
  const listCollection = props.list.map(item => (
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
