import { connect } from 'react-redux';
import List from './List';
import { deleteContactAC } from 'redux/reducers/contacts';

const mapStateProps = state => ({
  list: state.contacts.list,
});

const mapDispatchProps = {
  deleteContact: deleteContactAC,
};

export default connect(mapStateProps, mapDispatchProps)(List);
