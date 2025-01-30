import React from 'react';
import { MantineProvider, Grid } from '@mantine/core';
import '@mantine/core/styles.css';

import Navbar from './components/NavBar';
import PizzaList from './components/PizzaList';



export function App() {
  return (
    <MantineProvider>
      <div>
      <Navbar/> 
      </div> 
    <PizzaList/>
    
    </MantineProvider>
  )
}
