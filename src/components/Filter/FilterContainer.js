import { connect } from 'react-redux';
import Filter from './Filter';
import { changeFilterAC } from 'redux/reducers/contacts';

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});
const mapDispatchToProps = {
  changeFilter: changeFilterAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
