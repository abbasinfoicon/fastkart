import React from 'react';
import './App.scss';
import Header from './components/lib/Header';
import Footer from './components/lib/Footer';
import RoutesApi from './routes/index';

function App() {
  return (
    <>
      <Header />
      <RoutesApi />
      <Footer />
    </>
  );
}

export default App;
