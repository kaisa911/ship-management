import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '@/actions';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    const { history } = props;
    this.state = {};
  }
  async componentDidMount() {
    const { Actions } = this.props;
    console.log(Actions);
    await Actions.getUserInfo();
  }
  render() {
    return <div>index</div>;
  }
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return {
    Actions: bindActionCreators(Actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
