import {connect} from 'react-redux'
import ApiList from '../components/Api'

const mapStateToProps = (state) => {
  const length = state.post.length;
  const currentState = state.post[length - 1]; // 一番新しいstateを取り出す
  return {posts: currentState.items}; // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
};

export default connect(mapStateToProps)(ApiList);