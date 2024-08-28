import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';

function App() {


  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/account' element={<Account/>}>
            <Route path='register' element={<Register />}></Route>
            <Route path='login' element={<Login />}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
