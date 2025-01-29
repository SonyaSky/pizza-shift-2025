import React, { useEffect, useState } from 'react';
import { Grid } from '@mantine/core';
import PizzaComponent from '../components/PizzaComponent'; 

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('https://shift-intensive.ru/api/pizza/catalog'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.catalog);
        setPizzas(data.catalog); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <Grid className='pizzas-div row'>
      {pizzas.map((pizza) => (
        <PizzaComponent 
          key={pizza.id} 
          title={pizza.title} 
          description={pizza.description} 
          price={pizza.sizes[0].price} 
          imageUrl={pizza.img} 
        />
      ))}
    </Grid>
  );
};

export default PizzaList;