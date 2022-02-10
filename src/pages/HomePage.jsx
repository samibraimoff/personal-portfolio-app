import React from 'react';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Intro from '../components/intro/Intro';
import MenuButtons from '../components/menu/MenuButtons';
import Navbar from '../components/navbar/Navbar';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Contact />
      <Footer />
      <MenuButtons />
    </div>
  );
};

export default Home;
