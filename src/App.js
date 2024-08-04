import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <>
      <Nav/>
    <Router>
      <Main />
    </Router>
      <Header/>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;