import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Route, Routes, HashRouter } from 'react-router-dom';

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
import Metabolism from './components/metabolism/Metabolism';
import Carrier from './components/crrier-risk/Carrier';
import Pop from './components/pop-up/Pop';
import Carrepo from './components/cardio-report/Carrepo';
import Pharmaco from './components/pharmacogenomics/Pharmaco';
import Metarepo from'./components/metabolic-report/Metarepo';

export default function App() {
  // const location = window.location.hash || '';
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedin')
  );

  function onLogIn() {
    setIsLoggedIn('true');
  }

  // this is a temporary dolution to hide the sidebar based on route.
  //different solution must be found
  function showSideBar(value) {
    setSidebarVisibility(value);
  }

  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <HashRouter>
          <Header />
          <div
            className="col-md-1 p-0"
            style={{
              display:
                sidebarVisibility && isLoggedin == 'true' ? 'block' : 'none',
            }}
          >
            <Sidebar />
          </div>
          <div
            className={`p-0 ${
              sidebarVisibility && isLoggedin == 'true'
                ? 'col-md-11'
                : 'col-md-12'
            }`}
          >
            <div className="pageWrapper">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/home"
                  element={<Home onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/login"
                  element={<Login onLogInCbk={onLogIn} onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/user"
                  element={<User onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/adult-onset"
                  element={<AdultOnset onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/cancer"
                  element={<Cancer onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/cardio"
                  element={<Cardio onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/metabolism"
                  element={<Metabolism onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/crrier-risk"
                  element={<Carrier onLoad={showSideBar} />}
                ></Route>
                
                 <Route
                  exact
                  path="/pharmacogenomics"
                  element={<Pharmaco onLoad={showSideBar} />}
                ></Route>

                <Route
                  exact
                  path="/cancer-report"
                  element={<CancerReport onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/cardio-report"
                  element={<Carrepo onLoad={showSideBar} />}
                ></Route>
                 <Route
                  exact
                  path="/meta-repo"
                  element={<Metarepo onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/download"
                  element={<Download onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/articles"
                  element={<Articles onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/faq"
                  element={<Faq onLoad={showSideBar} />}
                ></Route>
                <Route
                  exact
                  path="/pop-up"
                  element={<Pop onLoad={showSideBar} />}
                ></Route>
              </Routes>
            </div>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}
