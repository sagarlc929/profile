import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';
import logo from './assets/logo.svg';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName='sagarlc929' />}/>
          <Route path='/projects' element={<Projects userName='sagarlc929'/>} />
          <Route path='/projects/:name' element={<ProjectDetail userName='sagarlc929'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
