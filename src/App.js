import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/header/header';
import Sidebar from './components/side-bar/Sidebar';

import Home from './components/home/home';
import Login from './components/login/Login';
import User from './components/user/User';
import Health from './components/health-insight/Health';
import Health from '.components/health-insight/Health';
import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
} from 'react-router-dom';

export default function App() {
  const isLoggedin = localStorage.getItem('isLoggedin');

  return (
    <div className="row">
      <HashRouter>
        <Header />
        <div className="col-md-2 p-0">
          {isLoggedin == 'true' && <Sidebar />}
        </div>
        <div className="col-md-10 p-0">
          <div className="pageWrapper">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/user" element={<User />}></Route>
              <Route exact path="/health-insight" element={<Health />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}
