import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
  useLocation,
} from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Header from './components/header/header';
import Sidebar from './components/side-bar/Sidebar';
import Home from './components/home/home';
import Login from './components/login/Login';
import User from './components/user/User';
import AdultOnset from './components/adult-onset/adult-onset';
import Cancer from './components/cancer/cancer';
import Cardio from './components/cardio/Cardio';
import CancerReport from './components/cancer-report/cancer-report';
import Download from './components/download/download';
import Articles from './components/articles/articles';
import Faq from './components/faq/faq';

export default function App() {
  // const location = window.location.hash || '';
  const [path, setPath] = useState(location.replace('#/', ''));
  const [isLoggedin, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedin')
  );

  function onLogIn() {
    setIsLoggedIn('true');
  }

  // this is a temporary dolution to hide the sidebar based on route.
  //different solution must be found
  function onStateChange() {}

  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <HashRouter>
          <Header />
          <div
            className="col-md-2 p-0"
            style={{
              display:
                location.hash.replace('#/', '') == 'home' ||
                location.hash.replace('#/', '') == '' ||
                location.hash.replace('#/', '') == 'login'
                  ? 'none'
                  : 'block',
            }}
          >
            {isLoggedin == 'true' && <Sidebar />}
          </div>
          <div
            className={`p-0 ${
              location.hash.replace('#/', '') == 'home' ||
              location.hash.replace('#/', '') == '' ||
              location.hash.replace('#/', '') == 'login'
                ? 'col-md-12'
                : 'col-md-10'
            }`}
          >
            <div className="pageWrapper">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route
                  exact
                  path="/login"
                  element={<Login onLogInCbk={onLogIn} />}
                ></Route>
                <Route exact path="/user" element={<User />}></Route>
                <Route
                  exact
                  path="/adult-onset"
                  element={<AdultOnset />}
                ></Route>
                <Route exact path="/cancer" element={<Cancer />}></Route>
                <Route exact path="/cardio" element={<Cardio />}></Route>

                <Route
                  exact
                  path="/cancer-report"
                  element={<CancerReport />}
                ></Route>
                <Route exact path="/download" element={<Download />}></Route>
                <Route exact path="/articles" element={<Articles />}></Route>
                <Route exact path="/faq" element={<Faq />}></Route>
              </Routes>
            </div>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}
