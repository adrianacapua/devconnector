import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/layouts/NavBar';
import { Landing } from './components/layouts/Landing';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
import './App.css';

const App = () => (
    <Router>
      <Fragment>
        <NavBar />
        <section className="container">
              
        </section>
        <Routes>
          <Route exact path='/' element={ <Landing /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/login" element={ <Login /> } />
        </Routes>
      </Fragment>
    </Router>
);

export default App;
