import React from 'react';
import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MenuButtons from './components/menu/MenuButtons';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Intro />
      <About />
      <Contact />
      <Footer />
      <MenuButtons />
    </div>
  );
};

export default App;
