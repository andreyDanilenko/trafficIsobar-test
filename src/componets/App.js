import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './header/Header'
import AppRouter from '../componets/appRouter/AppRouter'
import Footer from './footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
