import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';

import Navbar from './components/NavBar';
import PizzaList from './components/mainPage/PizzaList';
import ShoppingCart from './pages/ShoppingCart';
import './index.css';

export function App() {
  return (
    <MantineProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PizzaList />} /> 
          <Route path="/ShoppingCart" element={<ShoppingCart />} /> 
        </Routes>
      </div>

    </MantineProvider>
  );
}

export default App;