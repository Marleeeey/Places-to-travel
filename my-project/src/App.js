import React from 'react';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Activities from './components/Activities'
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Form from './components/Form';
import Foteer from './components/Foteer';

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Form />
      <Foteer />
    </div>
  );
}

export default App;
