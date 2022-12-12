import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/header/header';
import Home from './components/home/home';
import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
