import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './components/Nav';
import Description from './components/Description';
import Creations from './components/Creations';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Description />
        <Creations />
      </main>
      <Footer />
    </>
  );
}

export default App;
