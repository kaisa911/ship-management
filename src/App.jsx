import React, { Suspense, PureComponent, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import load from '@/utils/loader';
import Loading from '@/components/Loading';
import Index from '@/pages/Index';

const About = lazy(load('About/index.jsx'));

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Suspense className="container" fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
