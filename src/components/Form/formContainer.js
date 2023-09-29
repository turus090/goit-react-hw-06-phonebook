import { connect } from 'react-redux';
import Form from './Form';
import { createContact } from './../../redux/slices/contacts';

const mapStateProps = state => ({
  list: state.contacts.list,
});

const mapDispatchProps = {
  createContact: createContact,
};

export default connect(mapStateProps, mapDispatchProps)(Form);
