import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import { Landing } from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layouts/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <section className="container">
            <Routes>
              <Route exact path="/register" element={ <Register /> } />
              <Route exact path="/login" element={ <Login /> } />
            </Routes>
              <Alert />
          </section>
          <Routes>
            <Route exact path='/' element={ <Landing /> } />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
)};

export default App;
