import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layouts/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/ CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
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
          <Routes>
            <Route exact path='/' element={ <Landing /> } />
          </Routes>
          <section className="container">
            <Routes>
              <Route exact path="/register" element={ <Register /> } />
              <Route exact path="/login" element={ <Login /> } />
              <Route exact path="/dashboard" element={ 
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route exact path="/create-profile" element={ 
                <PrivateRoute>
                  <CreateProfile />
                </PrivateRoute>
              } />
            </Routes>
            <Alert />
          </section>
        </Fragment>
      </Router>
    </Provider>
)};

export default App;
