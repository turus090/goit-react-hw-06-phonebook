import { connect } from 'react-redux';
import Form from './Form';
import { createContactAC } from './../../redux/reducers/contacts';

const mapStateProps = () => ({});

const mapDispatchProps = {
  createContact: createContactAC,
};

export default connect(mapStateProps, mapDispatchProps)(Form);
