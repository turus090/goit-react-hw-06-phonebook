import { connect } from 'react-redux';
import List from './List';
import { deleteContact } from 'redux/slices/contacts';

const mapStateProps = state => ({
  list: state.contacts.list,
  filter: state.contacts.filter,
});

const mapDispatchProps = {
  deleteContact: deleteContact,
};

export default connect(mapStateProps, mapDispatchProps)(List);
