import { connect } from 'react-redux';
import List from './List';

const mapStateProps = state => ({
  list: state.contacts.list,
});

const mapDispatchProps = {};

export default connect(mapStateProps, mapDispatchProps)(List);
