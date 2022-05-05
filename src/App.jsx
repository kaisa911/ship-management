import React, { Suspense, PureComponent, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import load from '@/utils/loader';
import Loading from '@/components/Loading';

import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Layout from '@/pages/Layout';

const About = lazy(load('About/index.jsx'));

class App extends PureComponent {
  constructor(props) {
    super(props);
    // add history if needed
    const { history } = props;
    console.log(history);
    this.state = {
      isLogin: false,
    };
  }
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    this.setState({ isLogin: !!token });
  }

  render() {
    const { isLogin } = this.state;
    const { history } = this.props;
    return (
      <Suspense className="container" fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/ship-management" element={<Layout />}>
            <Route path="/ship-management/about" element={<About />} />
            <Route exact path="/ship-management/" element={<Index history={history} />} />
          </Route>
          <Route
            path="*"
            element={!isLogin ? <Navigate to="/login" /> : <Navigate to="/ship-management" />}
          />
        </Routes>
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps)(App);
