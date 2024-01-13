import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <About />
      <Projects />
      <Contact></Contact>
    </div>
  );
}

export default App;
