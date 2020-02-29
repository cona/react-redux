import { connect } from 'react-redux';
import * as actions from '../actions/AddPoint';
import AddPoint from '../components/AddPoint';

const mapStateToProps = state => {
  return {
    lens: state.lens,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //onChangeSelect: (id) => dispatch(actions.changeLens(id)),
    onChangeSelect: (point) => dispatch(actions.changeLens(point)),
    //toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPoint)