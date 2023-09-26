import s from './list.module.css';
const ListItem = ({ id, name, phone, deleteContact }) => {
  return (
    <li className={s.contactItem} key={id}>
      <div className={s.content}>
        <p>{name}: </p>
        <p>{phone}</p>
      </div>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;
