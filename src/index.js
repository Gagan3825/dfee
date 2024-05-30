import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/screens/Login';
import { Routes,Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Home from './components/screens/Home';
import Bookstore from './components/screens/Bookstore';
import Profile from './components/screens/Profile';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/bookstore' element={<Bookstore/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
);


