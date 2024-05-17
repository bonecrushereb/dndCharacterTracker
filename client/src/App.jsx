import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import CharacterView from './components/characterView/CharacterView';
import CharacterForm from './components/Forms/CharacterForm';

import './App.css'

function App() {

  return (
    <>
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/view/:id' element={<CharacterView />} />
        <Route path='/create' element={<CharacterForm />} />
        <Route path='/edit/:id' element={<CharacterForm />} />
      </Routes>
    </Router>
    </Provider>
    </>
  )
}

export default App
