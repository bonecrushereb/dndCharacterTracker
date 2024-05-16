import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
