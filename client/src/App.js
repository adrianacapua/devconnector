import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/layouts/NavBar';
import { Landing } from './components/layouts/Landing';
import Register from './components/auth/Register';
import { Login } from './components/auth/Login';
import Alert from './components/layouts/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <section className="container">
            <Alert />
        </section>
        <Routes>
          <Route exact path='/' element={ <Landing /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/login" element={ <Login /> } />
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
